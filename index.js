const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const connectDbase = require('./server/config/db');

connectDbase();

const app = express();

app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');
app.use(expressLayouts);
app.use(cors());
app.use('/', require('./server/routes/index'));
app.listen(3000, () => {
  console.log('server started');
})