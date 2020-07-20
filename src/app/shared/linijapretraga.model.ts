
import { Time } from '@angular/common';
import { Vozilo } from './vozilo.model';

export class LinijaPretraga {

    constructor(public polaziste : string, public odrediste : string, public kompanija : string ,public cijena : number,
        public vrijemePolaska : Time,public vrijemeDolaska : Time,public vozilo : Vozilo,public datumPretrage : Date,public linijaId : number){}
}
