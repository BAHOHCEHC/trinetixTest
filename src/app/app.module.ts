import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AngularFontAwesomeModule } from "angular-font-awesome";
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MDBBootstrapModule.forRoot(), AngularFontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
