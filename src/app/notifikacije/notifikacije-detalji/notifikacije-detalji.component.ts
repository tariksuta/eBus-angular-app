import { Component, OnInit } from '@angular/core';
//import { NotfikacijeService } from '../notifikacije.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Novosti } from 'src/app/shared/novosti.model';
import { Notfikacije } from 'src/app/shared/notifikacije.model';
import { exhaustMap } from 'rxjs/operators';

import { NotifikacijeService} from '../../_services/notifikacije.service';
import { NovostiService} from '../../_services/novosti.service';

@Component({
  selector: 'app-notifikacije-detalji',
  templateUrl: './notifikacije-detalji.component.html',
  styleUrls: ['./notifikacije-detalji.component.css']
})
export class NotifikacijeDetaljiComponent implements OnInit {

  id: number;
  novost: Novosti;
  notif : Notfikacije;
  nId : number;
  constructor(private notifikacijeService: NotifikacijeService, private route : ActivatedRoute,
    private novostiService : NovostiService) { }

  ngOnInit(): void {

    this.route.params
        .subscribe(
          (params : Params ) =>{
            this.id = +params['id'];

           

            this.notifikacijeService.getNotifikacijeById(this.id+1).subscribe(

              data => {
                this.nId = +data['novostId'];

                this.novostiService.getNovostiById(this.nId).subscribe(

                  data => {
                    this.novost = data;
                  }
                 );
              }
            );

           
          }
        );
  }

}
