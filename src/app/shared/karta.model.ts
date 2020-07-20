import { Time } from '@angular/common';
import { Angazuje } from './angazuje.model';
import { Sjediste } from './sjediste.model';

export class Karta{
    constructor(public id: number, public brojKarte : string,public datumIzdavanja : Date,public sjedisteId : number,
        public angazujeId : number, public vrijemePolaska : Time, public vrijemeDolaska : Time, public angazuje? : Angazuje,
        public sjediste? : Sjediste){}
}