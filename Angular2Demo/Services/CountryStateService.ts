import { Injectable } from '@angular/core';
import { Country } from "../Model/Country";

@Injectable()
export class CountryStateService {
    getCountries()
    {
        return [
            new Country(1, 'India'),
            new Country(2, 'Us'),
            new Country(3, 'England')
        ];
    }


}