import query from "../index.js"


let campers_info=[
  {id:"a11111111111",attendance:"80%",dailyQuiz:"40%",meanQuiz:"40%",feedback:7},
  {id:"b22222222222",attendance:"60%",dailyQuiz:"70%",meanQuiz:"30%",feedback:3},
  {id:"c33333333333",attendance:"50%",dailyQuiz:"80%",meanQuiz:"60%",feedback:11},
  {id:"d44444444444",attendance:"70%",dailyQuiz:"20%",meanQuiz:"80%",feedback:21},
  {id:"e55555555555",attendance:"30%",dailyQuiz:"60%",meanQuiz:"20%",feedback:2},
  {id:"f66666666666",attendance:"90%",dailyQuiz:"80%",meanQuiz:"30%",feedback:6},
  {id:"g77777777777",attendance:"10%",dailyQuiz:"30%",meanQuiz:"40%",feedback:23},
  {id:"h88888888888",attendance:"50%",dailyQuiz:"50%",meanQuiz:"30%",feedback:14},
  {id:"i99999999999",attendance:"30%",dailyQuiz:"60%",meanQuiz:"80%",feedback:13},
  {id:"j01010101010",attendance:"80%",dailyQuiz:"80%",meanQuiz:"90%",feedback:19},
]


async function populate_BC_Tables2(){

  campers_info.forEach(async({id,attendance,dailyQuiz,meanQuiz,feedback})=>{

    await query(
      `INSERT INTO campers_info (
        bc_id,
        attendence,
        quiz_completed,
        quiz_mean_score,
        feed_back_forms
      ) VALUES($1,$2,$3,$4,$5)`,
      [id,attendance,dailyQuiz,meanQuiz,feedback]
    )
    
  })
  
  
  console.log("camper_info profile has been populated")
}
populate_BC_Tables2()