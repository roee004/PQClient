import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule],
  exports: [ RouterModule],
})
export class RoutingModule { }
