import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Shared/Constants/urlList';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAllClients() {
    return this.http.get(`${this.baseURL}/${ApiPaths.getAllClients}`);
  }

  addNewClient(data:any){
    return this.http.post(`${this.baseURL}/${ApiPaths.addNewClient}`,data);
  }a

  getAllTargetGroups(){
    return this.http.get(`${this.baseURL}/${ApiPaths.getAllTargetGroups}`);
  }
}
