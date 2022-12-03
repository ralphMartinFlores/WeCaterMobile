import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeLoginPage } from './we-login.page';

describe('WeLoginPage', () => {
  let component: WeLoginPage;
  let fixture: ComponentFixture<WeLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
