import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DogsComponent } from './dogs.component';
import { DogsBigComponent } from './dogsBig.component';
import { DogsSmallComponent } from './dogsSmall.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogsBigComponent,
    DogsSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
