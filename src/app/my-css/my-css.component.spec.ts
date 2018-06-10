import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCssComponent } from './my-css.component';

describe('MyCssComponent', () => {
  let component: MyCssComponent;
  let fixture: ComponentFixture<MyCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
