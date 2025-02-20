import { Component, Input } from '@angular/core';

import { Country } from './country.type';

@Component({
    selector: 'graphular-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss'],
    standalone: false
})
export class CountryComponent {
  @Input() country: Country | null = null;
}
