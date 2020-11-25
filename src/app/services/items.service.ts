import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any> {
    return this.http.get('http://localhost:3000/items')
    .pipe(map(data => data));
  }
}
