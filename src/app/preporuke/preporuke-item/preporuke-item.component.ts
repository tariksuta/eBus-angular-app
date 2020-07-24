import { Component, OnInit, Input } from '@angular/core';
import { LinijaPodaci } from 'src/app/shared/linijapodaci.model';

@Component({
  selector: 'app-preporuke-item',
  templateUrl: './preporuke-item.component.html',
  styleUrls: ['./preporuke-item.component.css']
})
export class PreporukeItemComponent implements OnInit {

  @Input() preporuka : LinijaPodaci;
  constructor() { }

  ngOnInit(): void {
  }

}
