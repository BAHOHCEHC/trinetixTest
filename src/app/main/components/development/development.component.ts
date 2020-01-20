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

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("development");
  }
  showForm() {
    this.formState.changeState(false);
  }
}
