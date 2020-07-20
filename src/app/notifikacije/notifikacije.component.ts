import { Component, OnInit } from '@angular/core';
//import { NotfikacijeService } from '../notifikacije/notifikacije.service';
import { Notfikacije } from '../shared/notifikacije.model';

import { NotifikacijeService} from '../_services/notifikacije.service';

@Component({
  selector: 'app-notifikacije',
  templateUrl: './notifikacije.component.html',
  styleUrls: ['./notifikacije.component.css']
})
export class NotifikacijeComponent implements OnInit {

  constructor(private notifikacijeService : NotifikacijeService) { }

  notifikacije : Notfikacije[]=[];

  ngOnInit(): void {

    this.notifikacijeService.getNotifikacije().subscribe(

      data => {
        this.notifikacije = data;
        
      }
    );
  }

}
