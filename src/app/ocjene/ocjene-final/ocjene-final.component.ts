import { Component, OnInit, Input } from '@angular/core';
import { Kompanija } from 'src/app/shared/kompanija.model';
//import { OcjenaService } from '../ocjena.service';
import { Ocjena } from 'src/app/shared/ocjena.model';
import { Observable } from 'rxjs';

import { OcjenaService} from '../../_services/ocjena.service';
import { PutnikService } from '../../_services/putnik.service';


@Component({
  selector: 'app-ocjene-final',
  templateUrl: './ocjene-final.component.html',
  styleUrls: ['./ocjene-final.component.css']
})
export class OcjeneFinalComponent implements OnInit {

  @Input() kompanija : Kompanija;

  listaOcjena: Ocjena[]=[];
  brojPutnika : number = 0;

   maxOcjena : number = 5;
   prosjekOcjena : number = 0;

  constructor(private ocjeneService : OcjenaService, private putnikService : PutnikService) {
   
  }

  ngOnInit() {
    
    
    this.getPutnici();
    this.getOcjene();
    
  }

    getOcjene(){

      this.ocjeneService.getOcjene().subscribe(

      ocjene =>{

        this.listaOcjena = ocjene as Ocjena[];
        this.izracunaProsjecnuOcjenu();
      }
    );
  }

  getPutnici(){

    this.putnikService.getPutnici().subscribe(

      putnici =>{
          this.brojPutnika = putnici.length;

          
      }
    );
  }

  izracunaProsjecnuOcjenu(){

   
    var saberi = 0;
    this.listaOcjena.forEach(ocjena => {
      if(ocjena.kompanijaId == this.kompanija.id){
        saberi+= ocjena.ocjenaUsluge;
      }
    });

      this.prosjekOcjena = (saberi/this.brojPutnika)*10;
  }

  

}
