# Note Taker

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Dependencies](#dependencies)
- [License](#license)
- [Contact](#contact)

## Description

The Note Taker is a simple application built using Node.js and Express framework, designed to help users quickly and easily create and manage their notes. This README file provides an overview of the app, installation instructions, and usage guidelines.

## Features

- Create new notes with a title and content.
- Save notes to a db.json file, which persists until deleted.
- View a list of existing notes.
- Delete unwanted notes.

## Installation

To install and run the Note Taker, follow these steps:

1. Clone this repository to your local machine or download the source code as a ZIP file.

2. Ensure that you have Node.js installed on your system. You can download it from the official Node.js website: https://nodejs.org.

3. Open a terminal or command prompt and navigate to the project's root directory.

4. Run the following command to install the required dependencies: `npm install`

5. Once the dependencies are installed successfully, start the application using the following command: `npm start` or `node server.js`

6. The app will start running on your local machine at http://localhost:3001.

## Usage

1. Open a web browser and navigate to http://localhost:3001.
2. You will be presented with the Note Taker's homepage, where you can see a list of existing notes (if any) and text body area where you can create a new note.
3. To create a new note, enter a title and content for your note in the provided input fields.
4. Once you have entered the note details, click the save icon to save the note.
5. The newly created note will be added to the list on the left-hand side of the page.
6. To view the content of a note, click on its title from the list.
7. To delete a note, click on the trash bin icon next to the note in the list.

## API

The Note Taker app utilizes Express to set up an API for handling note-related operations. The API endpoints are as follows:

- GET /api/notes - Retrieves all existing notes in JSON format.
- POST /api/notes - Creates a new note by accepting a JSON object with title and content properties.
- DELETE /api/notes/:id - Deletes the note with the specified id.

Please note that the API endpoints are accessed via the corresponding HTTP methods using tools such as Insomnia or Postman.

## Dependencies

The Note Taker relies on the following npm modules:

- Node.js: A JavaScript runtime environment.
- Express: A web application framework for Node.js.
- File System: A built-in Node.js module for interacting with the file system.
- uniqid: A lightweight module for generating unique IDs.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact

If you have any questions, feel free to reach out through my email.

kyungkwon01@gmail.com
