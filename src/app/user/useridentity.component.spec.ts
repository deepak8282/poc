import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseridentityComponent } from './useridentity.component';

describe('UseridentityComponent', () => {
  let component: UseridentityComponent;
  let fixture: ComponentFixture<UseridentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseridentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseridentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
