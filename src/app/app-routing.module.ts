import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllItemsComponent } from './all-items/all-items.component';


const routes: Routes = [
  { path: 'home', component: AllItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
