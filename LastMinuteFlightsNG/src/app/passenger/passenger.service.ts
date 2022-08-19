import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Traveller } from './traveller';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private passengerUrl = 'https://localhost:7281/api/Passengers';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getPassengers(): Observable<Traveller[]> {
    return this.http.get<Traveller[]>(this.passengerUrl, this.httpOptions); 
    };

  getOnePassenger(passengerID: number): Observable<Traveller>{
    let url = '${this.passengerUrl}/${passengerID}';
    return this.http.get<Traveller>(url, this.httpOptions);
  }

  createPassenger(passenger: Traveller): Observable<Traveller>{
    return this.http.post<Traveller>(this.passengerUrl, passenger, this.httpOptions);
  }

  updatePassenger(passenger: Traveller): Observable<Traveller>{
    let url = '${this.passengerUrl}/${passenger.passengerID}';
    return this.http.put<Traveller>(url, passenger, this.httpOptions);
  }

  deletePassenger(passengerID: number): Observable<Traveller>{
    return this.http.delete<Traveller>('${this.passengerUrl}/${passengerID}}', this.httpOptions);
  }
}
