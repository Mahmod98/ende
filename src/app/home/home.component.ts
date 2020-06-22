import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Film } from '../models/Film';
import { FilmService } from '../services/film.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  addFilmForm;
  filme: Film[];
  newFilm: Observable<Film>;

  constructor(private filmService: FilmService, private formBuilder: FormBuilder) {
      this.addFilmForm = this.formBuilder.group({
        name: ''
      });
  }

 // filme: Observable<Film[]>;


  public ngOnInit() {
    this.filmService.getFilm().subscribe((filme: Film[]) =>{
      this.filme = filme
    })
  }

  addFilm(filmDaten) {
    console.log(filmDaten.name);
    this.newFilm = this.filmService.addFilm(filmDaten.name);
     this.newFilm.subscribe(data => {
      console.dir(data);
    }) 
    
  }


 
  }

  /*add(name: string, beschreibung: string, genre: string, bewertung: string, datum: string, dauer: string, titelbild: string ): void{
    name = name.trim();
    beschreibung = beschreibung.trim();
    genre = genre.trim();

    if (Number.isNaN(Number(bewertung)) || !name || Number(bewertung) === 0 ) {
      alert('fehler fehleeeeeeeer');
      return
    }

    const newFilm: Film = new Film();
    newFilm.name = name;
    newFilm.beschreibung = beschreibung;
    newFilm.genre = genre;
    newFilm.bewertung = Number(bewertung);
    newFilm.datum = new Date(datum);
    newFilm.dauer = Number(dauer);
    newFilm.titelbild = Number(titelbild);
    this.filmService.addFilm(newFilm).subscribe(newFilm => {
      this.filme.push(newFilm);
    })


  }*/

/*  ngOnInit(): void {
    this.filme = this.filmService.getFilm();

    this.filme.subscribe(data => {
      console.log(data);
    });
    console.log(this.filme);
  }*/


