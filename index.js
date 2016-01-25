var express = require("express");
var app     = express();

app.use(express.static("public"));
app.listen(3000, () => console.log("justplotting ... juststarting ( http://localhost:3000 )"))