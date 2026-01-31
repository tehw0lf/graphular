import { Component, inject, OnInit } from '@angular/core';
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
  standalone: false,
})
export class CountriesComponent implements OnInit {
  private readonly apollo: Apollo = inject(Apollo);
  countries: Observable<Country[]> | undefined;

  ngOnInit(): void {
    this.countries = this.apollo
      .watchQuery({ query: GET_COUNTRIES })
      .valueChanges.pipe(
        map((result: any) => result.data && result.data.countries),
      );
  }
}
