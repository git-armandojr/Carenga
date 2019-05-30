import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecureComponent } from './secure.component';
import { RideComponent } from './ride/ride.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [{ 
    path: '',
    component: SecureComponent,
    children: [
      { path: 'rides', component: RideComponent },
      { path: 'map', component: MapComponent }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
