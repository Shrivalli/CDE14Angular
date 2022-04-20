import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
emp:Employee;
employees:Employee[]=[];
  constructor(private empservice:EmpService)
  {
    this.emp={Eid:0,Ename:"",Salary:0};
  }
    
  fetchEmployees():any{
this.employees=this.empservice.GetEmployees();
  }
  

  ngOnInit(): void {
    this.fetchEmployees();
  }

  // Save():void{
  //   this.employees.push(this.emp);
  //   console.log(this.employees.length);
  //   console.log(this.emp.Eid+" "+this.emp.Ename+" "+this.emp.Salary);
    
  // }
}
