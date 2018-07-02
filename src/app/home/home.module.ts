import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { AppMaterialModule  } from './../app-material/app-material.module';
import { HomeComponent } from './home.component';
import { JokeComponent, JokeFormComponent, JokeListComponent } from './joke/joke.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    JokeComponent,
    JokeFormComponent,
    JokeListComponent
  ]
})
export class HomeModule { }
