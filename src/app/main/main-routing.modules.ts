import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
import { ContactPageComponent } from './components/contact-page/contact-page.component';


const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "mobile", component: MobileComponent },
      { path: "home", component: HomeComponent },
      { path: "webservices", component: WebservicesComponent },
      { path: "augmented_reality", component: AugmentedRealityComponent },
      { path: "ux_ui_design", component: UxUiDesignComponent },
      { path: "case-studies", component: CaseStudiesComponent },
      { path: "services", component: ServicesComponent },
      { path: "expertise", component: ExpertiseComponent },
      { path: "about", component: AboutComponent },
      { path: "development", component: DevelopmentComponent },
      { path: "contactpage", component: ContactPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
