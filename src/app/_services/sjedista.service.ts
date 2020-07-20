import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sjediste } from '../shared/sjediste.model';

import { environment} from '../../environments/environment';

@Injectable({providedIn : 'root'})
export class SjedistaService{
    constructor(private http : HttpClient){}

    getSjedista(){

        return this.http.get<Sjediste[]>(`${environment.apiUrl}/Sjediste`);
    }

}