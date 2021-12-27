import query from "../db/index.js"

export default async function getAllCampers(){
  try {
    let data= await query(`SELECT * FROM campers`)
  return data.rows

  } catch (error) {
    return console.log(error)
  }
  
}
