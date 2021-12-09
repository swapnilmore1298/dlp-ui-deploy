import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Shared/Constants/urlList';


@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAllIncidents() {
    return this.http.get(`${this.baseURL}/${ApiPaths.getAllIncidents}`);
  }
}
