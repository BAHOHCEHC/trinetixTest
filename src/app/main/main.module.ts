import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MainRoutingModule } from './main-routing.modules';


import { MainComponent } from './main.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { WebservicesComponent } from './components/webservices/webservices.component';
import { AugmentedRealityComponent } from './components/augmented-reality/augmented-reality.component';
import { UxUiDesignComponent } from './components/ux-ui-design/ux-ui-design.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { ServicesComponent } from './components/services/services.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { DevelopmentComponent } from './components/development/development.component';
import { ConnectionService } from './connection.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DataService } from './data.service';
import { ContactPageComponent } from './components/contact-page/contact-page.component';



@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    MainRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MobileComponent,
    WebservicesComponent,
    AugmentedRealityComponent,
    UxUiDesignComponent,
    CaseStudiesComponent,
    ServicesComponent,
    ExpertiseComponent,
    AboutComponent,
    HomeComponent,
    DevelopmentComponent,
    ContactFormComponent,
    ContactPageComponent
  ],
  providers: [ConnectionService, DataService]
})
export class MainModule {}
