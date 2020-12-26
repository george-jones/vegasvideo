import System.Windows.Forms;
import ScriptPortal.Vegas;

function SopranoEvents() {
	var events = [
		{ "measure": 0, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 0, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 0, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 0, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 1, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 1, "beat": 2, "clip": "ds4-1", "length": 1 },		
		{ "measure": 1, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 1, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 2, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 2, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 2, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 2, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 3, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 3, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 3, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 3, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 4, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 4, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 4, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 4, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 5, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 5, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 5, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 5, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 6, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 6, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 6, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 6, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 7, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 7, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 7, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 7, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 8, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 8, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 8, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 8, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 9, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 9, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 9, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 9, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 10, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 10, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 10, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 10, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 11, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 11, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 11, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 11, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 12, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 12, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 12, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 12, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 13, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 13, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 13, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 13, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 13, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 14, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 14, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 14, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 14, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 15, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 15, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 15, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 15, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 16, "beat": 0, "clip": "gs4-2", "length": 2 },
		{ "measure": 16, "beat": 2, "clip": "fs4-1", "length": 1 },
		{ "measure": 16, "beat": 3, "clip": "gs4-1", "length": 1 },
		{ "measure": 16, "beat": 4, "clip": "e4-2", "length": 2 },
		{ "measure": 17, "beat": 0, "clip": "gs4-2", "length": 2 },
		{ "measure": 17, "beat": 2, "clip": "fs4-1", "length": 1 },
		{ "measure": 17, "beat": 3, "clip": "gs4-1", "length": 1 },
		{ "measure": 17, "beat": 4, "clip": "e4-2", "length": 2 },
		{ "measure": 18, "beat": 0, "clip": "gs4-2", "length": 2 },
		{ "measure": 18, "beat": 2, "clip": "fs4-1", "length": 1 },
		{ "measure": 18, "beat": 3, "clip": "gs4-1", "length": 1 },
		{ "measure": 18, "beat": 4, "clip": "e4-2", "length": 2 },
		{ "measure": 19, "beat": 0, "clip": "gs4-2", "length": 2 },
		{ "measure": 19, "beat": 2, "clip": "fs4-1", "length": 1 },
		{ "measure": 19, "beat": 3, "clip": "gs4-1", "length": 1 },
		{ "measure": 19, "beat": 4, "clip": "e4-2", "length": 2 },
		{ "measure": 20, "beat": 0, "clip": "cs5-2", "length": 2 },
		{ "measure": 20, "beat": 2, "clip": "cs5-1", "length": 1 },
		{ "measure": 20, "beat": 3, "clip": "cs5-1", "length": 1 },
		{ "measure": 20, "beat": 4, "clip": "b4-1", "length": 1 },
		{ "measure": 20, "beat": 5, "clip": "a4-1", "length": 1 },
		{ "measure": 21, "beat": 0, "clip": "gs4-2", "length": 2 },
		{ "measure": 21, "beat": 2, "clip": "gs4-1", "length": 1 },
		{ "measure": 21, "beat": 3, "clip": "gs4-1", "length": 1 },
		{ "measure": 21, "beat": 4, "clip": "fs4-1", "length": 1 },
		{ "measure": 21, "beat": 5, "clip": "e4-1", "length": 1 },
		{ "measure": 22, "beat": 0, "clip": "fs4-2", "length": 2 },
		{ "measure": 22, "beat": 2, "clip": "fs4-1", "length": 1 },
		{ "measure": 22, "beat": 3, "clip": "fs4-1", "length": 1 },
		{ "measure": 22, "beat": 4, "clip": "gs4-1", "length": 1 },
		{ "measure": 22, "beat": 5, "clip": "fs4-1", "length": 1 },
		{ "measure": 23, "beat": 0, "clip": "cs4-2", "length": 2 },
		{ "measure": 23, "beat": 2, "clip": "cs4-1", "length": 1 },
		{ "measure": 23, "beat": 3, "clip": "cs4-1", "length": 1 },
		{ "measure": 23, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 24, "beat": 0, "clip": "gs3-1", "length": 1 },
		{ "measure": 24, "beat": 1, "clip": "as3-1", "length": 1 },
		{ "measure": 24, "beat": 2, "clip": "c4-1", "length": 1 },
		{ "measure": 24, "beat": 3, "clip": "cs4-1", "length": 1 },
		{ "measure": 24, "beat": 4, "clip": "ds4-1", "length": 1 },
		{ "measure": 24, "beat": 5, "clip": "e4-1", "length": 1 },
		{ "measure": 25, "beat": 0, "clip": "fs4-1", "length": 1 },
		{ "measure": 25, "beat": 1, "clip": "gs4-1", "length": 1 },
		{ "measure": 25, "beat": 2, "clip": "fs4-2", "length": 2 },
		{ "measure": 25, "beat": 4, "clip": "e4-2", "length": 2 },
		{ "measure": 26, "beat": 0, "clip": "gs3-1", "length": 1 },
		{ "measure": 26, "beat": 1, "clip": "as3-1", "length": 1 },
		{ "measure": 26, "beat": 2, "clip": "c4-1", "length": 1 },
		{ "measure": 26, "beat": 3, "clip": "cs4-1", "length": 1 },
		{ "measure": 26, "beat": 4, "clip": "ds4-1", "length": 1 },
		{ "measure": 26, "beat": 5, "clip": "e4-1", "length": 1 },
		{ "measure": 27, "beat": 0, "clip": "fs4-1", "length": 1 },
		{ "measure": 27, "beat": 1, "clip": "gs4-1", "length": 1 },
		{ "measure": 27, "beat": 2, "clip": "fs4-2", "length": 2 },
		{ "measure": 27, "beat": 4, "clip": "e4-2", "length": 2 },
		{ "measure": 28, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 28, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 28, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 28, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 29, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 29, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 29, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 29, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 30, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 30, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 30, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 30, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 31, "beat": 0, "clip": "e4-2", "length": 2 },
		{ "measure": 31, "beat": 2, "clip": "ds4-1", "length": 1 },
		{ "measure": 31, "beat": 3, "clip": "e4-1", "length": 1 },
		{ "measure": 31, "beat": 4, "clip": "cs4-2", "length": 2 },
		{ "measure": 32, "beat": 0, "clip": "cs4-6", "length": 6 },
		{ "measure": 33, "beat": 0, "clip": "cs4-6", "length": 6 },
		{ "measure": 34, "beat": 0, "clip": "cs4-6", "length": 6 },
		{ "measure": 35, "beat": 0, "clip": "gs4-6", "length": 6 },
		{ "measure": 36, "beat": 0, "clip": "fs4-2", "length": 2 },
		{ "measure": 36, "beat": 2, "clip": "gs4-2", "length": 2 },
		{ "measure": 37, "beat": 0, "clip": "cs4-6", "length": 6 }
	];
	var i = 0;
	var base_clip_path = 'C:\\Users\\George\\Desktop\\notes\\clips\\';
	var tc_start = null;
	var tc_length = null;
	var ev = null;
	var start_times = [ ];
	
	for (i=0; i < events.length; i++) {
		ev = events[i];
		tc_start = Timecode.FromFrames((ev.measure * 6 + ev.beat) * 6);
		tc_length = Timecode.FromFrames(ev.length * 6);
		start_times.push((ev.measure * 6 + ev.beat) * 6);
		AddMedia(Vegas.Project, base_clip_path + ev.clip + '.wmv', 0, tc_start, tc_length);
		AddMedia(Vegas.Project, base_clip_path + ev.clip + '.wmv', 1, tc_start, tc_length);
	}
}

function AddMedia(project, mediaPath, trackIndex, start, length) {
	var media = Media.CreateInstance(project, mediaPath);
	var track = project.Tracks[trackIndex];
	var ev = null;
	var take = null;
	if (track.MediaType == MediaType.Video) {
		ev = track.AddVideoEvent(start, length);
		if (ev) {
			take = ev.AddTake(media.GetVideoStreamByIndex(0));
		}
	} else if (track.MediaType == MediaType.Audio) {
		ev = track.AddAudioEvent(start, length);
		if (ev) {
			take = ev.AddTake(media.GetAudioStreamByIndex(0));
		}
	}
	return ev;
}

try {
	SopranoEvents();
} catch (ex) {
	MessageBox.Show(ex);
}
