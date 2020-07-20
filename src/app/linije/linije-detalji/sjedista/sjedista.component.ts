import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Sjediste} from'../../../shared/sjediste.model';
//import { LinijeService } from '../../linije.service';
import { Karta } from 'src/app/shared/karta.model';
import { Rezervacije } from 'src/app/shared/rezervacije.model';
import { LinijaPretraga } from 'src/app/shared/linijapretraga.model';
import { RezervacijaUpsert } from 'src/app/shared/Requests/rezervacijaupsert.model';
import { AuthenticationService } from 'src/app/auth/_services';
import { Putnik } from 'src/app/shared/putnik.model';

import { RezervacijeService} from '../../../_services/rezervacije.service';
import { KartaService } from '../../../_services/karta.service';
import { Subscription } from 'rxjs';
import { LinijeService } from '../../linije.service';

@Component({
  selector: 'app-sjedista',
  templateUrl: './sjedista.component.html',
  styleUrls: ['./sjedista.component.css']
})
export class SjedistaComponent implements OnInit  {

  @Input() sjediste : Sjediste;
  //@Input() listaKarata : Karta[]=[];
  //@Input() listaRezervacija : Rezervacije[]=[];

  listaKarata : Karta[]=[];
  listaRezervacija : Rezervacije[]=[];

  @Input() linija : LinijaPretraga;

  putnik : Putnik;

  subsrciptionKarte : Subscription;

  potvrda : boolean = false;
  constructor(private rezervacijaService :RezervacijeService, private authService : AuthenticationService,
    private kartaService : KartaService,private linijaService : LinijeService) { 
    
  }

  ngOnInit(): void {

   this.authService.user.subscribe(

    data =>{
      this.putnik = data;
    }
   );

    // this.kartaService.getKarte().subscribe(

    //   karte =>{
    //     this.listaKarata = karte;
    //   }
    // );

   

    this.listaKarata = this.kartaService.getAllKarte();
    this.listaRezervacija = this.rezervacijaService.getAllRezervacije();

    // this.linijeService.getRezervacije().subscribe(

    //   rezervacije => {
    //     this.listaRezervacija = rezervacije;
    //   }
    // );

   
    this.provjeriSjedista();
    
    
  }

   
 

  provjeriSjedista(){

  
    var datum2 = new Date(this.linija.datumPretrage);
    this.potvrda = false;
    this.listaRezervacija.forEach(rezervacija => {

      var datum1 = new Date(rezervacija.karta.datumIzdavanja);

      this.listaKarata.forEach(karta => {

      
       
        
        if(rezervacija.kartaId == karta.id && this.sjediste.id == karta.sjedisteId && !rezervacija.otkazana && datum1.getDate() == datum2.getDate() ){
            this.potvrda = true;
            return;
        }
      });
      
    });

  }

  rezervisiKartu(){

      var datumP = new Date(this.linija.datumPretrage);
    this.listaKarata.forEach(karta => {
      var datum = new Date(karta.datumIzdavanja);
      var datumKr = new Date(karta.datumIzdavanja);
      if(karta.sjedisteId == this.sjediste.id && datumP.getDate() == datumKr.getDate()){
       
        var datumIs = new Date(karta.datumIzdavanja);
        datumIs.setDate(datumIs.getDate() + 1);
        var rez = new RezervacijaUpsert(datumKr,datumIs,false,this.putnik.id,karta.id);

        this.rezervacijaService.addRezervacija(rez).subscribe(
          data =>{
            console.log(data);
          }
        );

        return;
      }
    });
  }

 

}
