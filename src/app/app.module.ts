import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**agragamos a import para que funciones */
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbautComponent } from './components/abaut/abaut.component';
import { ProjectComponent } from './components/project/project.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErroComponent } from './components/erro/erro.component';
import { DetailComponent } from './components/detail/detail.component';
@NgModule({
  declarations: [
    AppComponent,
    AbautComponent,
    ProjectComponent,
    CreateComponent,
    ContactComponent,
    ErroComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
