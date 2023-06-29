import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crew } from '../models/crew.model';
import { Destination } from '../models/destination.model';
import { Technology } from '../models/technology.model';

interface jsonData {
  crew: Crew[];
  destinations: Destination[];
  technology: Technology[];
}

@Injectable({ providedIn: 'root' })
export class ReadJsonService {
  private jsonUrl: string = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getJson(): Observable<jsonData> {
    return this.http.get<jsonData>(this.jsonUrl);
  }

  getCrew(): Observable<Crew[]> {
    return this.http.get<jsonData>(this.jsonUrl).pipe(
      map((data) => {
        if (!data.crew) {
          return [];
        }
        return data.crew;
      })
    );
  }

  getDestinations(): Observable<Destination[]> {
    return this.http.get<jsonData>(this.jsonUrl).pipe(
      map((data) => {
        if (!data.destinations) {
          return [];
        }
        return data.destinations;
      })
    );
  }

  getDestination(id: number): Observable<Destination | undefined> {
    return this.http.get<jsonData>(this.jsonUrl).pipe(
      map((data) => {
        if (!data.destinations) {
          return;
        }
        return data.destinations[id];
      })
    );
  }

  getTechnology(): Observable<Technology[]> {
    return this.http.get<jsonData>(this.jsonUrl).pipe(
      map((data) => {
        if (!data.technology) {
          return [];
        }
        return data.technology;
      })
    );
  }
}
