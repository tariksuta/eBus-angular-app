import { HttpClient } from '@angular/common/http';
import { Rezervacije } from '../shared/rezervacije.model';
import { RezervacijaUpsert } from '../shared/Requests/rezervacijaupsert.model';

import { environment} from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({providedIn : 'root'})
export class RezervacijeService{

    constructor(private http : HttpClient){}

    private listaRezervacija : Rezervacije[]=[];

    setRezervacije(rezervacije : Rezervacije[]){
        this.listaRezervacija = rezervacije;
    }

    getAllRezervacije(){
        return this.listaRezervacija;
    }

    getRezervacije(){
        return this.http.get<Rezervacije[]>(`${environment.apiUrl}/Rezervacija`);

    }

    getRezervacijaById(id:number){
        return this.http.get<Rezervacije>(`${environment.apiUrl}/Rezervacija/` + id);

    }

    addRezervacija(rezervacija : RezervacijaUpsert){

        return this.http.post<RezervacijaUpsert>(`${environment.apiUrl}/Rezervacija`,rezervacija);

    }

    updateRezervacija(id: number, rezervaicija : RezervacijaUpsert){

        return  this.http.put<RezervacijaUpsert>(`${environment.apiUrl}/Rezervacija/${id}`,rezervaicija);
      }
}