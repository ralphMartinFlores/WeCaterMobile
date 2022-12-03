import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewreviewsPage } from './viewreviews.page';

describe('ViewreviewsPage', () => {
  let component: ViewreviewsPage;
  let fixture: ComponentFixture<ViewreviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewreviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
