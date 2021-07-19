import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  
  private baseUrl='http://localhost:8080/InsuranceApplication/policy';
  constructor(private http: HttpClient) { }

  createPolicy(policy: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/addPolicy`, policy);
  }

  updatePolicy(policy: object): Observable<Object>{
    return this.http.put(`${this.baseUrl}/updatePolicy/`, policy);
  }

  deletePolicy(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deletePolicy/${id}`,{ responseType: 'text'});
  }

  getPolicy(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/viewPolicy/${id}`);
  }

  getPolicyList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllPolicies`)
  }
}
