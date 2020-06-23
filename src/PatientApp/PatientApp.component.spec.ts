import { TestBed, async } from '@angular/core/testing';
import { PatientComponent } from './PatientApp.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PatientComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PatientComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HospitalManagement'`, () => {
    const fixture = TestBed.createComponent(PatientComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HospitalManagement');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PatientComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('HospitalManagement app is running!');
  });
});
