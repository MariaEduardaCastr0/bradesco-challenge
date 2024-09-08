import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenceFormComponent } from './transference-form.component';

describe('TransferenceFormComponent', () => {
  let component: TransferenceFormComponent;
  let fixture: ComponentFixture<TransferenceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
