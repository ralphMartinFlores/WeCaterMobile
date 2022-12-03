import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearestcateringPage } from './nearestcatering.page';

describe('NearestcateringPage', () => {
  let component: NearestcateringPage;
  let fixture: ComponentFixture<NearestcateringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestcateringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearestcateringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
