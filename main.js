const express = require('express')
const app = express()
const port = 3000
const data = {
  "message" : "guido is a snail"
}

let counter = 0
let num = 10
function yesOrNo(){
  let payload = {"message": ""}
  counter += 1
  number = Math.floor(Math.random() * num)
  console.log(number)
  if (counter >= 10){
    counter = 0
    payload.message = "maybe"
    return payload
  }
  if ((number >= (num/2))){
    payload.message = "yes"
    return payload
  }
  else{
    payload.message = "no"
    return payload
  }
} 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
const payload = {"message":''} 
app.get('/lol', (req, res) => {
  console.log(payload)
  o1 = "Dan is great"
  o2 = "But Shawn is greater"
  payload.message = payload.message === o1 ? o2 : o1 
  res.json(payload)
})
app.get('/yesno', (req, res) => {
  res.send(yesOrNo())

})