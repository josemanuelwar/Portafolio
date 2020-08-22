import { Component, OnInit } from '@angular/core';
import { Proyect } from '../../Model/Proyect';
import { ProyectService } from '../../services/proyect.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProyectService]
})
export class DetailComponent implements OnInit {

  public url:string;
  public proyect:Proyect;
  constructor(
    private _proyectservice:ProyectService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.url=Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
  		let id = params.id;
      this.getProject(id);
  	});
  }

  getProject(id){
  	this._proyectservice.getProjec(id).subscribe(
  		response => {
  			this.proyect = response.project;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

}
