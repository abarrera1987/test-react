const express = require('express');

const app = express();

const port = process.env.port || 3000;


app.get("/", (req, res) => {

	res.send("hola");

})

console.log(`Escuchando el puerto: ${port}`);

app.listen(port);