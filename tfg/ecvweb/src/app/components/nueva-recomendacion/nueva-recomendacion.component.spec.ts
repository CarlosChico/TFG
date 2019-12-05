import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaRecomendacionComponent } from './nueva-recomendacion.component';

describe('NuevaRecomendacionComponent', () => {
  let component: NuevaRecomendacionComponent;
  let fixture: ComponentFixture<NuevaRecomendacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaRecomendacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaRecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
