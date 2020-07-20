import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../auth/_services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLoged = false;
  
  userSub : Subscription;
  constructor(private authService : AuthenticationService) { }

  ngOnInit(): void { 
   this.userSub = this.authService.user.subscribe(

    user => { this.isLoged = !user ? false : true;}
   );
  } 

  logout(){

    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
