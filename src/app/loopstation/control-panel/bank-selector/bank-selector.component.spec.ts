import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSelectorComponent } from './bank-selector.component';

describe('BankSelectorComponent', () => {
  let component: BankSelectorComponent;
  let fixture: ComponentFixture<BankSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
