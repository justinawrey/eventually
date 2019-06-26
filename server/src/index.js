import * as admin from 'firebase-admin'
import express from 'express'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)