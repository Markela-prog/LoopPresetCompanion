import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopstationComponent } from './loopstation.component';

describe('LoopstationComponent', () => {
  let component: LoopstationComponent;
  let fixture: ComponentFixture<LoopstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopstationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoopstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
