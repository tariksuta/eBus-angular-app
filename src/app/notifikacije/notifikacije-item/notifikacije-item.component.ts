import { Component, OnInit, Input } from '@angular/core';
import { Notfikacije } from 'src/app/shared/notifikacije.model';

@Component({
  selector: 'app-notifikacije-item',
  templateUrl: './notifikacije-item.component.html',
  styleUrls: ['./notifikacije-item.component.css']
})
export class NotifikacijeItemComponent implements OnInit {

  @Input() notifikacija: Notfikacije;
  @Input() index : number;
  constructor() { }

  ngOnInit(): void {
  }

}
