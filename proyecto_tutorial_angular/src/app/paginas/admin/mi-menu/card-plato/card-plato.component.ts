import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plato } from 'src/modelos/plato';

@Component({
  selector: 'app-card-plato',
  templateUrl: './card-plato.component.html',
  styleUrls: ['./card-plato.component.scss']
})
export class CardPlatoComponent implements OnInit {

  @Input() plato!: Plato;
  @Output() clickEliminar = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

}
