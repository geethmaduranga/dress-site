import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDummyComponent } from './top-dummy.component';

describe('TopDummyComponent', () => {
  let component: TopDummyComponent;
  let fixture: ComponentFixture<TopDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
