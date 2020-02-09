import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-fourth',
  templateUrl: './my-fourth.component.html',
  styleUrls: ['./my-fourth.component.css']
})
export class MyFourthComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    identifications: this.formBuilder.array([
      this.formBuilder.group({
        idName: [''],
        idNumber: ['']
      }),
      this.formBuilder.group({
        idName: [''],
        idNumber: ['']
      })
    ])
  });

  constructor(private formBuilder: FormBuilder) {  
    this.loginForm.valueChanges.subscribe((value)=>{
      console.log(this.loginForm.status);
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submitting ", this.loginForm.value);
  }

}
