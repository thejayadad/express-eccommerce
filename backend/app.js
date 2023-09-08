const express = require('express')
const app = express()
const port = 3000
const productRoutes = require('./routes/productRoutes.js')

app.use(express.json());


app.use('/api', productRoutes);


app.get('/', (req, res) => {
  res.send('Weclome To Market Site!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})