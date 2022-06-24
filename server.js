const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/hosteleria-mp'));
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/hosteleria-mp/index.html'));
});
app.listen(process.env.PORT || 8080);