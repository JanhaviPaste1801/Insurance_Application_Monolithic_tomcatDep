import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserAndPolicyDetailsComponent } from './admin-user-and-policy-details.component';

describe('AdminUserAndPolicyDetailsComponent', () => {
  let component: AdminUserAndPolicyDetailsComponent;
  let fixture: ComponentFixture<AdminUserAndPolicyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserAndPolicyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserAndPolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
