import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadPadecidaComponent } from './enfermedad-padecida.component';

describe('EnfermedadPadecidaComponent', () => {
  let component: EnfermedadPadecidaComponent;
  let fixture: ComponentFixture<EnfermedadPadecidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfermedadPadecidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermedadPadecidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
