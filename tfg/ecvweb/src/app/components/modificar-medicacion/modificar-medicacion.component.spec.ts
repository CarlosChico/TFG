import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMedicacionComponent } from './modificar-medicacion.component';

describe('ModificarMedicacionComponent', () => {
  let component: ModificarMedicacionComponent;
  let fixture: ComponentFixture<ModificarMedicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarMedicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMedicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
