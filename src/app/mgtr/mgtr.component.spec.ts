import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgtrComponent } from './mgtr.component';

describe('MgtrComponent', () => {
  let component: MgtrComponent;
  let fixture: ComponentFixture<MgtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
