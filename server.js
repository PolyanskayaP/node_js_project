
var http = require('http'); //node server.js
var fs = require('fs');

const PORT=8080; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});


/*
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;

app.use(
    fileUpload({
        limits: {
            fileSize: 10000000,
        },
        abortOnLimit: true,
    })
);

// Add this line to serve our index.html page
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(index.html);
});

app.post('/upload', (req, res) => {
    // Get the file that was set to our field named "image"
    const { image } = req.files;

    // If no image submitted, exit
    if (!image) return res.sendStatus(400);

    // If does not have image mime type prevent from uploading
    if (/^image/.test(image.mimetype)) return res.sendStatus(400);

    // Move the uploaded image to our upload folder
    image.mv(__dirname + '/upload/' + image.name);

    // All good
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
*/