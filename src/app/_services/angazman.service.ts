import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Angazuje } from '../shared/angazuje.model';

@Injectable({providedIn : 'root'})
export class AngazmanService{
    constructor(private http : HttpClient){

    }

    getAngazmani(){
        return this.http.get<Angazuje[]>('http://localhost:61134/api/Angazuje');
    }

    getAngazujeById(id : number){
        return this.http.get<Angazuje>('http://localhost:61134/api/Angazuje/'+id);

    }
}