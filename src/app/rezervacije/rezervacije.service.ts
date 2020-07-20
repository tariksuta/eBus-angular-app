import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rezervacije } from '../shared/rezervacije.model';
import { RezervacijaUpsert } from '../shared/Requests/rezervacijaupsert.model';
import { Cijena } from '../shared/cijena.model';

@Injectable({providedIn : 'root'})
export class RezervacijeService{

    constructor(private http : HttpClient){}


    getRezervacije(){
        return this.http.get<Rezervacije[]>('http://localhost:61134/api/Rezervacija');
    }

    getRezervacijaById(id:number){
        return this.http.get<Rezervacije>('http://localhost:61134/api/Rezervacija/' + id);

    }

    updateRezervacija(id: number, rezervaicija : RezervacijaUpsert){

      return  this.http.put<RezervacijaUpsert>(`http://localhost:61134/api/Rezervacija/${id}`,rezervaicija);
    }

    getCijena(){
        return this.http.get<Cijena[]>('http://localhost:61134/api/Cijena');

    }

    
}