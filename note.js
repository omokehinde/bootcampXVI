function NotesApplication(author, notes) {
	this.author = author;
	this.notes = notes;

	var notes = [];

	this.create = function(note) {
		notes.push(note);
	}

	this.listNotes = function() {
		console.log()
	}
}