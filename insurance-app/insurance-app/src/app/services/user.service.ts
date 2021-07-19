import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl='http://localhost:8080/InsuranceApplication/users';
  constructor(private http: HttpClient) { }

  createUser(user: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/addUser`, user);
  }

  updateUser(user: object): Observable<Object>{
    return this.http.put(`${this.baseUrl}/updateUser/`, user);
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteUser/${id}`,{ responseType: 'text'});
  }

  getUser(userId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/viewUser/${userId}`);
  }

  getUserId(email:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/viewUserbyEmail/${email}`);
}

  getUserList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllUsers`)
  }

  userlogin(email:String, password:String):Observable<Object>{
    return this.http.get(`${this.baseUrl}/customerlogin/${email}/${password}`);
  }
}
