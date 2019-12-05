import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRecomendacionComponent } from './modificar-recomendacion.component';

describe('ModificarRecomendacionComponent', () => {
  let component: ModificarRecomendacionComponent;
  let fixture: ComponentFixture<ModificarRecomendacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarRecomendacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
