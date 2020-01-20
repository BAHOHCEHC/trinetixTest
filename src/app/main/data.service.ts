import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataService {
  private stateSource = new BehaviorSubject(true);
  currentState = this.stateSource.asObservable();

  constructor() {}

  changeState(state: boolean) {
    this.stateSource.next(state);
  }
}
