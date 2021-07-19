import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimedPolicy } from '../models/claimedPolicy';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClaimedPolicyService {

  constructor( private http:HttpClient, private authService: AuthService) { }
userId:number;

  private baseUrl='http://localhost:8080/InsuranceApplication/claimedPolicies';

  addClaimedPolicy(claimedPolicy: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/addClaimedPolicy`, claimedPolicy);
  }

  updateClaimedPolicy(claimedPolicy: object): Observable<Object>{
    return this.http.put(`${this.baseUrl}/updateClaimedPolicy/`, claimedPolicy);
  }

  deleteClaimedPolicy(planid: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteClaimedPolicy/${planid}`,{ responseType: 'text'});
  }

  viewClaimedPolicy(planid: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/viewClaimedPolicy/${planid}`);
  }

  getAllClaimedPolicies(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllPolicies`)
  }

  getClaimPolicyByUser(userId:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/getClaimPolicyByUser/${userId}`)
  }

  claimAPolicy(policyId:number, userId:number, claimedPolicy:ClaimedPolicy):Observable<any>{
    return this.http.post(`${this.baseUrl}/claimAPolicy/${policyId}/${userId}`, claimedPolicy);
  }

  listOfAllClaimedPolicies():Observable<any>{
    return this.http.get(`${this.baseUrl}/listOfAllClaimedPolicies`);
  }

  findByPlanIdAndUserId(userId:number,planId:number){
    return this.http.get(`${this.baseUrl}/findByPlanIdAndUserId/${userId}/${planId}`);
  }
}
