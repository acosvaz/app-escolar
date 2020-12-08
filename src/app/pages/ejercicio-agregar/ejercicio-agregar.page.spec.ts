import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EjercicioAgregarPage } from './ejercicio-agregar.page';

describe('EjercicioAgregarPage', () => {
  let component: EjercicioAgregarPage;
  let fixture: ComponentFixture<EjercicioAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EjercicioAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
