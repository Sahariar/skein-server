const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000

// middleware
app.use(cors());
app.use(express.json());

// mongo db
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@skein-db.dswcio7.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {

}

run().catch(console.dir);

app.get('/' , (req ,res) =>{
    res.send('server is running');
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})

