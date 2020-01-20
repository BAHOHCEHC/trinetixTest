import { Component, OnInit } from '@angular/core';
import { DataServiceService, TextItem } from 'src/app/data-service.service';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';

@Component({
  selector: "app-augmented-reality",
  templateUrl: "./augmented-reality.component.html",
  styleUrls: ["./augmented-reality.component.scss"]
})
export class AugmentedRealityComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  textData$: Observable<TextItem[]>;
  // augmentedReality: { type: string; text: string; title?: string };

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("augmentedReality");
    // this.textData$ = this.dataServiceService.getTexts();
    // this.textData$.subscribe(res => {
    //   this.augmentedReality = res.reduce(
    //     (sum, current) => {
    //       return current.type === "augmentedReality"
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
