// const express = require('express')
// require('dotenv').config()

// const app = express()
// const port = process.env.PORT

// const userData={
//   'name' : 'ebad',
//   'Gender': "Male",
//   "Age" : "21 years old",
//   "Semester": '5th'
// }

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/login', (req,res)=>{
//     res.send("ebad")
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// app.get('/github', (req,res)=> {
//   res.json(userData)
// })

import express from 'express'
// require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
  res.send('Server is ready')
})

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`)
})