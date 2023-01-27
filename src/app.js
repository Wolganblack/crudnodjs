const express = require('express');
const morgan = require('morgan');
const app = express();
// settings
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));


app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});