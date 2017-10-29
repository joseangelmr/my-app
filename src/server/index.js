const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '..', '..', 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './../../build/index.html'));
});

app.listen(app.get('port'), (() => {
    console.log('Server running at http://localhost:%d in %s mode', app.get('port'), app.get('env'))
}));