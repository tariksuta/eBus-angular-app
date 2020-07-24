import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/_services';
import { PreporukeService } from '../_services/preporuke.service';
import { LinijaPretraga } from '../shared/linijapretraga.model';
import { Putnik } from '../shared/putnik.model';
import { LinijaPodaci } from '../shared/linijapodaci.model';

@Component({
  selector: 'app-preporuke',
  templateUrl: './preporuke.component.html',
  styleUrls: ['./preporuke.component.css']
})
export class PreporukeComponent implements OnInit {

  constructor(private authService : AuthenticationService, private preporukaService : PreporukeService) { }

  linijePreporuke : LinijaPodaci[]=[];
  putnik : Putnik;

  ngOnInit(): void {
    this.authService.user.subscribe(

      data =>{ this.putnik = data;}
    );

    this.dodjeliPreporuke();

  }

  dodjeliPreporuke(){
 
    this.preporukaService.getPreporuceneDestinacije(this.putnik.id).subscribe(

      data =>{ this.linijePreporuke = data;}
    );
  }



}
