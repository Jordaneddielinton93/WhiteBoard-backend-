import app from "../app.js"

let PORT = process.env.PORT||5000

app.listen(PORT,()=>{
  console.log("listening on port "+PORT)
})