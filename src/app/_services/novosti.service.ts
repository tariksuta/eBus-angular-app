import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Novosti } from '../shared/novosti.model';

import { environment} from '../../environments/environment';

@Injectable({providedIn : 'root'})
export class NovostiService{
    constructor(private http : HttpClient){}

    getNovostiById(id: number){

        return this.http.get<Novosti>(`${environment.apiUrl}/Novosti/`+ id);
    }
}