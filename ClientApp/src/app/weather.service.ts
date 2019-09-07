import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getForecast(): Observable<Weather[]> {
    return this.http.get<Weather[]>('/api/SampleData/WeatherForecasts');
  }
}
