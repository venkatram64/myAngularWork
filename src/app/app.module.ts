import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MySecondComponent } from './my-second/my-second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MySimpleDirective } from './my-simple.directive';
import { MyIfDirective } from './my-if.directive';
import { MyThirdComponent } from './my-third/my-third.component';
import { MyFourthComponent } from './my-fourth/my-fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent,
    NotFoundComponent,
    MySimpleDirective,
    MyIfDirective,
    MyThirdComponent,
    MyFourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
