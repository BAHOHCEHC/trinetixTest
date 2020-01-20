import { Component, OnInit } from '@angular/core';
import { DataServiceService, TextItem } from 'src/app/data-service.service';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.scss"]
})
export class ContactPageComponent implements OnInit {
  constructor(
    private dataServiceService: DataServiceService,
    private formState: DataService
  ) {}
  textData$: Observable<TextItem[]>;

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("contactpage");

  }
  showForm() {
    this.formState.changeState(false);
  }
}
