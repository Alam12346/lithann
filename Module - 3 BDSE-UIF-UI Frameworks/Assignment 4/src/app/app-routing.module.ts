import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ListcarsComponent } from './listcars/listcars.component';

const routes: Routes = [ 
  {path: 'car-detail/:id',component:CarDetailComponent},
  {path:'carLists',component:ListcarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
