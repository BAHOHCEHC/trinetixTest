import { Component, OnInit } from "@angular/core";
import {
  DataServiceService,
  MenuItem,
  ServicesItem
} from "../../data-service.service";
import { Observable } from "rxjs";
import { DataService } from "../data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  data$: Observable<MenuItem[]>;
  services$: Observable<ServicesItem[]>;
  textData$: Observable<{ type: string; text: string }[]>;

  menu: MenuItem[];
  services: ServicesItem[];
  headerText: { type: string; text: string };
  ngOnInit() {
    this.data$ = this.dataServiceService.getmenuItems();
    this.textData$ = this.dataServiceService.getTexts();
    this.services$ = this.dataServiceService.getServices();

    this.services$.subscribe(res => {
      this.services = res;
    });
    this.data$.subscribe(res => {
      this.menu = res;
    });
    this.textData$.subscribe(res => {
      this.headerText = res.reduce(
        (sum, current) => {
          return current.type === "header" ? Object.assign(sum, current) : sum;
        },
        { type: "", text: "" }
      );
    });
  }

  showForm() {
     this.formState.changeState(false);
  }
}
