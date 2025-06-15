import { inject } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { CountriesComponent } from './countries.component';

const uri = 'https://countries.trevorblades.com/graphql';
function createApollo(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

describe('CountriesComponent', () => {
  let fixture: ComponentFixture<CountriesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountriesComponent],
      providers: [provideApollo(createApollo)],
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
