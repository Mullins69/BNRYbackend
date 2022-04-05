const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())
 
// const axios = require('axios');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('17ee7bcc2a2e42d8ac0b5518196eabb3');

app.set("port", process.env.port || 3000);



//get top headlines
app.get('/', function(req, res, next){
    newsapi.v2.topHeadlines({
        q: req.body,
        category: "technology",
        language: "en",
        country: req.body
      }).then(response => {
         res.send(response)
          
      });
})


app.listen(app.get("port"), (server) => {
  console.info(`Server listen on port ${app.get("port")}`);
});


