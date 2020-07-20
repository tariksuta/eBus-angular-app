import { Kompanija } from './kompanija.model';

export class Vozilo {
    constructor(public id : number ,public proizvodjac : string, public model : string, public registracija : string,
        public brojSjedista : number , public kompanijaId : number, public kompanija? : Kompanija ){}
}