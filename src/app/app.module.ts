import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ExtractComponent } from './components/extract/extract.component';
import { ButtonComponent } from './components/Base/button/button.component';
import { ModalComponent } from './components/Base/modal/modal.component';
import { CardComponent } from './components/Base/card/card.component';
import { IconComponent } from './components/Base/icon/icon.component';
import { FormComponent } from './components/accounts/new-account-form/form.component';
import { DropdownComponent } from './components/Base/dropdown/dropdown.component';
import { DepositFormComponent } from './components/extract/deposit-form/deposit-form.component';
import { TransferenceFormComponent } from './components/extract/transference-form/transference-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    AccountsComponent,
    ExtractComponent,
    ButtonComponent,
    ModalComponent,
    CardComponent,
    IconComponent,
    FormComponent,
    DropdownComponent,
    DepositFormComponent,
    TransferenceFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
