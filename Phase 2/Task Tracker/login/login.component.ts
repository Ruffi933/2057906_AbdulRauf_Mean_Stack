import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Emp } from '../emp.model'
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string="";
  id:string="";
  taskName:string="";
  deadline:string="";
  emps:Array<Emp>=[];
  constructor(public loginSer:LoginService) { }

  ngOnInit(): void {
  }
passValue(idRef:any,nameRef:any,taskRef:any,dlRef:any){
    let emp1:Emp={id:idRef.value,name:nameRef.value,taskName:taskRef.value,deadline:dlRef.value}
    this.emps.push(emp1)
    // this.id = idRef.value;
    // this.name = nameRef.value;
    // this.taskName = taskRef.value;
    // this.deadline = dlRef.value;
}
checkUser(loginRef:NgForm){
  let login = loginRef.value;
  let flag = 0;
  this.loginSer.checkUser().subscribe(result=>{
    for(let ll of result){
      if(ll.user == login.user && ll.pass==login.pass){
        flag++;
      }
    }
    if(flag>0){
      console.log("successful login")
    }else{
      console.log("Failuer login")
    }

  }
    )
    flag = 0;
}
}
