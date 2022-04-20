import { Injectable } from '@angular/core';
import { Employee } from 'src/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
emp:Employee;
emplist:Employee[]=[{Eid:1,Ename:"Ram",Salary:23789},
{Eid:2,Ename:"Raghav",Salary:89000},
{Eid:3,Ename:"Sandhya",Salary:56000},
{Eid:4,Ename:"Sheetal",Salary:34000}];
constructor() {
  this.emp={Eid:5,Ename:"Vandhana",Salary:67000};
 }

GetEmployees():any{
console.log("Data Fetched");
console.log(this.emplist.length);
return this.emplist;
}

AddEmployee(emp:Employee):void
{
  this.emplist.push(emp);
  console.log("Record Added");
}

}
