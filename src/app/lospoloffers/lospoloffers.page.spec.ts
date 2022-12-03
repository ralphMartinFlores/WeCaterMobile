import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LospoloffersPage } from './lospoloffers.page';

describe('LospoloffersPage', () => {
  let component: LospoloffersPage;
  let fixture: ComponentFixture<LospoloffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LospoloffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LospoloffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
