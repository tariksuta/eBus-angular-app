import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ocjena } from '../shared/ocjena.model';

import { environment} from '../../environments/environment';
import { OcjenaUpsert } from '../shared/Requests/ocjenaupsert.model';

@Injectable({providedIn : 'root'})
export class OcjenaService{
    constructor(private http : HttpClient){}

    private listaOcjena : Ocjena[]=[];

  

    getOcjene(): Observable<Ocjena[]>{
        return this.http.get<Ocjena[]>(`${environment.apiUrl}/Ocjena`);

    }

    addOcjena(ocjena : OcjenaUpsert){
        return this.http.post(`${environment.apiUrl}/Ocjena`, ocjena);
    }
}