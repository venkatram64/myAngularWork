import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent implements OnInit {

  newUser: User = new User();
  displayUser: User = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
    if(form == "VALID"){
      console.log("submitted");
      this.displayUser.name = this.newUser.name;
      this.displayUser.email = this.newUser.email;
      this.displayUser.password = this.newUser.password;
      this.displayUser.phoneNumber = this.newUser.phoneNumber;
    }else{
      alert("Fix the errors before submitting a new form.");
      console.log("failed to submit");
    }

  }

}

class User {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}
