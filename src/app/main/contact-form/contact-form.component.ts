import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit
} from "@angular/core";
import { ConnectionService } from "../connection.service";
import { DataService } from "../data.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"]
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;
  hide = true;

  @HostListener("input") oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(
    private fb: FormBuilder,
    private connectionService: ConnectionService,
    private stateService: DataService
  ) {
    this.contactForm = fb.group({
      contactFormName: ["", Validators.required],
      contactFormEmail: [
        "",
        Validators.compose([Validators.required, Validators.email])
      ],
      contactFormMessage: ["", Validators.required],
      contactFormCopy: [""]
    });
  }

  ngOnInit(): void {
    this.stateService.currentState.subscribe(state => (this.hide = state));
  }
  close() {
    this.contactForm.reset();
    this.disabledSubmitButton = true;
    this.stateService.changeState(true);
    this.hide = true;
  }
  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(
      () => {
        alert("Your message has been sent.");
        this.contactForm.reset();
        this.disabledSubmitButton = true;
        this.stateService.changeState(true);
        this.hide = true;
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}
