function NotesApplication(author) {
	this.author = author;
	this.notes = [];

	this.create = function(note) {
		this.notes.push(note);
		return this.notes;
		}

	this.listNotes = function() {
		var index = notes.indexOf(note) + 1;
		if (index = "") {
			console.log('Error! Type in a number.')
		}
		console.log(notes.indexOf(note));
		console.log(author);
		console.log(note);
	}
}