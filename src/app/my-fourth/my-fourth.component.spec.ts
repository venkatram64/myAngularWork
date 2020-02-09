import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFourthComponent } from './my-fourth.component';

describe('MyFourthComponent', () => {
  let component: MyFourthComponent;
  let fixture: ComponentFixture<MyFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
