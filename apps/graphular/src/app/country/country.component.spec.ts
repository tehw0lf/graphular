import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryComponent } from './country.component';
describe('CountryComponent', () => {
  let fixture: ComponentFixture<CountryComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CountryComponent);
  });
  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
