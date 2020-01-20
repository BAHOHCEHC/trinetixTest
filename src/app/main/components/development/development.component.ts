import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService, TextItem } from 'src/app/data-service.service';
import { DataService } from '../../data.service';

@Component({
  selector: "app-development",
  templateUrl: "./development.component.html",
  styleUrls: ["./development.component.scss"]
})
export class DevelopmentComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  textData$: Observable<TextItem[]>;
  // contactpage: { type: string; text: string; title?: string };

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("development");
    // this.textData$ = this.dataServiceService.getTexts();
    // this.textData$.subscribe(res => {
    //   this.development = res.reduce(
    //     (sum, current) => {
    //       return current.type === "development"
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
