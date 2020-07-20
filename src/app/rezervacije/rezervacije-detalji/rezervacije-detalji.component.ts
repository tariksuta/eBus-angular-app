import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
//import { RezervacijeService } from '../rezervacije.service';
import { Rezervacije } from 'src/app/shared/rezervacije.model';
import { RezervacijaUpsert } from 'src/app/shared/Requests/rezervacijaupsert.model';
import { AuthenticationService } from 'src/app/auth/_services';
import { Putnik } from 'src/app/shared/putnik.model';
import { Cijena } from 'src/app/shared/cijena.model';

import {AngazmanService} from '../../_services/angazman.service';
import {KartaService} from '../../_services/karta.service';
import { RezervacijeService} from '../../_services/rezervacije.service';
import { CijenaService } from '../../_services/cijena.service';

import { Angazuje } from 'src/app/shared/angazuje.model';
import { Karta } from 'src/app/shared/karta.model';

@Component({
  selector: 'app-rezervacije-detalji',
  templateUrl: './rezervacije-detalji.component.html',
  styleUrls: ['./rezervacije-detalji.component.css']
})
export class RezervacijeDetaljiComponent implements OnInit {

  id : number;
  rezervacija : Rezervacije;
  qrCode : string='';

  listaCijena : Cijena[]=[];
  cijenaKarte : number=0;
  angazman : Angazuje;
  karta : Karta;

  putnik : Putnik;

  constructor(private route : ActivatedRoute,private rezervacijeService : RezervacijeService,
     private kartaService : KartaService, private cijenaService :  CijenaService) { }

  ngOnInit(): void {

    this.cijenaService.getCijene().subscribe(

      data => {
        this.listaCijena = data;
      }
    );

    this.route.params.subscribe(

      (params : Params)=>{
        this.id  = +params['id'];

        this.rezervacijeService.getRezervacijaById(this.id+1).subscribe(

          data =>{
            this.rezervacija = data;

            this.pronadjiKartu(data.kartaId);
         

           
             this.cijenaKarte = this.prikaziCijenu(data.karta.angazuje.linijaId,data.karta.sjediste.voziloId);
            
              this.qrCode ='Datum kreiranja: '+ data.datumKreiranja +'\n Datum isteka: '+ data.datumIsteka+'\n' ;
               this.qrCode +='Ime i prezime :' + data.putnik.ime+' '+ data.putnik.prezime;
               this.qrCode +='\n Cijena :'+ this.cijenaKarte+ ' KM';
            
          
           

           
            
          }
        );
      }
    );

    
  }

 

  pronadjiKartu(id : number){
    this.kartaService.getKartaById(id).subscribe(
      data => {
        this.karta = data;
      }
    );
  }
 

  prikaziCijenu(linijaID : number, kompanijaId : number): number{

    var iznos = 0;
      this.listaCijena.forEach(cijena => {
        
        if(cijena.kompanijaId == kompanijaId && cijena.linijaId == linijaID){
          iznos = cijena.iznos;
        }
      });

      return iznos;
  }

  otkaziRezervaciju(){
    
    var dat = new RezervacijaUpsert(this.rezervacija.datumKreiranja,
                                    this.rezervacija.datumIsteka,true,
                                    this.rezervacija.putnikId,
                                    this.rezervacija.kartaId);


                this.rezervacijeService.updateRezervacija(this.rezervacija.id,dat).subscribe(
                  data =>{
                    console.log(data);
                  }
                );
  }

}
