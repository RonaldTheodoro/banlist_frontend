import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BanlistComponent } from './banlist/banlist.component'


const routes: Routes = [
  {
    path: 'banlist',
    component: BanlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
