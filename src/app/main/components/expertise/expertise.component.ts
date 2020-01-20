import { Component, OnInit } from "@angular/core";
import { DataServiceService, TextItem } from "src/app/data-service.service";
import { Observable } from "rxjs";
import { DataService } from "../../data.service";

@Component({
  selector: "app-expertise",
  templateUrl: "./expertise.component.html",
  styleUrls: ["./expertise.component.scss"]
})
export class ExpertiseComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  textData$: Observable<TextItem[]>;
  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("expertise");
  }
  showForm() {
    this.formState.changeState(false);
  }
}
