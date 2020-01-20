import { Component, OnInit } from "@angular/core";
import { DataServiceService, TextItem } from "src/app/data-service.service";
import { Observable } from "rxjs";
import { DataService } from '../../data.service';

@Component({
  selector: "app-case-studies",
  templateUrl: "./case-studies.component.html",
  styleUrls: ["./case-studies.component.scss"]
})
export class CaseStudiesComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  textData$: Observable<TextItem[]>;

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("caseStudies");

  }
  showForm() {
    this.formState.changeState(false);
  }
}
