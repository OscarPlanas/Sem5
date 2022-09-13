const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var User = require('./model/User')


const app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json())
app.use(cors());

app.use('api/users', User)

app.connect('mongoose://localhost/users', { useNewurlParser : true },
    (err, res) => {
        err && console.log("Error conectando a la base de datos");
        app.listen(3306, () => console.log("Server corriendo en el puerto 3306"))
    })
