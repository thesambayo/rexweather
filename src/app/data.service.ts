import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CityWeatherResponse } from './@core/interface';
import { forkJoin, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private APIKEY = environment.API_KEY;
	private baseURL = environment.OPENWEATHERURL;
	baseCities = environment.cities;

	private http = inject(HttpClient);

	private getWeatherByCity(city: string) {
		return this.http.get<CityWeatherResponse>(`${this.baseURL}?q=${city}&appid=${this.APIKEY}`)
	}

	getCitiesWeathers(cities: string[]) {
		return timer(0, 500000).pipe(
			switchMap(() =>
				forkJoin(
					cities.map(city => this.getWeatherByCity(city))
				)),
		)
	}
}
