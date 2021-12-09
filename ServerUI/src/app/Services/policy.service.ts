import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Shared/Constants/urlList';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAllPolicies() {
    return this.http.get(`${this.baseURL}/${ApiPaths.getAllPolicies}`);
  }

  addNewPolicy(data:any){
    return this.http.post(`${this.baseURL}/${ApiPaths.addNewPolicy}`,data);
  }

  updatePolicy(data:any){
    return this.http.patch(`${this.baseURL}/${ApiPaths.addNewPolicy}${data._id}`,data);
  }


  getAllTargetGroups(){
    return this.http.get(`${this.baseURL}/${ApiPaths.getAllTargetGroups}`);
  }

  addNewTarget(newTarget:string){
    var targetObj = {
      groupName : newTarget
    };
    return this.http.post(`${this.baseURL}/${ApiPaths.addNewTarget}`,targetObj);
  }
}
