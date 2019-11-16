import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './componentes/home/home.component';
import { GiiraComponent } from './componentes/giira/giira.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path:'giira',component:GiiraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
