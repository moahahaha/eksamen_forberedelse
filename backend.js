const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 80;

app.use(express.static('public'));
app.use(express.json());

let list_data = [];


fs.readFile("test.txt", 'utf-8', (err, data) => {
    if (err) {
        throw new Error(err);
    }
    console.log(data);
    list_data = data.split('\n').map(task => task.trim()).filter(task => task.length > 0);
    console.log(list_data);
});

app.get('/load_list', (req, res) => {
    console.log('sent list');
    res.json({ list: list_data });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});