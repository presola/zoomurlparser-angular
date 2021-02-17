import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url, parser} from '../../data/api.json';
import {ZoomDetails} from '../models/zoom';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getZoomDetails(urlParam: string): Observable<ZoomDetails> {
    return this.http.post<ZoomDetails>(`${url}${parser}`, {link: urlParam});
  }
}
