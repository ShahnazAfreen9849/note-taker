const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//http://localhost:3001/api
app.use('/api', api);
app.use(express.static('public'));
app.get('/notes', (req, res) =>
    res.sendFile(path.join(_dirname, '/public/notes.html')));
app.get('*', (req, res) =>
    res.sendFile(path.join(_dirname, '/public/index.html')));
app.listen(PORT, () =>
    console.log(`App listeningsthttp://localhost:${PORT}`)
);