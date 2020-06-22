import { Component, OnInit } from '@angular/core';
import { Film } from '../models/Film';
import { FilmService } from '../services/film.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  filme: Film[];

  constructor(private filmService: FilmService) {
  
   }

  public ngOnInit() {
    this.filmService.getFilm().subscribe((filme: Film[]) =>{
      this.filme = filme
    })
  }

}
