import query from "../index.js"

async function drop_BC_Tables(){
  await query(`DROP TABLE campers_info`)
  await query(`DROP TABLE campers`)
}

drop_BC_Tables()