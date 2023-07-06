const express = require('express');
const ytdl = require('ytdl-core');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', function (req, res) {
    const { url } = req.query;
    console.log("Link: " + url);

    const date = Date.now();
    res.header(
        "Content-Disposition",
        `attachmentt; filename="highflow-video_${date}.mp4"`
    );

    return ytdl(url).pipe(res);
});

app.listen(3000);