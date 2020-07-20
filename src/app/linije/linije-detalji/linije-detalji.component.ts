import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LinijaPretraga } from 'src/app/shared/linijapretraga.model';
import { Sjediste } from 'src/app/shared/sjediste.model';

//import { LinijeService } from '../linije.service';
import { SjedistaService} from '../../_services/sjedista.service';
import { KartaService } from '../../_services/karta.service';
import { RezervacijeService } from '../../_services/rezervacije.service';


import { Rezervacije } from 'src/app/shared/rezervacije.model';
import { Karta } from 'src/app/shared/karta.model';
import { LinijeService } from '../linije.service';



@Component({
  selector: 'app-linije-detalji',
  templateUrl: './linije-detalji.component.html',
  styleUrls: ['./linije-detalji.component.css']
})
export class LinijeDetaljiComponent implements OnInit {

  @Input() izabranaLinija : LinijaPretraga;
  @Output() exit = new EventEmitter<Boolean>();

  listaSjedista : Sjediste[]=[];
  listaSjedistaZaOdabranoVozilo : Sjediste[]=[];

  close : boolean = true;

  rezervacijaLista : Rezervacije[]=[];
  kartaLista : Karta[]=[];



  constructor(private sjedistaService : SjedistaService, private kartaService : KartaService,
    private rezervacijaService  : RezervacijeService, private linijeService : LinijeService) { }

  ngOnInit(): void {

    this.sjedistaService.getSjedista().subscribe(

      sjedista =>{
        this.listaSjedista = sjedista;
      }
    );

    this.kartaService.getKarte().subscribe(

      karte =>{
        this.kartaLista = karte;
      }
    );
    
    this.rezervacijaService.getRezervacije().subscribe(
      rezervacije =>{
        this.rezervacijaLista = rezervacije;
      }
    );

    this.linijeService.getKarte().subscribe();
    this.linijeService.getRezervacije().subscribe();
    
  }

 
  exitPregled(){
    this.close = false;

    this.exit.emit(this.close);
  }

  getSjedistaByVoziloId(){

    this.listaSjedista.forEach(sjediste => {
        if(sjediste.voziloId == this.izabranaLinija.vozilo.id){
            this.listaSjedistaZaOdabranoVozilo.push(sjediste);
        }
    });
  }


  

}
