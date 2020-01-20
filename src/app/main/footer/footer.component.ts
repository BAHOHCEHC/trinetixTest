import { Component, OnInit } from "@angular/core";
import {
  DataServiceService,
  FooterData,
  MenuItem
} from "../../data-service.service";
import { Observable } from "rxjs";
import { DataService } from '../data.service';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  data$: Observable<FooterData>;
  contacts: [
    {
      location: string;
      adress: string;
      phone?: string;
    }
  ];
  social: [
    {
      name: string;
      img: string;
      link: string;
    }
  ];
  menu: MenuItem[];
  copiright: string;
  headquartes: {
    location: string;
    adress: string;
  };
  ngOnInit() {
    this.data$ = this.dataServiceService.getFooter();
    this.data$.subscribe(res => {
      this.contacts = res.contacts;
      this.social = res.social;
      this.menu = res.menu;
      this.copiright = res.copiright;
      this.headquartes = res.headquartes;
    });
  }

  showForm() {
    this.formState.changeState(false);
  }
}
