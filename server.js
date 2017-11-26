const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

console.log('Running on http://localhost:3000/articles');

app.listen(port);
