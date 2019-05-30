/// <reference types="@types/googlemaps" />
import { ElementRef, NgZone, OnInit, ViewChild, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { AccountService } from '../providers/account.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild("search")
  public searchElementRef: ElementRef;
  public searchControl: FormControl;
  private person: any = {};
  private zoom: number = 15;

  constructor(private provider: AccountService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {    
  }

  async ngOnInit() {
    this.searchControl = new FormControl();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.person.lat = place.geometry.location.lat();
          this.person.lng = place.geometry.location.lng();
          this.person.address = this.searchElementRef.nativeElement.value;
          this.zoom = 15;
        });
      });
    });
    
    this.person = await this.provider.getAccount();
    console.log('person', this.person);
    this.searchElementRef.nativeElement.value = this.person.address || '';

    if(!this.person.lat || !this.person.lng)
      navigator.geolocation.getCurrentPosition( pos => {
        this.person.lng = +pos.coords.longitude;
        this.person.lat = +pos.coords.latitude;
      });
  }

  mapClick(event){
    this.person.lng = event.coords.lng;
    this.person.lat = event.coords.lat;
    this.person.address = this.searchElementRef.nativeElement.value;
    console.log(event, this.person)
  }
  savePerson(person){
    console.log('save person', person);
    this.provider.updateAccount(person)
    .then(() => M.toast({ html: 'Endereço salvo com sucesso!' }));
  }
}
