import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditardosPage } from './editardos.page';

describe('EditardosPage', () => {
  let component: EditardosPage;
  let fixture: ComponentFixture<EditardosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditardosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditardosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
