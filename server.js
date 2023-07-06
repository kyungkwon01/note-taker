// Module imports
const express = require('express');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

// Port
const PORT = process.env.PORT || 3001;

// Express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Get route sends back index.html
app.get('/', (req, res) =>
	res.sendFile(path.join(__dirname, 'public/index.html'))
);

// Get route sends back note.html
app.get('/notes', (req, res) =>
	res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// Get route sends back parsed JSON data
app.get('/api/notes', function (req, res) {
	fs.readFile('db/db.json', 'utf8', (err, data) => {
		var jsonData = JSON.parse(data);
		console.log(jsonData);
		res.json(jsonData);
	});
});

// Writes data to db.json
const writeNewNoteToJson = (destination, content) =>
	fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
		err ? console.error(err) : console.info(`\nData written to ${destination}`)
	);

// Reads added notes from the request body and adds to the db.json
const readThenAppendToJson = (content, file) => {
	fs.readFile(file, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
		} else {
			const parsedData = JSON.parse(data);
			parsedData.push(content);
			writeNewNoteToJson(file, parsedData);
		}
	});
};

// Post route receives note, saves it to request body, and add to db.json
app.post('/api/notes', (req, res) => {
	const { title, text } = req.body;
	if (title && text) {
		const newNote = {
			title: title,
			text: text,
			id: uniqid(),
		};

		readThenAppendToJson(newNote, 'db/db.json');

		const response = {
			status: 'success',
			body: newNote,
		};

		// Returns new note
		res.json(response);
	} else {
		res.json('Error in posting new note');
	}
});

// Delete route reads the db.json, uses uniqids to match the object to be deleted and removes from the db.json
app.delete('/api/notes/:id', (req, res) => {
	let id = req.params.id;
	let parsedData;
	fs.readFile('db/db.json', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
		} else {
			parsedData = JSON.parse(data);
			const filterData = parsedData.filter((note) => note.id !== id);
			writeNewNoteToJson('db/db.json', filterData);
		}
	});
	res.send(`Deleted ${req.params.id}`);
});

// Listen to start up the server
app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`);
});
