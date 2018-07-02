import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule  } from '../../app-material/app-material.module';

import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    LeftSideBarComponent,
    RightSideBarComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    LeftSideBarComponent,
    RightSideBarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
