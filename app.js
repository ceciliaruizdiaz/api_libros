const express = require("express");
const app = express(); //debes llamar a express como una funcion 

//Importamos el Router de Libros
const routelibros = require('./routes/libros');

//Importamos el Middlerware Error Handler
const errorHandler = require ('./middlewares/errorHandler');

app.use(express.json());

app.use("/libros", routelibros);

app.use(errorHandler);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor Express.js funcionando en el puerto ${port}`);
});