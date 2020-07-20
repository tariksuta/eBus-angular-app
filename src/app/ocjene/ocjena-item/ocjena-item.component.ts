import { Component, OnInit, Input } from '@angular/core';
import { Kompanija } from 'src/app/shared/kompanija.model';
//import { OcjenaService } from '../ocjena.service';

import {OcjenaService} from '../../_services/ocjena.service';

import{OcjenaUpsert} from '../../shared/Requests/ocjenaupsert.model';

@Component({
  selector: 'app-ocjena-item',
  templateUrl: './ocjena-item.component.html',
  styleUrls: ['./ocjena-item.component.css']
})
export class OcjenaItemComponent implements OnInit {

  @Input() kompanija: Kompanija;

  ocjena : number = 1;

  constructor(private ocjenaService : OcjenaService) { }

  ngOnInit(): void {
  }

  ocjeniKompaniju(){

    var ocjena = new OcjenaUpsert(1,this.kompanija.id,this.ocjena," ");

    this.ocjenaService.addOcjena(ocjena).subscribe(
      data =>{
        console.log(data);
      }
    );

    
  }

}
