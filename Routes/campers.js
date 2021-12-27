import express from "express";
import  getAllCampers  from "../models/getAllcampers.js";
// import { getAllUsersAndScores, updateUsersAndScores } from "../models/usersAndScores/getAllUsers.js";


let Router= express.Router()

Router.get("/",async (req,res)=>{
  let allUsers = await getAllCampers()
  
  res.json(allUsers)
})

// Router.put("/:id",async (req,res)=>{
//   // let {}=req.body
//   let {id}=req.params
//   let {user_name,user_score}=req.body
//   console.log(user_name,user_score,id)
//   await updateUsersAndScores(user_name,user_score,id)
  
//   // res.json({message:"successfull"})
// })

export default Router