import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursoEjerciciosPage } from './curso-ejercicios.page';

describe('CursoEjerciciosPage', () => {
  let component: CursoEjerciciosPage;
  let fixture: ComponentFixture<CursoEjerciciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoEjerciciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursoEjerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
