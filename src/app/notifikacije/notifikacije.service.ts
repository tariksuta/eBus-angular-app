
import { Notfikacije } from '../shared/notifikacije.model';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs/operators';
import { Novosti } from '../shared/novosti.model';

// THIS SERVICE IS NOT IN USE
export class NotfikacijeService implements OnInit{

    constructor(private http: HttpClient ){}
    notifikacije : Notfikacije[]=[];

    ngOnInit(){

         this.http.get<Notfikacije[]>('http://localhost:5000/api/Notifikacije').subscribe(

            notifs =>{
                this.notifikacije = notifs;
            }
        );
    }

    getNotifikacije(){
        return this.http.get<Notfikacije[]>('http://localhost:61134/api/Notifikacije');
    }

    getNotifikacijeById(id: number){
        return this.http.get<Notfikacije>('http://localhost:61134/api/Notifikacije/'+ id);
    }

    getNovostiById(id: number){

        return this.http.get<Novosti>('http://localhost:61134/api/Novosti/'+ id);
    }

    

    
}