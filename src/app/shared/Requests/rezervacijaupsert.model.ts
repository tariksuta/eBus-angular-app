export class RezervacijaUpsert{
    constructor( public datumKreiranja : Date, public datumIsteka : Date,public otkazana : Boolean,
        public putnikId: number,public kartaId : number){}
}