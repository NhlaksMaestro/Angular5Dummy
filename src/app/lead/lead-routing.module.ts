import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadComponent } from './lead/lead.component';
// import { FormComponent } from './lead/form/form.component';

const routes: Routes = [
  { path: '', component: LeadComponent }//,
  // { path: 'view', component: FormComponent },
  // { path: 'edit', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
