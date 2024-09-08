import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalEventService } from 'src/app/services/global-event.service';
import { MakeRequestsService } from 'src/app/services/make-requests.service';

@Component({
  selector: 'app-deposit-form',
  templateUrl: './deposit-form.component.html',
  styleUrls: ['./deposit-form.component.scss']
})
export class DepositFormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>(); 

  constructor(
    private makeRequest: MakeRequestsService,
    private globalEvent: GlobalEventService
  ) {}

  accounts = [];

  depositForm = new FormGroup({
    account: new FormControl(null, [Validators.required]),
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
      const account_id = Number(this.depositForm.value.account.id)
      this.accounts = this.accounts.map(item => {
        if (item.id === account_id) {
          item.balance += this.depositForm.value.value;
        }

        return item;
      });

      this.makeRequest.UPDATE({ name: "accounts", payload: this.accounts });
      this.globalEvent.emitEvent({ name: "updateAccounts" })

      this.onSubmit.emit({ ...this.depositForm.value, account_id });
      this.depositForm.reset();
    }
  }

  get isValidForm(): boolean { 
    return this.depositForm.status === "VALID";
  }
}
