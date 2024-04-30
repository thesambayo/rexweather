import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { CityWeatherResponse } from '../@core/interface';

@Component({
	selector: 'app-city-view',
	standalone: true,
	imports: [DecimalPipe, DatePipe],
	templateUrl: './city-view.component.html',
	styleUrl: './city-view.component.scss'
})
export class CityViewComponent {
	cityWeather = input.required<CityWeatherResponse>();

	today = new Date();
	readonly BASEKELVINTOCELCIUSUNIT = 273.15;
}
