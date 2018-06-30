var app = require('express')(),
    port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Working on '+ port);
});

app.get('/',function(req, res) {
    res.send("Hello");
});