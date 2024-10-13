import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloModule } from 'apollo-angular';

import { CountriesComponent } from './countries.component';

describe('CountriesComponent', () => {
  let fixture: ComponentFixture<CountriesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountriesComponent],
      imports: [ApolloModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
