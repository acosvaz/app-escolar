import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarunoPage } from './editaruno.page';

describe('EditarunoPage', () => {
  let component: EditarunoPage;
  let fixture: ComponentFixture<EditarunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarunoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
