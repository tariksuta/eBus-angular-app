import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kompanija } from '../shared/kompanija.model';

import { environment } from '../../environments/environment';

@Injectable({providedIn : 'root'})
export class KompanijaService{

        constructor(private http : HttpClient){}

        getKompanijaById(id : number){
            return this.http.get<Kompanija>(`${environment.apiUrl}/Kompanija/`+ id);
        }

        getKompanije(){
            return this.http.get<Kompanija[]>(`${environment.apiUrl}/Kompanija`);

        }
}