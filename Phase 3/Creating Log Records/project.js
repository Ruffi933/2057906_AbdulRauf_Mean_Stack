const fs = require("fs")
const readline = require("readline")
//  let employees = [];
let employees =  JSON.parse(fs.readFileSync("employees.json").toString())
let date_entered = new Date();
const writeGreetingToFile = (name,id) => {
    fs.writeFile("employees.json",{name},err=>{
        if(err){
            console.log("Error")
        }
    })
}
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("What is your name : ",(name)=>{
     r1.question("What is your age: ",(id)=>{
            

    r1.close();
          
        const newObject ={
            name:name,
            id:id,
            date_entered:date_entered
        }
 


    
    employees.push({newObject});
        
    let employeesString = JSON.stringify(employees)
    fs.writeFileSync("employees.json",employeesString)
    })     
})