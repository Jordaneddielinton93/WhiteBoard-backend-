import query from "../index.js"

async function create_BC_Tables(){
  try {
    await query(
      `CREATE TABLE IF NOT EXISTS campers(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(50),
        bootcamp VARCHAR(500)
      );

      CREATE TABLE IF NOT EXISTS campers_info(
        bc_id VARCHAR(255),
        attendence VARCHAR(5),
        quiz_completed VARCHAR(5),
        quiz_mean_score VARCHAR(5),
        feed_back_forms INT,
        FOREIGN KEY (bc_id) REFERENCES campers(id)
      );
    `)  
    console.log("sucsessfully made databases")
  } catch (error) {
    console.log(error)
  }

}

create_BC_Tables()