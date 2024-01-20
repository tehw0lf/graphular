import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';

import { Country } from '../country/country.type';

const GET_COUNTRIES = gql`
  {
    countries {
      name
      capital
      emoji
    }
  }
`;

@Component({
  selector: 'graphular-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countries: Observable<Country[]> | undefined;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.countries = this.apollo
      .watchQuery({ query: GET_COUNTRIES })
      .valueChanges.pipe(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map((result: any) => result.data && result.data.countries)
      );
  }
}
