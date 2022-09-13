const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./api/User')


const app = express();
const port = process.env.PORT || 5432;

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json())
app.use(cors());

app.use('/api/users', User)

app.get('/', (req, res) => {
	res.send('Hello World!')
})

mongoose.connect('mongodb://localhost/users', { useNewUrlParser : true },
    (err, res) => {
        err && console.log("Error conectando a la base de datos");
        app.listen(port, () => console.log("Server corriendo en el puerto " + port));
    })
