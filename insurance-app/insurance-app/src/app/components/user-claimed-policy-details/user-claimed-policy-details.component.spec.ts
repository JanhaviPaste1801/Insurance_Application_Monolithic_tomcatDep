import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClaimedPolicyDetailsComponent } from './user-claimed-policy-details.component';

describe('UserClaimedPolicyDetailsComponent', () => {
  let component: UserClaimedPolicyDetailsComponent;
  let fixture: ComponentFixture<UserClaimedPolicyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserClaimedPolicyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserClaimedPolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
