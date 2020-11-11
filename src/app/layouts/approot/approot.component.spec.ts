import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprootComponent } from './approot.component';

describe('ApprootComponent', () => {
  let component: ApprootComponent;
  let fixture: ComponentFixture<ApprootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
