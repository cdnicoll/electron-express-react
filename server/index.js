const express = require('express')
const axios = require('axios')

const app = express()
const port = 5000

app.use(express.json());

// http://localhost:3001/api/swapi/character
app.get('/api/swapi/character', async (req, res) => {
  const response = await axios.get('https://swapi.dev/api/people/1');

  res.send(response.data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})