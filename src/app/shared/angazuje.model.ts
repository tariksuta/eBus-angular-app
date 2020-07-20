import { Linija } from './linija.model';
import { Vozilo } from './vozilo.model';

export class Angazuje {

   constructor(public id: number,public voziloId : number, public linijaId : number, public datumAngazovanja : Date,
    public datumIsteka : Date, public linija? : Linija, public vozilo? : Vozilo  ){}
}