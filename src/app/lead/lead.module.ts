import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LeadRoutingModule } from './lead-routing.module';
import { AppMaterialModule  } from './../app-material/app-material.module';

import { LeadComponent } from './lead/lead.component';
import { FormComponent } from './lead/form/form.component';
import { SelectClientTypeComponent } from './lead/form/controls/select-client-type.component';
import { InputQuotationNumberComponent } from './lead/form/controls/input-quotation-number.component';
import { InputQuotationDateComponent } from './lead/form/controls/input-quotation-date.component';
import { InputMemberNumberComponent } from './lead/form/controls/input-member-number.component';
import { InputMemberNameComponent } from './lead/form/controls/input-member-name.component';
import { InputLandlineComponent } from './lead/form/controls/input-landline.component';
import { InputEmailComponent } from './lead/form/controls/input-email.component';
import { InputContactNumberComponent } from './lead/form/controls/input-contact-number.component';
import { InputCommentsComponent } from './lead/form/controls/input-comments.component';
import { SelectLocationComponent } from './lead/form/controls/select-location.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LeadRoutingModule,
    AppMaterialModule
  ],
  declarations: [
    LeadComponent, 
    FormComponent, 
    SelectClientTypeComponent,
    InputQuotationNumberComponent,
    InputQuotationDateComponent,
    InputMemberNumberComponent,
    InputMemberNameComponent,
    InputLandlineComponent,
    InputEmailComponent,
    InputContactNumberComponent,
    InputCommentsComponent,
    SelectLocationComponent
  ]
})
export class LeadModule { }
