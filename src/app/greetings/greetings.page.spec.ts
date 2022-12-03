import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GreetingsPage } from './greetings.page';

describe('GreetingsPage', () => {
  let component: GreetingsPage;
  let fixture: ComponentFixture<GreetingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
