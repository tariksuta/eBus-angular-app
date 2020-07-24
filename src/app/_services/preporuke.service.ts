import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../environments/environment';

import { LinijaPodaci } from '../shared/linijapodaci.model';

@Injectable({providedIn : 'root'})
export class PreporukeService {
    constructor(private http : HttpClient){}

    getPreporuceneDestinacije(id : number){
        
            return this.http.get<LinijaPodaci[]>(`${environment.apiUrl}/Preporuka/`+id);
    
        
    }
    
}