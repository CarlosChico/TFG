import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaMedicacionComponent } from './nueva-medicacion.component';

describe('NuevaMedicacionComponent', () => {
  let component: NuevaMedicacionComponent;
  let fixture: ComponentFixture<NuevaMedicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaMedicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaMedicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
