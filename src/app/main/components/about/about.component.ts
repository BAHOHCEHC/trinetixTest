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
  // about: { type: string; text: string; title?: string };

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("about");
    // this.textData$.subscribe(res => {
    //   this.about = res.reduce(
    //     (sum, current) => {
    //       return current.type === "about" ? Object.assign(sum, current) : sum;
    //     },
    //     { type: "", text: "" }
    //   );
    // });
  }
  showForm() {
    this.formState.changeState(false);
  }
}
