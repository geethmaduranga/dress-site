import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDummyComponent } from './user-dummy.component';

describe('UserDummyComponent', () => {
  let component: UserDummyComponent;
  let fixture: ComponentFixture<UserDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
