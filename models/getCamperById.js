import query from "../db/index.js"

export default async function getCamperById(id){
  try {
    let data= await query(`SELECT name,attendence,quiz_completed,quiz_mean_score,feed_back_forms
     FROM campers JOIN campers_info
     ON campers.id = campers_info.bc_id
     WHERE id = $1`,[id])
  return data.rows

  } catch (error) {
    return console.log(error)
  }
  
}
