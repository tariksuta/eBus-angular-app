import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/_services';
import { Putnik } from '../shared/putnik.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  putnik : Putnik;

  image : ArrayBuffer;

  constructor(private authService : AuthenticationService) { }

  ngOnInit(): void {

    this.authService.user.subscribe(

      data => {
        this.putnik = data;

        
      }
    );
  }

}
