import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string;
pwd:string;
  constructor() {
    this.uname="Lakhan";
    this.pwd="";
   }

  ngOnInit(): void {
  }

}
