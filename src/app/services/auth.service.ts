import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private registerUrl : string = 'http://localhost:8080/api/login';

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};


  register(name: string):Observable<User>{
    return this.http.post<User>(this.registerUrl,
      {
        "name" : name
      });
  }

  
 
    
}




