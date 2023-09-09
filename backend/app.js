const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const productRoutes = require('./routes/productRoutes.js')
const mongoose = require('mongoose');
const passport = require('passport');
const passportConfig = require('./config/passport');
const authRoutes = require("./routes/authRoutes.js")
const cors = require('cors');
const cartRoutes = require('./routes/cartRoute.js')
app.use(express.json());
require('dotenv').config();


const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(passport.initialize());
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use('/api', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);


app.get('/', (req, res) => {
  res.send('Weclome To Market Site!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})