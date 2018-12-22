const express = require("express");
const app = express();
const hbs = require("hbs");
const bootstrap = require('bootstrap')

//express middleware


// app.use((req,res,next) => {
  
//   res.send('<html> <head> <h1> site is in maintenance . sorry for your inconveniance </h1>  </head>  </html>  ')
  
//   const dt = new Date
//   console.log(req.method,req.url,dt)

// })

const port  = process.env.PORT || 3000 ;


app.use(express.static(__dirname + "/public"));
//express view engine
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");



app.get("/home", (req, res) => {
  res.render("home.hbs", {
    passgr1: "enjected via express backend",
    year: new Date().getFullYear()
  });
});

app.get("/about", (req, res) => {
  res.send("<h2>welcome to about page</h2>");
});

app.get("/games", (req, res) => {
  res.render('games')
});

app.listen(port, () => {
  console.log("server is up and running on port 3000 ...");
});
