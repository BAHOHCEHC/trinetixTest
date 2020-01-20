import { Component, OnInit } from '@angular/core';
import { DataServiceService, TextItem } from 'src/app/data-service.service';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';

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
  // contactpage: { type: string; text: string; title?: string };

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("expertise");
    // this.textData$ = this.dataServiceService.getTexts();
    // this.textData$.subscribe(res => {
    //   this.expertise = res.reduce(
    //     (sum, current) => {
    //       return current.type === "expertise"
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

