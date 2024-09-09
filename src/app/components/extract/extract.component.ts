import { Component, OnInit } from '@angular/core';
import { GlobalEventService } from 'src/app/services/global-event.service';
import { MakeRequestsService } from 'src/app/services/make-requests.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  depositModalModel = false;
  transferenceModalModel = false;
  selectedAccountId: number = 0
  extracts = [];
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
    private makeRequests: MakeRequestsService,
    private globalEvent: GlobalEventService
  ) { }

  ngOnInit() {
    this.fetchExtracts();
    this.globalEvent.onEvent((data) => {
      if (data.name === "updateExtract") {
        this.handleUpdateExtract(data.id);
      }
    })
  }

  handleUpdateExtract(id: number) {
    this.selectedAccountId = id;
    this.extracts = this.makeRequests.GET({ name: "extracts" }) || [];
  }

  openDepositModal() {
    this.depositModalModel = true;
  }
  openTransferenceModal() {
    this.transferenceModalModel = true;
  }

  submitDeposit(payload: any) {
    this.depositModalModel = false;
    this.createExtract({ ...payload, type: "deposit" });
  }
  submitTransference(payload: any) {
    this.transferenceModalModel = false;
    this.createExtract({ ...payload, type: "transference" });
  }

  fetchExtracts() {
    this.extracts = this.makeRequests.GET({ name: "extracts" }) || [];
  }

  createExtract(transaction: any) {
    const index = this.extracts.length + 1;
    this.extracts.push({ id: index, ...transaction });
    
    this.makeRequests.UPDATE({ name: "extracts", payload: this.extracts })
  }

  get filteredExtracts() {
    return this.extracts.filter(item => { 
      if (item.type === "transference")  {
        if (item.transferred_account.id === this.selectedAccountId || item.received_account.id === this.selectedAccountId) {
          return item;
        }
      }
      
      if (item.type === "deposit" && Number(item.account_id) === this.selectedAccountId) {
        return item;
      }
    });
  }
}
