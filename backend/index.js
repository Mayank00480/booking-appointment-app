const express = require('express');
const app = express();
const BookingRouter = require('./routes/booking')
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}))
app.use(BookingRouter);


app.listen(4000);