const express = require('express');
const { MongoClient } = require("mongodb");
const app = express();

// Replace the uri string with your MongoDB deployment's connection string.
const uri ="mongodb+srv://karthickraja:Ben123456789@cluster0.h7hwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

app.get('/api/customer/list',(req,res)=>{
  async function run() {
    try {
      await client.connect();
      const database = client.db('sample_mflix');
      const movies = database.collection('movies');
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: 'Blacksmith Scene' };
      const movie = await movies.findOne(query);
      res.send(movie);
      // console.log(movie)
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
});




app.listen(3005,()=> console.log("Server Running"))




// const express = require('express');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const { MongoClient } = require("mongodb");
// const mongoose = require('mongoose');
// const app = express();
// dotenv.config();



// mongoose.connect("mongodb+srv://karthickraja:Ben123456789@cluster0.h7hwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true },
//     ()=>console.log("Connected to DB"));

// // app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))


// const uri = "mongodb+srv://karthickraja:Ben123456789@cluster0.h7hwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const client = new MongoClient(uri);


// const database = client.db('sample_mflix');
//     const movies = database.collection('comments');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = {name:"Mercedes Tyler"};
//     const movie =  movies.findOne(query);
//     console.log(movie);

// app.listen(3005,()=> console.log("Server Running"))





