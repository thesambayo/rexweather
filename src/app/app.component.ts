import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { CityViewComponent } from './city-view/city-view.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, AsyncPipe, CityViewComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	private _dataService = inject(DataService);

	title = 'rexweather';
	// i can add feature to add, remove cities
	myCities = this._dataService.baseCities;
	data$ = this._dataService.getCitiesWeathers(this.myCities);
}
