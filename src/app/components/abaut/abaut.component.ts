import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abaut',
  templateUrl: './abaut.component.html',
  styleUrls: ['./abaut.component.css']
})
export class AbautComponent implements OnInit {

  public title:string;
  public Carrera:string;
  public falcultad:string;
  public universidad:string;
  public Subtitle:string;
  public email:string;
  public web:string;
  constructor() {
    this.title="Jose Manuel Sanchez Juarez";
    this.Carrera="Ingeniería en ciencias de la computación -pasante";
    this.falcultad="Facultad de ciencias de la computación";
    this.universidad="Benemérita universidad Autónoma de puebla";
    this.Subtitle="Desarrollo web en php, javascript, C#,java";
    this.email="josemanuelwar@hotmail.es";
   }

  ngOnInit(): void {
  }

}
