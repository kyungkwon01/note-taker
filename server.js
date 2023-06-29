const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('Develop/public'));

app.get('/', (req, res) =>
	res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
