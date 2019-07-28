import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './dogs.component';
import { APP_BASE_HREF } from '@angular/common'


const routes: Routes = [
  { path: '**', component: DogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ]
})
export class AppRoutingModule { }
