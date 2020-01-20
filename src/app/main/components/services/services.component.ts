import { Component, OnInit } from '@angular/core';
import { DataServiceService, FooterData, ServicesItem } from 'src/app/data-service.service';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  data$: Observable<FooterData>;
  textData$: Observable<{ type: string; text: string; title?: string }[]>;
  upperContent: { type: string; title?: string; text: string };
  bottomContent: { type: string; text: string };
  sectionData$: Observable<ServicesItem[]>;

  contentData: ServicesItem[];
  ngOnInit() {
    this.textData$ = this.dataServiceService.getTexts();
    this.textData$.subscribe(res => {
      this.upperContent = res.reduce(
        (sum, current) => {
          return current.type === "upperContent"
            ? Object.assign(sum, current)
            : sum;
        },
        { type: "", text: "", title: "" }
      );
      this.bottomContent = res.reduce(
        (sum, current) => {
          return current.type === "bottomContent"
            ? Object.assign(sum, current)
            : sum;
        },
        { type: "", text: "" }
      );
    });

    this.sectionData$ = this.dataServiceService.getServices();
    this.sectionData$.subscribe(res => {
      this.contentData = res;
    });
  }
  showForm() {
    this.formState.changeState(false);
  }
}
