import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Linija } from '../shared/linija.model';

@Injectable({providedIn : 'root'})
export class LinijeService{

    constructor(private http : HttpClient){

    }

    getLinije(){

        return this.http.get<Linija[]>('http://localhost:61134/api/Linija');
    }

    getById(id : number){
        return this.http.get<Linija>('http://localhost:61134/api/Linija/'+ id);

    }

}