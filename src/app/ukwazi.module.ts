import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { UkwaziRoutingModule } from './ukwazi-routing.module';
import { UkwaziComponent } from './ukwazi.component';

import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    UkwaziComponent
  ],
  imports: [
    BrowserModule,
    UkwaziRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [UkwaziComponent]
})
export class AppModule { }
