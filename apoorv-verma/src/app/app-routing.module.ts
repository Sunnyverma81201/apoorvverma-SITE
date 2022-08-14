import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"", component: AppComponent,title: "Apoorv Verma"},
  {path:"skills", component: AppComponent,title: "Apoorv Verma - Skills"},
  {path:"projects", component: AppComponent,title: "Apoorv Verma - Projects"},
  {path:"resume", component: AppComponent,title: "Apoorv Verma - Resume"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
