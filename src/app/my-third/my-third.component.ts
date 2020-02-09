import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-third',
  templateUrl: './my-third.component.html',
  styleUrls: ['./my-third.component.css']
})
export class MyThirdComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
    identification: this.formBuilder.group({
      idName: [''],
      idNumber: ['']
    })
  });

  constructor(private formBuilder: FormBuilder) {
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
