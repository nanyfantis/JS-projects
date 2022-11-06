const express = require("express");
const bodyParser = require("body-parser");
const https = require('https');
const { options } = require("request");

const app = express();

app.use(express.static("public")); //sends a static html page

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html") //sends signup html to home directory
})

app.post("/", function(req, res) {
  const firstName = req.body.FirstName; //assigns to firstName the data that the user inputs
  const lastName = req.body.LastName; //assigns to firstName the data that the user inputs
  const email = req.body.email; //assigns to firstName the data that the user inputs

 const data = JSON.stringify({
  "email_address": "salamaridis@gmail.com", //those values were taken from Mailchimp API
  "status": "subscribed",
  "merge_fields": {
    "FNAME": firstName, // firstName and lastName are taken from the input class  input100
    "LNAME": lastName
  }
 });

// const jsonData = JSON.stringify(data);

 const url = 'https://us21.api.mailchimp.com/3.0/lists/LIST_ID/members'; //url from the API KEY

 var options = {
  host: 'us21.api.mailchimp.com',
  path: '/3.0/lists/LIST_ID/members',
  method: 'POST',
  headers: {
      'Authorization': 'randomUser YOUR_API_KEY',
      'Content-Type': 'application/json',
      'Content-Length': data.length
  }
}

const request = https.request(url, options, function(response) {

//checks if the site is responsive and sends a message to the user
  if (response.statusCode === 200) {
    res.sendFile(__dirname + "/success.html"); //sends the success html
  }else {
    res.sendFile(__dirname + "/failure.html"); //sends the failure html
  }



  response.on("data", function(data){
    console.log(JSON.parse(data));
  })
})

request.write(data);
request.end();
 


});

//redirects the user to the Sign up Page
app.post("/failure", function(req, res) {
  res.redirect("/");
})






app.listen(3000, function() {
  console.log("Server is running on port 3000");
})