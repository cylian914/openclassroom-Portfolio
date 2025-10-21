const express = require('express');
const app = express();
const path = require('path');
const projRoute = require('./route/projRoute')
const demoRoute = require('./route/demoRoute')

app.use(express.json())

app.use('/raw/', express.static(path.join(__dirname, '../projet/')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  console.log(req.ip + ": " + req.method + "|" + req.originalUrl)
  next()
});

app.use('/api/', projRoute)
app.use('/demo', demoRoute);

app.use('/', express.static(path.join(__dirname, "../frontend/dist")))
app.use('/raw', express.static(path.join(__dirname, "../projet")))


app.use((req, res, next) => {
  res.redirect("/");
})

module.exports = app;