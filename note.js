function NotesApplication(author, notes) {
	this.author = author;
	this.notes = [];

	this.create = function(note) {
		notes.push(note);
	}

	this.listNotes = function() {
		var index = notes.indexOf(note);
		if (index = "") {
			console.log('Error! Type in a number.')
		}
		console.log(notes.indexOf(note));
		console.log(author);
		console.log(note);
	}
}