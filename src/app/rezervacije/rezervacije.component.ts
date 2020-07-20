import { Component, OnInit } from '@angular/core';

//import { RezervacijeService } from './rezervacije.service';
import { AuthenticationService } from '../auth/_services';
import { Rezervacije } from '../shared/rezervacije.model';
import { Putnik } from '../shared/putnik.model'; 

import { RezervacijeService} from '../_services/rezervacije.service';

@Component({
  selector: 'app-rezervacije',
  templateUrl: './rezervacije.component.html',
  styleUrls: ['./rezervacije.component.css']
})
export class RezervacijeComponent implements OnInit {

  rezervacijeAll : Rezervacije[]=[];

  putnikRezervacije : Rezervacije[]=[];

  putnik : Putnik;

  constructor(private rezervacijaService: RezervacijeService,private authService : AuthenticationService) { }

  ngOnInit(): void {

    this.authService.user.subscribe(

      data => { this.putnik = data;}
    );

    this.getAllRezervacije();

    //this.rezervacijeZaPutnika();
  }

  getAllRezervacije(){
      this.rezervacijaService.getRezervacije().subscribe(

        res =>{
          this.rezervacijeAll = res;

          this.rezervacijeZaPutnika();
        }
      );
  }

  rezervacijeZaPutnika(){


    if(this.putnik != null){
      this.rezervacijeAll.forEach(rezervacija => {
        if(rezervacija.putnikId == this.putnik.id){
          this.putnikRezervacije.push(rezervacija);
        }
    });
    }
    
  }

}
