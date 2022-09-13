const express = require('express');
const cors = require('cors');
const { port } = require('./config/config');
const { mongoConnect } = require('./config/mongoConfig');

const app = express();
app.use(cors());
app.use(express.json());


mongoConnect();
app.listen(port, () => {
    console.log(`Listo por el puerto ${ port}`);
});

//rutas
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

app.use('/api/v1', require('./v1/routes'));