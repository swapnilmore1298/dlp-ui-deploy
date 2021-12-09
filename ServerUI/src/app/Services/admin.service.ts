import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Shared/Constants/urlList';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL = environment.baseURL;

  constructor(private http : HttpClient) { }

  public loginValidate(loginId){
    return this.http.get(`${this.baseURL}/${ApiPaths.getAllAdmins}`);
  }
}
