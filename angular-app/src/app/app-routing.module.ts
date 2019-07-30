import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './dogs.component';
import { DogsBigComponent } from './dogsBig.component';
import { DogsSmallComponent } from './dogsSmall.component';
import { APP_BASE_HREF } from '@angular/common'


const routes: Routes = [
  { path: 'small', component: DogsSmallComponent },
  { path: 'big', component: DogsBigComponent },
  { path: '**', component: DogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/angular-app'},
  ]
})
export class AppRoutingModule { }
