import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Karta } from '../shared/karta.model';

import { environment} from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({providedIn : 'root'})
export class KartaService{
    constructor(private http: HttpClient){}

    private listaKarata: Karta[]=[];

    karteSub = new Subject<Karta[]>();

    getKartaById(id : number){

        return this.http.get<Karta>(`${environment.apiUrl}/Karta/` + id);
    }

    getKarte(){
        return this.http.get<Karta[]>(`${environment.apiUrl}/Karta`).pipe(
            map( karte => { return karte})
        );

        

    }

    setKarte(karte : Karta[]){
        this.listaKarata = karte;

        this.karteSub.next(this.listaKarata);
    }

    getAllKarte(){
        return this.listaKarata;
    }
}