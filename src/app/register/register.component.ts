import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: Observable<User>;
  constructor(private auth: AuthService, private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    email:['',[Validators.required]],
    vorname:['',[Validators.required]],
    nachname:['',[Validators.required]],
    password:['',[Validators.required]]

  });

  onSubmit(){
    console.log(this.registrationForm.value);
    this.auth.register(this.registrationForm.value).subscribe(
      respose => console.log("success", respose),
      error => console.error("Error", error)
    );
  }

  ngOnInit(): void {
  }



  

}
