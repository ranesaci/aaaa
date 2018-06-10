import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataBindingComponent } from './my-data-binding.component';

describe('MyDataBindingComponent', () => {
  let component: MyDataBindingComponent;
  let fixture: ComponentFixture<MyDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
