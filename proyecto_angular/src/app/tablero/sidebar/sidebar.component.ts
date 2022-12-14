import { Component, Input, OnInit } from '@angular/core';
import Permiso from 'src/modelos/permiso';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  @Input() opciones: Permiso[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
