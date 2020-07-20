import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Putnik } from '../shared/putnik.model';

import { environment} from '../../environments/environment';

@Injectable({providedIn : 'root'})
export class PutnikService{
    constructor(private http : HttpClient){}

    getPutnici():Observable<Putnik[]>{
        return this.http.get<Putnik[]>(`${environment.apiUrl}/Putnik`);

    }

    getPutnikById(id : number){
        return this.http.get<Putnik>(`${environment.apiUrl}/Putnik/`+id);

    }
}