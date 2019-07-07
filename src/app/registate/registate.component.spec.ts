import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistateComponent } from './registate.component';

describe('RegistateComponent', () => {
  let component: RegistateComponent;
  let fixture: ComponentFixture<RegistateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
