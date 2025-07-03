const express = require('express')
import 'dotenv/config'
// import connect from './config/database'
// import getDatabase from './config/database';
// import webRoutes from './routes/web';


const app = express()
const port = process.env.PORT || 3000;

try {
  // const [results, fields] = await connect.query()
} catch(_) {

}

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// getDatabase();
// webRoutes(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
