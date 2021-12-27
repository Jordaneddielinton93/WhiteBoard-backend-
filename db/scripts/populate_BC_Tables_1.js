import query from "../index.js"
let campers=[
  {id:"a11111111111",full_name:"james greygoose",bootcamp:10},
  {id:"b22222222222",full_name:"terry greygoose",bootcamp:10},
  {id:"c33333333333",full_name:"abby greygoose",bootcamp:10},
  {id:"d44444444444",full_name:"michey greygoose",bootcamp:10},
  {id:"e55555555555",full_name:"brian greygoose",bootcamp:10},
  {id:"f66666666666",full_name:"uncle bob",bootcamp:10},
  {id:"g77777777777",full_name:"stacey mathew",bootcamp:10},
  {id:"h88888888888",full_name:"saraa bob",bootcamp:10},
  {id:"i99999999999",full_name:"george quzaski",bootcamp:10},
  {id:"j01010101010",full_name:"grian cable",bootcamp:10},
]

async function populate_BC_Tables(){
  campers.forEach(async({id,full_name,bootcamp})=>{

    await query(
      `INSERT INTO campers (
        id,
        name,
        bootcamp
      ) VALUES($1,$2,$3)`,
      [id,full_name,bootcamp]
    )

  })
  
  
  console.log("campers profile has been populated")
}

populate_BC_Tables()
