const express = require('express');
const app = express();

const port = 5000;
app.get('/', (req, res) => res.send("helloWorld"));
app.listen(port, () => console.log("listening"));