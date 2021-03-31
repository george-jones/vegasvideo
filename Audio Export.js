import System.Windows.Forms;
import ScriptPortal.Vegas;

function AudioExport() {
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var dest = null;
	var renderer_name = 'MP3 Audio';
	var template_name = '128 Kbps, CD Quality Audio';
	var i = 0;
	var m = null;
	var r = null;
	var t = null;
	var clip = null;
	var clips = [ ];
	var track = null;
	var evt = null;
	var new_evt = null;
	var tmpl = null;
	var pad = "000";
	var filename = null;
	
	r = Vegas.Renderers.FindByName(renderer_name);
	if (!r) {
		MessageBox.Show("Could not find renderer: " + renderer_name);
		return;
	}

	t = r.Templates.FindByName(template_name);
	if (!t) {
		MessageBox.Show("Could not find template: " + template_name);
		return;
	}

	dest = Vegas.Project.FilePath.split('\\').slice(0, -1).join('\\') + '\\';

	for (track in Vegas.Project.Tracks) {
		if (track.MediaType == MediaType.Audio) {			
			break;
		}
		track = null;
	}
	
	if (track === null) {
		MessageBox.Show("Could not find audio track");
		return;
	}
	
	evt = track.Events[0];
	if (!evt) {
		MessageBox.Show("Track missing clip");
		return;
	}

	for (m in Vegas.Project.Markers) {
		if (clip === null) {
			clip = {
				"clip_type": m.Label,
				"start": m.Position,
				"start_millis": Math.floor(m.Position.Nanos / 10000),
				"end_millis": -1
			};
		} else if (clip.end_millis == -1) {
			clip.end = m.Position;
			clip.end_millis = Math.floor(m.Position.Nanos / 10000)
		} else {
			clip.ask_time = Math.floor(m.Position.Nanos / 10000);
			clips.push(clip);
			clip = null;
		}
	}
	
	// split into clips so that we can add fade in/out to avoid crackling
	for (i = clips.length - 1; i >= 0; i--) {
		clip = clips[i];
		Vegas.Transport.SelectionStart = clip.start;
		Vegas.Transport.SelectionLength = clip.end - clip.start;
		evt.Split(clip.end);
		evt.Split(clip.start);
		new_evt = track.Events[1];
		new_evt.FadeIn.Length = Timecode.FromMilliseconds(10);
		new_evt.FadeOut.Length = Timecode.FromMilliseconds(10);		
	}
	
	var f = fso.OpenTextFile(dest + 'data.json', 2, true);
	f.WriteLine('{ "clips": [');
	
	var comma = ',';
	for (i=0; i < clips.length; i++) {
		if (i == clips.length - 1) {
			comma = '';
		}
		
		clip = clips[i];
		filename = (pad + i).slice(-pad.length) + '.mp3';
		Vegas.Render(dest + filename, t, clip.start, clip.end - clip.start);
		f.WriteLine('\t{ "filename": "' + filename +
			'", "type": "' + clip.clip_type +
			'", "start": ' + clip.start_millis +
			', "end": ' + clip.end_millis +
			', "ask_time": ' + clip.ask_time +
			', "options": [  ] }' + comma);
	}
	f.WriteLine('] }');
	f.Close();	
	
	MessageBox.Show("Done");
}

try {
	AudioExport();
} catch (ex) {
	MessageBox.Show(ex);
}