import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css']
})
export class MySecondComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    identification: new FormGroup({
      idName: new FormControl(),
      idNumber: new FormControl()
    })
  });

  constructor() {
    // this.loginForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // this.loginForm.setValue({
    //   username: 'Venkatram',
    //   password: 'venkat1234',
    //   identification:{
    //     idName: 'Venkatram',
    //     idNumber: '8787'
    //   }
    // })

    this.loginForm.patchValue({
      username: 'Venkatram',
      identification:{
        idName: 'Venkatram'
      }
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submitting ", this.loginForm.value);
  }

}
