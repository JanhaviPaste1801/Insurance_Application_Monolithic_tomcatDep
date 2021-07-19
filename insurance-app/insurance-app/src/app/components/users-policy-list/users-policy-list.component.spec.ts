import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPolicyListComponent } from './users-policy-list.component';

describe('UsersPolicyListComponent', () => {
  let component: UsersPolicyListComponent;
  let fixture: ComponentFixture<UsersPolicyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPolicyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
