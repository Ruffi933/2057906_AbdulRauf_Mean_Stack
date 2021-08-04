var data_array =JSON.parse(localStorage.getItem('Data')||'[]')
var btn_add = document.getElementById("btn-add")
var btn_clear = document.getElementById("btn-clear")
var program_form = document.getElementById("program-form")
var message = document.getElementById("message")
var table_data = document.getElementById("tableData")
var total_field =document.getElementById("total")
function populateTable(){
    if(tableData!== null)
    {
        if(data_array != null)
        {
        var structure =""
        var total =0;
        for(var i = 0; i< data_array.length; i++){
            var obj1 = data_array[i];
            structure += "<tr>"
            for(var key in obj1){
                var value = obj1[key];
                if(key=="budget"){
                    structure+="<td>" +value+"</td>"
                    total+=eval(value);
                }
                else structure += "</td>" +value+ " <td/>"
            }
            structure+="</tr>"
        }
        table_data.innerHTML=structure
            total_field.innerHTML = total
        }
    }
}

function addData(){
    var cname = document.getElementById("cname").value
    var pname = document.getElementById("pname").value
    var budget = document.getElementById("budget").value
    if(cname!= "" && pname!="" && budget!=""){
        var dataObject ={
            cname:cname,
            pname:pname,
            budget:budget
        }
        data_array.push(dataObject)
        localStorage.setItem('Data',JSON.stringify(data_array))
        message.classList.add("success")
        message.innerHTML="Data added to local storage"
        program_form.reset();
    }
}
function clearForm(){
    message.className ="";
    message.innerHTML="";
    program_form.reset();
}