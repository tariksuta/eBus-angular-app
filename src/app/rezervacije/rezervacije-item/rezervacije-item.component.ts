import { Component, OnInit, Input } from '@angular/core';
import { Rezervacije } from 'src/app/shared/rezervacije.model';

@Component({
  selector: 'app-rezervacije-item',
  templateUrl: './rezervacije-item.component.html',
  styleUrls: ['./rezervacije-item.component.css']
})
export class RezervacijeItemComponent implements OnInit {

  @Input() rezervacija : Rezervacije;
  @Input() index : number;
  constructor() { }

  ngOnInit(): void {
  }

}
