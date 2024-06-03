const express = require('express')
const path = require('path')

const app = express();
const PORT = 80

app.use(express.static('public'))
app.use(express.json())

var fs = require("fs");


fs.readFile("test.txt", 'utf-8', (err, data) => {
    if (err) {
        throw new Error(err)
    }
    console.log(data)

    var list_data = data.split('\n').map(task => task.trim()).filter(task => task.length > 0)
    console.log (list_data)
})

app.get('/load_list', (req, res) => {
    console.log('sendt list')
    res.json({list: list_data})
})





app.listen(PORT, () => {
console.log('server is running on port ${PORT}')
})
