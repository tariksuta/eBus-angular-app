import { Vozilo } from './vozilo.model';

export class Sjediste{
    constructor(public id : number,public red : number, public kolona : number,public voziloId : number, public vozilo : Vozilo){

    }
}