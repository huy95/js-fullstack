const express = require('express')
import 'dotenv/config'
import connect from './config/database'
import getDatabase from './config/database';


const app = express()
const port = process.env.PORT || 3000;

try {
  // const [results, fields] = await connect.query()
} catch(_) {

}
getDatabase();
app.get("/", (req, res) => {
  res.send("hello word");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
