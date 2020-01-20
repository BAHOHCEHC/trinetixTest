import { Component, OnInit } from '@angular/core';
import { DataServiceService, TextItem } from 'src/app/data-service.service';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  textData$: Observable<TextItem[]>;
  // contactpage: { type: string; text: string; title?: string };

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("home");
    // this.textData$ = this.dataServiceService.getTexts();
    // this.textData$.subscribe(res => {
    //   this.home = res.reduce(
    //     (sum, current) => {
    //       return current.type === "home"
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
