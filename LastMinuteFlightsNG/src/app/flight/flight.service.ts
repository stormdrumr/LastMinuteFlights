import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Travel } from './travel';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flightUrl = 'https://localhost:7281/api/Flights';

  //testData: Travel[] = [{"flightId": 1, "flightNum": "AA7352", "destination": "Miami, FL", "departureAirport": "MCO", "departureTime": "12:00PM EST 08-22-2022", "arrivalAirport": "MIA", "arrivalTime": "2:10PM EST 08-22-2022", "maxCapacity": 145}];
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  

  getFlights(): Observable<Travel[]> {
    return this.http.get<Travel[]>(this.flightUrl, this.httpOptions);
    }

  getOneFlight(id: number): Observable<Travel>{
    let url = '${this.flightUrl}/${flightId}';
    return this.http.get<Travel>(url, this.httpOptions);
  }

  createFlight(flight: Travel): Observable<Travel>{
    return this.http.post<Travel>(this.flightUrl, flight, this.httpOptions);
  }

  updateFlight(flight: Travel): Observable<Travel>{
    let url = '${this.flightUrl}/${flight.flightId}';
    return this.http.put<Travel>(url, flight, this.httpOptions);
  }

  deleteFlight(flightId: number): Observable<Travel>{
    return this.http.delete<Travel>('${this.flightUrl}/${flightId}}', this.httpOptions);
  }

}
