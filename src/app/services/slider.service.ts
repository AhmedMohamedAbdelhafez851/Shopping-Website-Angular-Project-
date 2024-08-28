import { Injectable, OnInit } from '@angular/core';
import { Slider } from '../Interfaces/Sliders';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private apiUrl = 'http://localhost:3000/sliders'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  // Method to fetch sliders
  getSliders(): Observable<Slider[]> {
    return this.http.get<Slider[]>(`${this.apiUrl}/sliders`).pipe(
      catchError(this.handleError<Slider[]>('getSliders', []))
    );
  }

  // Error handling method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}