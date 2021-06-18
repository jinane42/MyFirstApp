// bg images
// window.onload=function(){  
//   let bg = document.querySelector('#bg');
//   let images = ['images/bg-1.jpg',
//             'images/bg-2.jpg', 
//             'images/bg-3.jpg', 
//             'images/bg-4.jpg'];
  
//   var spot =Math.floor(Math.random()* images.length);  
//   bg.style.background="url("+images[spot]+")";  
// }  

// lib and imports
const express = require("express");
const app = express();

const myFirstCOntroller = require("./controllers/controller")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/',(req, res) => {
  res.render('home.ejs');
});


// Create here your api setup




app.listen(3200, () => console.log("Server Up and running"));
