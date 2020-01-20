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

  ngOnInit() {
    this.textData$ = this.dataServiceService.getPageText("home");

  }
  showForm() {
    this.formState.changeState(false);
  }
}
