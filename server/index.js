const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

 
const PORT = process.env.PORT || 5000;
const app = express()


app.use(cors())
app.use(express.json())




// mongoDB connection 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection
connection.once('open',() => console.log("MongoDB connected!"))


// Routes
const dataCollectionRoute = require('./model/routes/dataCollection')

// Path to route
app.use('/users', dataCollectionRoute)

app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`)})