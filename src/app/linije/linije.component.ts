import { Component, OnInit } from '@angular/core';

//import { LinijeService } from './linije.service'; 

import { LinijeService} from '../_services/linije.service';
import { GradService }from '../_services/gradovi.service';
import { KartaService }from '../_services/karta.service';
import { CijenaService} from '../_services/cijena.service';
import { AngazmanService} from '../_services/angazman.service';



import{ Linija }from '../shared/linija.model';
import { Grad }from '../shared/grad.model';
import { Angazuje } from '../shared/angazuje.model';
import { LinijaPretraga } from '../shared/linijapretraga.model';
import { Kompanija } from '../shared/kompanija.model';
import { Cijena} from '../shared/cijena.model';
import { Karta} from '../shared/karta.model';
import { Vozilo } from '../shared/vozilo.model';
import { AuthenticationService } from '../auth/_services';

@Component({
  selector: 'app-linije',
  templateUrl: './linije.component.html',
  styleUrls: ['./linije.component.css']
})
export class LinijeComponent implements OnInit {

  constructor(private linijeService: LinijeService, private authService : AuthenticationService,
    private gradService : GradService, private kartaService : KartaService,
    private cijenaService : CijenaService, private angazmaniService : AngazmanService) { }

  linije : Linija[]=[];
  privremeneLinije : Linija[]=[];
  gradovi : Grad[]=[]; 
  cijene : Cijena[]=[];
  
  isTable : boolean = false;

  linijaPretrage : LinijaPretraga;
  isIzabran : boolean = false;
  

  angazuje: Angazuje[]=[];
  nazivK : string;
  linijeZaPretragu : LinijaPretraga[]=[];
  privremenalinijeZaPretragu : LinijaPretraga[]=[];
  nazivPolazista : string;
  nazivOdredista : string;

  poPolazistu : boolean = false;
  poOdredistu : boolean = false;

  datumPretage : Date; 
  listaKarata : Karta[]=[];
  vozilo : Vozilo;

  listaGradova : Grad[]=[];

  prijavljen : Boolean = false;

  ngOnInit(): void {

  this.authService.user.subscribe(

    user =>{
      !user ? this.prijavljen = false : this.prijavljen = true;
    }
  );

    this.gradService.getGradovi().subscribe(

      gradovi =>{
        this.gradovi = gradovi;
        this.listaGradova = gradovi;
      }
    );

    this.kartaService.getKarte().subscribe(

      karte =>{
        this.listaKarata = karte;
      }
    );

    
    this.cijenaService.getCijene().subscribe(

      lista =>{
        this.cijene = lista;
      }
    );

    this.linijeService.getLinije().subscribe(

      linije =>{
        this.privremeneLinije = linije;
      }
    );

    this.angazmaniService.getAngazmani().subscribe(
              
      lista =>{
        this.angazuje = lista;
      }
    );
  }

 

  prebaciPretragu(linija : LinijaPretraga){
    this.isIzabran = true;
    this.linijaPretrage = linija;
  }

  onMoveToSearchOdrediste(naziv : string){
      this.nazivOdredista = naziv;
  }

  onMoveToSearchPolaziste(naziv : string ){
    this.nazivPolazista = naziv;
  }

  onKeyOdrediste(event : any){
    if(event.target.value != ''){
      this.poOdredistu = true;

      this.pretraziGradove(event.target.value);
      
    }else{
      this.poOdredistu = false;
    }
  }

  onKeyPolaziste(event : any){
    if(event.target.value != ''){
      this.poPolazistu = true;

      this.pretraziGradove(event.target.value);
      
    }else{
      this.poPolazistu = false;
    }
  }

  zamjeniGradove(){

    var temp = this.nazivPolazista;

    this.nazivPolazista = this.nazivOdredista;
    this.nazivOdredista =temp;
  }
 
  pretraziGradove(naziv : string){

   
    var noviGradovi : Grad[]=[];
    this.gradovi =[];
  
    this.listaGradova.forEach(grad => {
     
     if( grad.naziv.startsWith(naziv))
     {
    noviGradovi.push(grad);
     }

     this.gradovi = noviGradovi;
   });

  }

  onClose(event : boolean){
    
    this.isIzabran = event;
  }


 brojac : number = 0;

  prikaziLinije(){
  
      this.brojac = 0;
    this.isTable = true;
    this.listaKarataSaDatumom = [];
    this.pretraziPoDatumu();
    

    this.linijeZaPretragu = [];
    this.privremenalinijeZaPretragu = [];

    // this.angazuje.forEach(element => {


      this.privremeneLinije.forEach(linija => {
        if(linija.odrediste.naziv === this.nazivOdredista && linija.polaziste.naziv === this.nazivPolazista){

          // if(element.linijaId == linija.id && element.datumAngazovanja <= this.datumPretage && element.datumIsteka >= this.datumPretage ){

          

        

         

          this.listaKarataSaDatumom.forEach(k => {

            if(linija.id == k.angazuje.linijaId){
        

              var c = 0;
              this.cijene.forEach(cijena => {
                if(cijena.kompanijaId == k.sjediste.vozilo.kompanijaId && cijena.linijaId == linija.id){
                    c = cijena.iznos;
                }
              });

             
              
          
            let dodajel = new LinijaPretraga(linija.polaziste.naziv,linija.odrediste.naziv,k.sjediste.vozilo.kompanija.naziv,c,k.vrijemePolaska,k.vrijemeDolaska,k.sjediste.vozilo,this.datumPretage,linija.id);
           
             // this.privremenalinijeZaPretragu.push(dodajel);
          
             var specialBrojac = 0;
             this.privremenalinijeZaPretragu.forEach(lin => {
               if(lin.vrijemePolaska == dodajel.vrijemePolaska && lin.kompanija == dodajel.kompanija){
                  specialBrojac++;
               }
             });

             if(this.brojac > 0 && specialBrojac == 0){
               this.privremenalinijeZaPretragu.push(dodajel);
             }


            if(this.brojac == 0){
              this.privremenalinijeZaPretragu.push(dodajel);
              this.brojac++;
            }

            }


            
          });


         
          this.linijeZaPretragu = this.privremenalinijeZaPretragu;
            
          
      
          
            
        }
       
        // }
     
    });

   
    // });

   
 

}



kartaSaDatumom : Karta;
listaKarataSaDatumom : Karta[]=[];

pretraziPoDatumu(){
  var datum1 = new Date(this.datumPretage);
  this.listaKarata.forEach(karta => {

    
    var datum2 = new Date(karta.datumIzdavanja); 
    if(datum1.getDay() == datum2.getDay() && datum1.getMonth() == datum2.getMonth()){

      this.kartaSaDatumom = karta;
      this.listaKarataSaDatumom.push(karta);

      
    }
    
  });
}


}
