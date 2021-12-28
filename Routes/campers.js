import express from "express";
import  getAllCampers  from "../models/getAllcampers.js";
import getCamperById from "../models/getCamperById.js";



let Router= express.Router()

Router.get("/",async (req,res)=>{
  let allUsers = await getAllCampers()
  
  res.json(allUsers)
})

Router.get("/:id",async (req,res)=>{
  let {id}=req.params
  let camper = await getCamperById(id)
  res.json(camper)
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