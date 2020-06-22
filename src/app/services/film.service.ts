import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Film } from '../models/Film'; 
import {Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../models/User';
//import { of } from 'rxjs/observable/of';


@Injectable({
    providedIn:'root'
})

export class FilmService {
    constructor(private http: HttpClient) {}

    private filmUrl : string = 'http://localhost:8080/api/film';
    private filmUrlpost : string = 'http://localhost:8080/api/filmpost';
    private registerUrl : string = 'http://localhost:8080/api/register';

    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    getFilm(): Observable<Film[]> {
        return this.http.get<Film[]>(this.filmUrl)
    }

    addFilm(name: string): Observable<Film> {
        console.log("im service");
        return this.http.post<Film>(this.filmUrlpost,
            {
                "name" : name
            });
     
        
    }

    registerUser(email): Observable<User>{
        console.log("register complete");
        return this.http.post<User>(this.registerUrl,
            {
                "email" : email
        });
    
    }


}