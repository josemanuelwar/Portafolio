import { Component, OnInit } from '@angular/core';
import { Proyect } from '../../Model/Proyect';
import { ProyectService } from '../../services/proyect.service';
import { Global } from '../../services/global';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers:[ProyectService]
})
export class ProjectComponent implements OnInit {

  public proyecto :Proyect[];
  public url:string;
  constructor(
    private _proyectsetvis:ProyectService
  ) { 
    this.url=Global.url;
  }

  getproyect(){
    this._proyectsetvis.getProject().subscribe(
      response => {
        this.proyecto=response.project;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  ngOnInit(): void {
    this.getproyect();
  }

}
