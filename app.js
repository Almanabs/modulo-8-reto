import express from 'express';
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
app.use('/api', require('./mi-api-rest/src'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor ejecutándose en el puerto ${port}`));
