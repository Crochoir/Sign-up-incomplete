const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");


app.listen("3000", function() {
  console.log("server is running on port 3000");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req, res) {
 var firstName = req.body.fName;
 var lastName = req.body.lName;
 var email = req.body.email;
 console.log(firstName, lastName, email);
});
