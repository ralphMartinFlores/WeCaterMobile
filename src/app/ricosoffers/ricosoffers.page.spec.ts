import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RicosoffersPage } from './ricosoffers.page';

describe('RicosoffersPage', () => {
  let component: RicosoffersPage;
  let fixture: ComponentFixture<RicosoffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicosoffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RicosoffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
