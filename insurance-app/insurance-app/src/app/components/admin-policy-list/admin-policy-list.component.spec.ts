import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPolicyListComponent } from './admin-policy-list.component';

describe('AdminPolicyListComponent', () => {
  let component: AdminPolicyListComponent;
  let fixture: ComponentFixture<AdminPolicyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPolicyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
