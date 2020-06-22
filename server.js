var express = require('express');
var mysql = require('mysql');
var path = require('path');
var app = express();
var test1 = null;
var bodyParser = require('body-parser');
var cors = require('cors');
const { getMaxListeners } = require('process');
app.use(cors());
 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }));
 // parse application/json
 app.use(bodyParser.json());
 //"body-parser": "^1.19.0", -> in der package.json

app.use(express.static(path.join(__dirname, '/dist/best-movies')));

app.get('/', function(req,res)
{
    res.sendFile('index.html', {root: __dirname+'/dist/best-movies'});

});

app.post('/api/filmpost', function(req, res) {
  console.log("im server.js");
  console.log(req.body.name);
  const name = req.body.name;
  const sql = "INSERT INTO film (name, bewertung, dauer)" + "VALUES (?, ?, ?)";
  const values = [name, 0, 112];

  pool.query(sql, values,
    function (error, result, fields) {
      if(error) throw error;
      res.send(result);
    })
})

app.listen(8080, () => {
    console.log("App listen on port 8080");
});

const pool = mysql.createPool({
    host: "195.37.176.178",
    port: "20133",
    user: "Gruppe6",
    password: "Kp04QPbjkf.wAI0=BDi6G;Av&OShsK3F",
    database: "20_Gruppe6_DB"
  }); 

  app.get('/api/film', function(req, res)
  {
   
        pool.query("SELECT * FROM film", function(err, result, fields)
        {
          if(err) throw err;
          res.send(result);
        });
        
    
  });

  app.post('/app/register', function(req,res){
    console.log("im server.js");
    console.log(req.body);
    res.status(200).send({"message":"Data recieved"});
    const sql = "INSERT INTO kunde (Email, usename)" + "VALUES (?, ?, ?)";
    const values = [amal, ahmed]

  });

/*var con = mysql.createConnection({
  host: "195.37.176.178",
  port: "20133",
  user: "Gruppe6",
  password: "Kp04QPbjkf.wAI0=BDi6G;Av&OShsK3F",
  database: "20_Gruppe6_DB"
});

con.connect(function(err)
  {
    if(err) throw err;
      console.log("connected");
  });*/
/*
app.use(express.static(path.join(__dirname, '/dist/best-movies')));

app.get('/', function(req,res)
{
    res.sendFile('index.html', {root: __dirname+'/dist/best-movies'});

});

app.listen(8080, () => {
    console.log("App listen on port 8080");
});

app.get('/api/film', function(req, res)
{
  var con = mysql.createConnection({
    host: "195.37.176.178",
    port: "20133",
    user: "Gruppe6",
    password: "Kp04QPbjkf.wAI0=BDi6G;Av&OShsK3F",
    database: "20_Gruppe6_DB"
  });

  con.connect(function(err)
  {
    if(err) throw err;
      console.log("connected");

      con.query("SELECT * FROM film", function(err, result)
      {
        if(err) throw err;
        res.send(result);
      });
      

      con.end();
  });
});
*/


/*  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM user Where name = ", function(err, result, fields){
      if (err) throw err;
      console.log(result);
  });
  });*/



/*
 con.end(function(err) {
      if (err) throw err;
      console.log("Connection end!");

  });

*/
  