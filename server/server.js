const express = require('express')
const mongoose = require('mongoose')
const app = express()
// const { ROLE, users } = require('./data')
// const { authUser, authRole } = require('./basicAuth')
// const projectRouter = require('./routes/projects')

app.use(express.json())
// app.use(setUser)
// app.use('/projects', projectRouter)

app.get('/', (req, res) => {
  res.send('Home Page test')
})

// app.get('/dashboard', authUser, (req, res) => {
//   res.send('Dashboard Page')
// })

// app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
//   res.send('Admin Page')
// })



app.listen(8000)