const express = require('express');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
// settings
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.use(myConnection(mysql, {
    host: 'Localhost',
    user: 'root',
    password: 'LINUX1983',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));


app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});

app.get("/index", (req, res) => {

    res.json({
        "status": 200,
        "message": "success"
    })
})