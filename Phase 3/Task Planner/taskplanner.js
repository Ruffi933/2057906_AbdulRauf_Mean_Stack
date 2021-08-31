let url = require("url");
let fs = require("fs");
let http = require("http");


let tasks = require("./taskplanner.json");

let taskDisplay = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Home</title>
      
                </head>
                <h2 style="text-align: center;background-color:black;color:red; height: 50px;
                align-items: center;
                padding-top: 20px; ">Task Tracke (HTTP MODULE)</h2>
                <body>
                <h1>Add a Task</h1>
                    <form action="add_task">
                    
                        <label for="empID">Emp Id:</label>
                        <input type="number" name="empID"> <br>
                    
                        <label for="task_id">Task Id:</label>
                        <input type="text" name="task_id"> <br>
                    
                        <label for="task">Task: </label>
                        <input type="text" name="task"> <br>
                           
                        <label for="deadline">Deadline: </label>
                        <input type="date" name="deadline"><br>
                       <input type="submit" value="Add a task">
                       <input type="reset" value="Reset">
                    </form>
                    

                    <h1 style="text-align: center;background-color:black;color:red; height: 50px;
                    align-items: center;
                    padding-top: 20px; ">Enter the task id you wish to delete</h1>
                    <form action="delete_task">
                        <label for="task_id">Task Id:</label>
                        <input type="text" name="task_id"> <br><br>
                        <input type="submit" value="Delete">
                    </form>
                    
                    <h1 style="text-align: center">Task Entries</h1>
                    <form action="displayTable">
                       
                    </form>
                </body>
                </html>`;
//function to support add button
function add_task(reference) {
    let enter_task = { 
        empID: reference.empID, 
        task_id: reference.task_id, 
        task: reference.task, 
        deadline: reference.deadline 
    };

    tasks.push(enter_task);

    //Writing to the JSON file (New Task Entry)
    fs.writeFileSync('taskplanner.json', JSON.stringify(tasks), (err) => {
        if (!err) {
            console.log("Task added successfully");
            return true;
        }
    })
}
//Function when the the Delete button is clicked
function delete_task(reference) {
    let t_id = reference.task_id;
    let index = tasks.findIndex(item => item.task_id == t_id);
    if (index != -1) {
        tasks.splice(index, 1);``
        //Updating the JSON file after deletion.
        fs.writeFileSync('taskplanner.json', JSON.stringify(tasks), (err) => {
            if (!err) {
                console.log(`Deleted`);
            }
        });
        return true;
    } else {
        return false;
    }
}
function tableDisplay() {
    let table1 = "";
    let tablestart = `<table align='center' width='50%'  border = '1' >
                            <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Task No</th>
                                <th>Task Name</th>
                                <th>Due Date</th>
                            </tr>
                            </thead>`;
   
    for (let i = 0; i < tasks.length; i++) {
        let item = tasks[i];
        table1 += "<tbody><tr><td>" + item.empID
            + "</td><td>" + item.task_id
            + "</td><td>" + item.task
            + "</td><td>" + item.deadline
            + "</td></tr></tbody>";
            "</table>"
    }
    table1 = tablestart + table1 ;
    return table1;

   
}

let server = http.createServer((require, response) => {
    let urlInfo = url.parse(require.url, true);
    if (urlInfo.path != "/favicon.ico") {
        response.writeHead(200, { "content-type": "text/html" });
       
        if (urlInfo.pathname == "/add_task") {
            let enter_task = urlInfo.query;
            let result = tasks.find(item => item.task_id == enter_task.task_id);

            if (result == undefined) {
                add_task(enter_task);
                response.write(" Task saved");
            } else {
                response.write("Invalid ID");
            }
            let tableHTML = tableDisplay();
            response.write(taskDisplay);
            response.write(tableHTML);
        }
        
        else if (urlInfo.pathname == "/delete_task") {
            let targetTask = urlInfo.query;
            let result = delete_task(targetTask);
            if (result) {
                response.write("Deleted Succesfully");
            } else {
                response.write("Invalid ID!! Please try again");
            }
            let tableHTML = tableDisplay();
            response.write(taskDisplay);
            response.write(tableHTML);
        }
   
        else if (urlInfo.pathname == "/displayTable") {
            let tableHTML = tableDisplay();
            response.write(taskDisplay);
            response.write(tableHTML);
        }
    }
    response.end();
});

server.listen(9090, () => console.log("Server is running on port number 9090"));
