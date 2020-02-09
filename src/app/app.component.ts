import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'myAngularApp';
  name: string;
  email: string;
  password: string;

  isCasual: boolean = false;
  view: boolean = false;

  onSubmit(myForm){
    if(myForm == 'VALID'){
      console.log('Submitted. ');
      console.log(this.name, this.email, this.password);
    }else{
      console.log(myForm);
    }
  }

  toggle(){
    this.isCasual = !this.isCasual;
  }

  toggleMe(){
    this.view = !this.view;
  }
}
