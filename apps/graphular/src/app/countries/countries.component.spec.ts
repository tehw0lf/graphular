import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesComponent } from './countries.component';

describe('CountriesComponent', () => {
  let fixture: ComponentFixture<CountriesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
