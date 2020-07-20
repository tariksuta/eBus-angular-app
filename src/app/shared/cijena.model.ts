import { Linija } from './linija.model';
import { Kompanija } from './kompanija.model';

export class Cijena{
    constructor(public id: number,public linijaId : number, public iznos : number,public popust : number, public kompanijaId : number,
        public linija? : Linija,public kompanija? : Kompanija){}
}