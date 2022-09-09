const express = require('express');
const cors = require('cors');
const { port } = require('./config/Config');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Listo por el puerto ${ port}`);
});

//enpoint de prueba
let respuesta = {
    error: true,
    codigo: 200,
    mensaje: ''
}

app.get('/', (req, res) => {
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'hola mundo'
    }
    res.send(respuesta).status(respuesta.codigo);
});