import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { RideComponent } from './ride/ride.component';
import { MapComponent } from './map/map.component';
import { AccountService } from './providers/account.service';

@NgModule({
  declarations: [
    SecureComponent,
    MapComponent,
    RideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SecureRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAB21CXNp2ngIlFjp5auD-tT2QAglnX0OM',
      libraries: ["places"]
    })
  ],
  providers: [AccountService]
})
export class SecureModule { }
