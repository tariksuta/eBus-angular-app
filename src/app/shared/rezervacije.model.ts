import { Karta } from './karta.model';
import { Putnik } from './putnik.model';

export class Rezervacije{
    constructor(public id: number, public datumKreiranja : Date, public datumIsteka : Date,public otkazana : Boolean,
        public putnikId: number,public kartaId : number,public qrcode : BinaryType[],public karta : Karta,public putnik : Putnik){}
}