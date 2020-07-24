import { Time } from '@angular/common';
import { Vozilo } from './vozilo.model';

export class LinijaPodaci{
    constructor(public polazisteNaziv : string, public odredisteNaziv : string, public kompanija : string ,public cijena : number,
        public vrijemePolaska : Time,public voziloId : number ,public datumPretrage : Date,public angazujeId : number){}
}