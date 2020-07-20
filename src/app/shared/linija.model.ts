import { Grad } from './grad.model';

export class Linija{
    constructor(public id: number,public naziv: string,public polazisteId : number,public odredisteId: number, public korisnikId: number
        ,public odrediste? : Grad, public polaziste? : Grad){}
}