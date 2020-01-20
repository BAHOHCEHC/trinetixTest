import { Component, OnInit } from "@angular/core";
import { DataServiceService, TextItem } from "src/app/data-service.service";
import { Observable } from "rxjs";
import { DataService } from "../../data.service";

@Component({
  selector: "app-ux-ui-design",
  templateUrl: "./ux-ui-design.component.html",
  styleUrls: ["./ux-ui-design.component.scss"]
})
export class UxUiDesignComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  textData$: Observable<TextItem[]>;

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("ux_ui_design");

  }
  showForm() {
    this.formState.changeState(false);
  }
}
