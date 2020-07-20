export class Putnik{
    constructor(public id: number,public ime: string, public prezime : string, public korisnickoIme : string,public slika : BinaryType[],
        public email : string, public datumRegistracije : Date,public authdata? : string){}
}