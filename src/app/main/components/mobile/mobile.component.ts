import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService, TextItem } from 'src/app/data-service.service';
import { DataService } from '../../data.service';

@Component({
  selector: "app-mobile",
  templateUrl: "./mobile.component.html",
  styleUrls: ["./mobile.component.scss"]
})
export class MobileComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  textData$: Observable<TextItem[]>;
  // contactpage: { type: string; text: string; title?: string };

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("mobile");
  }
  showForm() {
    this.formState.changeState(false);
  }
}

