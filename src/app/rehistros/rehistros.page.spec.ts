import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RehistrosPage } from './rehistros.page';

describe('RehistrosPage', () => {
  let component: RehistrosPage;
  let fixture: ComponentFixture<RehistrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehistrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RehistrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
