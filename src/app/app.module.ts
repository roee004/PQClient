import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import "reflect-metadata";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    MaterialModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ RoutingModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
