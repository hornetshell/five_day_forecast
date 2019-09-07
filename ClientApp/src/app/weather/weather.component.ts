import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherForecast: Weather[] = [
    {
      temperatureC: 55,
      dateFormatted: '01/01/1995',
      summary: 'Breezy'
    }
  ];
  now = new Date();
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getForecast().subscribe(
      forecast => this.weatherForecast = forecast
    );
    this.oberserableTimer();
  }

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      this.weatherService.getForecast().subscribe(
        forecast => this.weatherForecast = forecast
      );
      this.now = new Date();
    });
  }

}
