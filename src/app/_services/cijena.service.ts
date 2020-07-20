import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cijena } from '../shared/cijena.model';

import { environment} from '../../environments/environment';

@Injectable({providedIn : 'root'})
export class CijenaService{
    constructor(private http : HttpClient){}

    getCijene(){
        return this.http.get<Cijena[]>(`${environment.apiUrl}/Cijena`);
    }
}