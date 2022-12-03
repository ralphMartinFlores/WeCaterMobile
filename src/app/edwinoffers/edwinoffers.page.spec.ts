import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdwinoffersPage } from './edwinoffers.page';

describe('EdwinoffersPage', () => {
  let component: EdwinoffersPage;
  let fixture: ComponentFixture<EdwinoffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdwinoffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdwinoffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
