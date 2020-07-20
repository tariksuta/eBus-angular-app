import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import {Linija} from '../shared/linija.model';
import { Grad}from '../shared/grad.model';
import { Angazuje } from '../shared/angazuje.model';
import { Kompanija } from '../shared/kompanija.model';
import  {Cijena } from '../shared/cijena.model';
import { Karta } from '../shared/karta.model';
import { Vozilo } from '../shared/vozilo.model';
import { Sjediste } from '../shared/sjediste.model';
import { Rezervacije } from '../shared/rezervacije.model';
import { RezervacijaUpsert } from '../shared/Requests/rezervacijaupsert.model';
import { KartaService } from '../_services/karta.service';
import { tap, map } from 'rxjs/operators';
import { RezervacijeService } from '../_services/rezervacije.service';

import{ environment} from '../../environments/environment';



@Injectable({providedIn : 'root'})
export class LinijeService{

    constructor(private http: HttpClient,private kartaService : KartaService,
        private rezervacijaService : RezervacijeService){}
 
    // getLinije(){

    //     return this.http.get<Linija[]>('http://localhost:61134/api/Linija');
    // }


    // getGradovi(){

    //     return this.http.get<Grad[]>('http://localhost:61134/api/Grad');
    // }

    // getAngazmani(){
    //     return this.http.get<Angazuje[]>('http://localhost:61134/api/Angazuje');
    // }

    // getKompanijaById(id : number){
    //     return this.http.get<Kompanija>('http://localhost:61134/api/Kompanija/'+ id);
    // }

    // getCijene(){
    //     return this.http.get<Cijena[]>('http://localhost:61134/api/Cijena');
    // }

    getKarte(){
        return this.http.get<Karta[]>(`${environment.apiUrl}/Karta`).pipe(
            map( karte => {
                return karte;
            }),
            tap( karte => {
                this.kartaService.setKarte(karte);
            })
        );
    }

    // getVoziloById(id : number){
    //     return this.http.get<Vozilo>('http://localhost:61134/api/Vozilo/'+ id);

    // }

    // getSjedista(){

    //     return this.http.get<Sjediste[]>('http://localhost:61134/api/Sjediste');
    // }

    getRezervacije(){
        return this.http.get<Rezervacije[]>(`${environment.apiUrl}/Rezervacija`).pipe(
            map( rezervacije =>{
                return rezervacije;
            }),
            tap( rezervacije =>{
                    this.rezervacijaService.setRezervacije(rezervacije);
            })
        );

    }

    // addRezervacija(rezervacija : RezervacijaUpsert){

    //     return this.http.post<RezervacijaUpsert>('http://localhost:61134/api/Rezervacija',rezervacija);

    // }

}