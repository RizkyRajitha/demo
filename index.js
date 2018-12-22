const express = require("express");
const app = express();
const hbs = require("hbs");

//express middleware


// app.use((req,res,next) => {
  
//   res.send('<html> <head> <h1> site is in maintenance . sorry for your inconveniance </h1>  </head>  </html>  ')
  
//   const dt = new Date
//   console.log(req.method,req.url,dt)
+
// })


app.use(express.static(__dirname + "/public"));
//express view engine
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");



app.get("/", (req, res) => {
  res.send("<h1> hello express</h1>");
});

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

app.listen(3000, () => {
  console.log("server is up and running on port 3000 ...");
});
