import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-account-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>(); 

  accountForm = new FormGroup({
    holder: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    document: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
  }

  handleSubmit() {
    if (this.isValidForm) {
      this.onSubmit.emit(this.accountForm.value);
      this.accountForm.reset();
    }
  }

  get isValidForm(): boolean { 
    return this.accountForm.status === "VALID";
  }
}
