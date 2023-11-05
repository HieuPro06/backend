const express = require('express');
const app = express();
const port = 8888;

app.get('/',(req,res,next) => {
    res.send('Hello Front-end')
})

app.listen(port,() => {
    console.log(`Back-end is running at http://localhost:${port}`);
})