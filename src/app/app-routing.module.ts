import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFirstComponent } from './my-first/my-first.component';
import { MySecondComponent } from './my-second/my-second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyThirdComponent } from './my-third/my-third.component';
import { MyFourthComponent } from './my-fourth/my-fourth.component';


const routes: Routes = [
  {path: 'first', component: MyFirstComponent},
  {path: 'second', component: MySecondComponent},
  {path: 'third', component: MyThirdComponent},
  {path: 'fourth', component: MyFourthComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
