var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(dirname, "./app/public/app.js")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
