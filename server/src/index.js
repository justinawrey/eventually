import * as admin from 'firebase-admin'
import express from 'express'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const app = express()

app.get('/', function (req, res) {
  res.json('hello world')
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});