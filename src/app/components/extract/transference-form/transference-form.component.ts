import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalEventService } from 'src/app/services/global-event.service';
import { MakeRequestsService } from 'src/app/services/make-requests.service';

@Component({
  selector: 'app-transference-form',
  templateUrl: './transference-form.component.html',
  styleUrls: ['./transference-form.component.scss']
})
export class TransferenceFormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>(); 

  constructor(
    private makeRequest: MakeRequestsService,
    private globalEvent: GlobalEventService
  ) {}

  accounts = [];

  transferenceForm = new FormGroup({
    transferred_account: new FormControl(null, [Validators.required]),
    received_account: new FormControl(null, [Validators.required]),
    value: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.getAllAccounts();

    this.globalEvent.onEvent((data) => {
      if (data.name === "updateAccounts") {
        this.getAllAccounts();
      }
    })
  }

  getAllAccounts() {
    this.accounts = this.makeRequest.GET({ name: "accounts" }) || [];
  }

  handleSubmit() {
    if (this.isValidForm) {
      const transferred_account = this.accounts.filter((item) => this.transferenceForm.value.transferred_account.id === item.id).pop();
      const received_account = this.accounts.filter((item) => this.transferenceForm.value.received_account.id === item.id).pop();

      if (transferred_account.balance >= this.transferenceForm.value.value) {
        this.accounts = this.accounts.map((item) => {
          if (item.id === transferred_account.id) {
            item.balance -= this.transferenceForm.value.value;
          }
          if (item.id === received_account.id) {
            item.balance += this.transferenceForm.value.value;
          }
          return item;
        })
        this.makeRequest.UPDATE({ name: "accounts", payload: this.accounts });
        this.globalEvent.emitEvent({ name: "updateAccounts" })
      } else {
        console.log('Saldo insuficiente')
      }


      this.onSubmit.emit({ ...this.transferenceForm.value });
      this.transferenceForm.reset();
    }
  }

  get isValidForm(): boolean { 
    return this.transferenceForm.status === "VALID";
  }
}
