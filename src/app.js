const express = require('express');
const app = express();
// settings
app.set('port', process.env.PORT || 4000);


app.listen(app.get('port'), () => {
    console.log('Server on port 4000');
});