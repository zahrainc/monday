const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/monday/subscribe', (req, res) => {
    res.status(200).send('Subscribed to Monday!')
})

app.post('/monday/subscribe', (req, res) => {
    console.log(req.body);
    res.status(200).send('Subscribed to Monday!')
})

app.post('/monday/unsubscribe', (req, res) => {
    console.log(req.body);
    res.status(200).send('Subscribed to Monday!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})