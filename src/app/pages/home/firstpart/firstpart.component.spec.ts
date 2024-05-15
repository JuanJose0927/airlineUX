import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpartComponent } from './firstpart.component';

describe('FirstpartComponent', () => {
  let component: FirstpartComponent;
  let fixture: ComponentFixture<FirstpartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstpartComponent]
    });
    fixture = TestBed.createComponent(FirstpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
