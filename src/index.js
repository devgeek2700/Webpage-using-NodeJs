const express = require('express');
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;
const app = express();

// hbs engine templates
const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const PartialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(PartialsPath);

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/about', (req, res) => {
  res.render('about.hbs');
});
app.get('/weather', (req, res) => {
  res.render('weather.hbs');
});

app.get('*', (req, res) => {
  res.render('404.hbs', {
    ErrorMsg: "Please click below button to go on Home page."
  });
});








app.listen(port, ()=>{
    console.log("Server is running on port 8000");
});