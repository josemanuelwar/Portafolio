/**cargamos los importasiones para crear un servisio */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Proyect } from '../Model/Proyect';
import { Global } from './global';

@Injectable()

export class ProyectService{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }

    testServis(){
        return "provendo el servisio en agnular"
    }

    saveProject(project: Proyect):Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.post(this.url+'guardar-proyecto',params,{headers});
    }

    getProject():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'listaproyectos',{headers});
    }

    getProjec(id):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'proyecto/'+id,{headers});
    }
}