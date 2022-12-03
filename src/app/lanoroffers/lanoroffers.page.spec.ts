import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanoroffersPage } from './lanoroffers.page';

describe('LanoroffersPage', () => {
  let component: LanoroffersPage;
  let fixture: ComponentFixture<LanoroffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanoroffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanoroffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
