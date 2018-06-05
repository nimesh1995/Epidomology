import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {
  @ViewChild("map") mapElement;
  map: any;

  constructor() {

  }
  ngOnInit(){
    this.initMap();
  }
initMap(){

  let coords = new google.maps.LatLng(6.9271,79.8612);
  let mapOptions:google.maps.MapOptions = {
    center : coords,
    zoom : 14,
    mapTypeId:google.maps.MapTypeId.TERRAIN

  }
  this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions)

}

}
