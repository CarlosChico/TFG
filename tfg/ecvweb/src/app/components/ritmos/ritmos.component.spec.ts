import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RitmosComponent } from './ritmos.component';

describe('RitmosComponent', () => {
  let component: RitmosComponent;
  let fixture: ComponentFixture<RitmosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RitmosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RitmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
