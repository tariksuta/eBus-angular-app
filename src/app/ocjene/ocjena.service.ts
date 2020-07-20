import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Request, RequestMethod, Headers, RequestOptions} from '@angular/http';


import { map } from 'rxjs/operators';


import { Kompanija } from '../shared/kompanija.model';
import { Ocjena } from '../shared/ocjena.model';
import { OcjenaUpsert } from '../shared/Requests/ocjenaupsert.model';
import { Observable } from 'rxjs';
import { Putnik } from '../shared/putnik.model';

@Injectable({providedIn : 'root'})
// THIS SERVICE IS NOT IN USE
export class OcjenaService{

    constructor(private http: HttpClient){

    }

    getKompanije(){
        return this.http.get<Kompanija[]>('http://localhost:61134/api/Kompanija');
    }

    getOcjeneAll(): Observable<Ocjena[]>{
        return this.http.get<Ocjena[]>('http://localhost:61134/api/Ocjena');

    }

    getPutnici():Observable<Putnik[]>{
        return this.http.get<Putnik[]>('http://localhost:61134/api/Putnik');

    }

    
    insertOcjena(ocjena : OcjenaUpsert){


        // let result : Observable<OcjenaUpsert>;

        // const headers =   { 'Content-Type': 'application/x-www-form-urlencoded' };
        // const body=JSON.stringify(ocjena);
        
  
                

        // return this.http.post<OcjenaUpsert>('http://localhost:61134/api/Ocjena', body,  {headers : {
            
        //     'Content-Type': 'application/json'
                        
        // }});

        // result = this.http.post<OcjenaUpsert>('http://localhost:61134/api/Ocjena',ocjena);

        // return result;


        //------------------------------------------

        

        var body = JSON.stringify(ocjena);

        var headerOptions = new Headers({'content-type':'application/json'});

        var requestOptions = new RequestOptions({method:RequestMethod.Post,headers:headerOptions});

        return this.http.post('http://localhost:61134/api/Ocjena', ocjena);
        
    }

}