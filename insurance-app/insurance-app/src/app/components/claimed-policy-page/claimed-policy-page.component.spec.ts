import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimedPolicyPageComponent } from './claimed-policy-page.component';

describe('ClaimedPolicyPageComponent', () => {
  let component: ClaimedPolicyPageComponent;
  let fixture: ComponentFixture<ClaimedPolicyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimedPolicyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimedPolicyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
