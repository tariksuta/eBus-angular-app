import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grad } from '../shared/grad.model';

@Injectable({providedIn : 'root'})
export class GradService{
    constructor(private http : HttpClient){

    }

    getGradovi(){

        return this.http.get<Grad[]>('http://localhost:61134/api/Grad');
    }

    getGradById(id : number){
        return this.http.get<Grad[]>('http://localhost:61134/api/Grad/'+ id);

    }
}