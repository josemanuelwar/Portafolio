import { Component, OnInit } from '@angular/core';
import { Proyect } from '../../Model/Proyect';
import { ProyectService } from '../../services/proyect.service';
import { Subirimagen } from '../../services/subirimagen.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProyectService,Subirimagen]
})
export class CreateComponent implements OnInit {

  public title:string;
  public proyect:Proyect;
  public status:string;
  public fileToupload:Array<File>;

  constructor(
    private _projectservice:ProyectService,
    private _subirimagen:Subirimagen
  ) { 
    this.title="Crear Proyecto";
    this.proyect= new Proyect("","","","","","2020","");
  }

  ngOnInit(): void {
  }

  onSubmit(fom){
    console.log(fom)
    this._projectservice.saveProject(this.proyect).subscribe(
      responses =>{
        console.log(responses);
        if(responses.proyecto){
          this.status='success';
          this._subirimagen.makeFileRequest(Global.url+"update-imagen/"+responses.proyecto._id,[],this.fileToupload,'image')
          .then((resul:any)=>{
            console.log(resul);
          });
          fom.reset();
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(file:any){
    console.log(file);
    this.fileToupload =<Array<File>>file.target.files;
  }
}
