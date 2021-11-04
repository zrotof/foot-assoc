import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { JoueursComponent } from './components/joueurs/joueurs.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { DefiComponent } from './components/defi/defi.component';

const routes: Routes = [
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  {path: 'accueil', component : AcceuilComponent},
  {path: 'joueurs', component : JoueursComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'a-propos', component : AboutComponent},
  {path: 'defis', component : DefiComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
