import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vozilo } from '../shared/vozilo.model';

import { environment} from '../../environments/environment';


@Injectable({providedIn : 'root'})
export class VoziloService {
    constructor( private http : HttpClient){}

    getVoziloById(id : number){
        return this.http.get<Vozilo>(`${environment.apiUrl}/Vozilo/`+ id);

    }
}