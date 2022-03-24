 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  titulo: string = "CoderHouse"
  estudiantes: any[]=[
  {id:1, nombre: "Natalia", edad:18, fechaIngreso: new Date(2022,2,27)},
  {id:2,nombre: "Alejandra", edad:26, fechaIngreso: new Date(2022,2,27)},
  {id:3,nombre: "Esperanza", edad:32, fechaIngreso: new Date(2022,1,3)}]

  constructor() { }

  ngOnInit(): void {
  }

}
