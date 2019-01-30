import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UseridentityComponent } from './user/useridentity.component';

const routes: Routes = [
  {  path:'user',component:UseridentityComponent},
  { path:'register',component:UseridentityComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
