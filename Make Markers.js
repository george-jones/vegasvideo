import System.Windows.Forms;
import ScriptPortal.Vegas;

function MakeMarkers() {
	var m = null;
	var first = null;
	var last = null;
	var num = 0;
	var to_add = 0;
	var intervals = 0;
	var interval_time = 0;
	var diff = 0;
	var i = 0;
	var curr_time = 0;

	// we expect the first and last markers to exist, and none else.
	// the first would should be named by a number of markers to add
	// between the two.
	for (m in Vegas.Project.Markers) {
		if (first == null) {
			first = m;
		}
		last = m;
		num++;
	}
	
	if (num != 2) {
		throw "Expecting exactly 2 markers";
	}

	diff = last.Position.Nanos - first.Position.Nanos;
	to_add = parseInt(first.Label, 10);
	if (isNaN(to_add) || to_add <= 0) {
		throw "First marker must be labeled with number of markers to insert.";
	}

	intervals = to_add + 1;
	interval_time = Math.floor(diff / intervals);
	for (i=1; i <= to_add; i++) {
		curr_time = first.Position.Nanos + i * interval_time;
		m = new Marker(Timecode.FromNanos(curr_time));
		Vegas.Project.Markers.Add(m);
	}
}

try {
	MakeMarkers();
} catch (ex) {
	MessageBox.Show(ex);
}