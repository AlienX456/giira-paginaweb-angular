import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './componentes/home/home.component';
import { GiiraComponent } from './componentes/giira/giira.component';
import { MultimediaComponent } from './componentes/multimedia/multimedia.component'


const routes: Routes = [
{path: '', component: HomeComponent},
{path:'giira',component:GiiraComponent},
{path: 'multimedia',component:MultimediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
