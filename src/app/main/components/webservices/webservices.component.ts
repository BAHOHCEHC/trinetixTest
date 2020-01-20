import { Component, OnInit } from "@angular/core";
import { DataServiceService, TextItem } from "src/app/data-service.service";
import { Observable } from "rxjs";
import { DataService } from "../../data.service";

@Component({
  selector: "app-webservices",
  templateUrl: "./webservices.component.html",
  styleUrls: ["./webservices.component.scss"]
})
export class WebservicesComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  textData$: Observable<TextItem[]>;

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("webservices");
  }
  showForm() {
    this.formState.changeState(false);
  }
}
