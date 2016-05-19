// Class NotesApplication
// 	constructor(author, notes) {
// 		this.author = author;
// 		this.notes = [];

// 	this.create = function(note) {
// 		notes.push(note);
// 	}

// 	this.listNotes  function() {
// 		var index = notes.indexOf(note);
// 		if (index = "") {
// 			console.log('Error! Type in a number.');
// 		}
// 	}
// 	console.log(notes.indexOf(note));
// 	console.log(author);
// 	console.log(note);
// }


describe("Take Notes and author", function(){

	var app = new NotesApplication('chi');

	it("author should be a string", function() {
		expect(typeof app.author == typeof "").toBe(true);
	});

	it("notes should an object", function() {
		expect(app.notes).toBeDefined();
	});

	it("store note in array notes", function() {
		app.create("");
		expect(app.notes.length).not.toBe(0);
	})
});