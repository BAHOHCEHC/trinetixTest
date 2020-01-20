import { Component, OnInit } from "@angular/core";
import {
  DataServiceService,
  FooterData,
  TextItem,
} from "src/app/data-service.service";
import { Observable } from "rxjs";
import { DataService } from '../../data.service';

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  textData$: Observable<TextItem[]>;
  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("about");

  }
  showForm() {
    this.formState.changeState(false);
  }
}
