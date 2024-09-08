import { Component, OnInit } from '@angular/core';
import { GlobalEventService } from 'src/app/services/global-event.service';
import { MakeRequestsService } from 'src/app/services/make-requests.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  newAccountModal: boolean = false;
  depositModal = false;
  transferenceModal = false;

  accounts = []
  actions = [
    {
      icon: "transference",
      label: "Transferência",
      callback: () => this.openTransferenceModal()
    },
    {
      icon: "deposit",
      label: "Depósito",
      callback: () => this.openDepositModal()
    },
  ]; 

  constructor(
    private makeRequest: MakeRequestsService,
    private globalEvent: GlobalEventService,
  ) {}

  ngOnInit() {
    this.fetchAccounts();

    this.globalEvent.onEvent((data) => {
      if (data.name === "updateAccounts") {
        this.fetchAccounts();
      }
    })
  }

  openNewAccountModal() {
    this.newAccountModal = true;
  }
  openDepositModal() {
    this.depositModal = true;
  }
  openTransferenceModal() {
    this.transferenceModal = true;
  }

  fetchAccounts() {
    this.accounts = this.makeRequest.GET({ name: "accounts" }) || [];
  }

  addAccount(values: any){
    const id = this.accounts.length + 1;
    this.accounts.push({ id, balance: 0, ...values });
    this.newAccountModal = false;

    this.makeRequest.POST({ name: "accounts", payload: this.accounts });
    this.globalEvent.emitEvent({ name: "updateAccounts" });
  }

  showAccountExtract(account: any) {
    this.globalEvent.emitEvent({ name: "updateExtract", id: account.id });
  }

}
