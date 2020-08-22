import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** importamos los componetes de nuestra aplicasion al archivo de rutas */
import { AbautComponent } from './components/abaut/abaut.component';
import { ProjectComponent } from './components/project/project.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';
import { ErroComponent } from './components/erro/erro.component';


/** construimos nuestro arreglo de rutas de los componetes  */
const routes: Routes = [
  {path:'', component: AbautComponent},
  {path:'Sobre-mi', component: AbautComponent},
  {path:'Proyectos', component: ProjectComponent},
  {path:'Crear-proyecto', component: CreateComponent},
  {path:'Contacto', component: ContactComponent},
  {path:'Detalles/:id',component:DetailComponent},
  {path:'**', component: ErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
