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
  // contactpage: { type: string; text: string; title?: string };

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("ux_ui_design");
    // this.textData$ = this.dataServiceService.getTexts();
    // this.textData$.subscribe(res => {
    //   this.ux_ui_design = res.reduce(
    //     (sum, current) => {
    //       return current.type === "ux_ui_design"
    //         ? Object.assign(sum, current)
    //         : sum;
    //     },
    //     { type: "", text: "" }
    //   );
    // });
  }
  showForm() {
    this.formState.changeState(false);
  }
}
