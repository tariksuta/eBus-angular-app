import { Component, OnInit } from '@angular/core';
//import { OcjenaService } from './ocjena.service';
import { Kompanija } from '../shared/kompanija.model';

import { KompanijaService} from '../_services/kompanija.service';

@Component({
  selector: 'app-ocjene',
  templateUrl: './ocjene.component.html',
  styleUrls: ['./ocjene.component.css']
})
export class OcjeneComponent implements OnInit {

  constructor(private kompanijaService : KompanijaService) { }

  listaKompanija : Kompanija[]=[];
 


  ngOnInit(): void {

    this.kompanijaService.getKompanije().subscribe(

      kompanije =>{
        this.listaKompanija = kompanije;
      }
    );

    
  }

  

}
