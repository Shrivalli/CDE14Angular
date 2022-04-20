import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emp:Employee;
firstnumber:number;
secondnumber:number;
result:number;
  constructor(private empservice:EmpService) { 
    this.emp={Eid:0,Ename:"",Salary:0};
    this.firstnumber=0;
    this.secondnumber=0;
    this.result=0;
  }

  ngOnInit(): void {
  }

  add1():void{
    console.log("welcome");
  }


  add(a:string,b:string):void{
//this.result=Number(this.firstnumber)+Number(this.secondnumber);
this.result=Number(a)+Number(b);
console.log(this.result);
  }

  Save():void{
    this.empservice.AddEmployee(this.emp);
  }

}
