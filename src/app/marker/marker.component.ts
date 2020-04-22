import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css']
})
export class MarkerComponent implements OnInit {

  title = 'map';
  positions=[];
  setPosition;
  center= {lat:25.2048 , lng:55.2708};
  lat:any = '25.2048';
  lng:any = '55.2708';
  map
  ngOnInit(){  
  }

  onMapReady(map) {
    this.map = map;
    console.log('map', map);
    console.log('markers', map.markers);  // to get all markers as an array 
  }
  markerPush(){
    this.positions = [];
    if(this.lat !='' && this.lng !=''){
      this.positions.push([this.lat,this.lng]);
      this.center = {lat:this.lat , lng:this.lng};
      var latLng = new google.maps.LatLng(this.lat, this.lng);
      this.map.panTo(latLng)
    }
  }
}
