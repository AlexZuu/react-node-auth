const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors())
app.use(express.json())

const users = []

app.post('/registration', async (req, res) => {
  try {
    const user = { login: req.body.login, password: req.body.password }
    users.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
});

app.post('/login', async (req, res) => {
  const user = users.find(user => user.login === req.body.login
    && user.password === req.body.password)
  if (user == null) {
    return res.status(400).send('Cannot find user')
  } else {
    res.send({ login: user.login })
  }
});

app.listen(8000);