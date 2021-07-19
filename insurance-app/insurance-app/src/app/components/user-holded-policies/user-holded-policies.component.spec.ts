import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHoldedPoliciesComponent } from './user-holded-policies.component';

describe('UserHoldedPoliciesComponent', () => {
  let component: UserHoldedPoliciesComponent;
  let fixture: ComponentFixture<UserHoldedPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHoldedPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHoldedPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
