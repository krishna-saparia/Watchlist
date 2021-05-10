import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Show} from '../models/show.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
  baseURL = 'https://api.tvmaze.com/';
  constructor(private http: HttpClient) { }

  getShows(query: string): Observable<any> {
    const url = this.baseURL + 'search/shows';
    let params = new HttpParams();
    params = params.append('q', query);
    return this.http.get<Array<{score: number, show: any}>>(url,
      {params}
    ).pipe(
      map(results => {
        const shows = [];
        results.forEach(result => {
          shows.push(new Show(result.show));
        });
        return shows;
      })
    );
  }
}
