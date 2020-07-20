import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notfikacije } from '../shared/notifikacije.model';

import { environment} from '../../environments/environment';

@Injectable({providedIn : 'root'})
export class NotifikacijeService{
    constructor(private http : HttpClient){}

    getNotifikacije(){
        return this.http.get<Notfikacije[]>(`${environment.apiUrl}/Notifikacije`);
    }

    getNotifikacijeById(id: number){
        return this.http.get<Notfikacije>(`${environment.apiUrl}/Notifikacije/`+id);
    }
}