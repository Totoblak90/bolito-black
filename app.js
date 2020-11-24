const express = require("express");
const app = express();

app.listen (3000, () => {
    console.log("el servidor funciona en http://localhost:3000");
})

app.get ("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
})
app.get ("/mis-obras", function (req, res) {
    res.sendFile(__dirname + "/views/mis-obras.html");
})
app.get ("/mis-esculturas", function (req, res) {
    res.sendFile(__dirname + "/views/mis-esculturas.html");
})
app.get ("/mis-escrituras", function (req, res) {
    res.sendFile(__dirname + "/views/mis-escrituras.html");
})
app.get ("/tu-carrito", function (req, res) {
    res.sendFile(__dirname + "/views/carrito.html");
})

app.get ("*", function (req, res) {
    res.sendFile (__dirname + req.url);
})