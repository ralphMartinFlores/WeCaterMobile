import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';

declare var google: any;

@Component({
  selector: 'app-nearestcatering',
  templateUrl: './nearestcatering.page.html',
  styleUrls: ['./nearestcatering.page.scss'],
})
export class NearestcateringPage {
  
  options : GeolocationOptions;
  currentPos : Geoposition;
  places : Array<any>;
  lists: [];
  @ViewChild('map', {static: true}) mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController,private geolocation : Geolocation) { }

  ionViewDidEnter(){
    if (navigator.onLine) {
        this.getUserPosition();
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'No Internet',
            confirmButtonColor: '#30a0e0',
            text: 'It seems that you are not connected to the internet, you may not be able to see nearby catering services. Please ensure you have stable internet connection.'
        })
    }
  }  

  getUserPosition(){
    this.options = {
    enableHighAccuracy : true
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;  
        console.log(pos);
        this.addMap(pos.coords.latitude,pos.coords.longitude);

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    })
  }

  addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
    center: latLng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.getRestaurants(latLng).then((results : Array<any>)=>{
        this.places = results;
        for(let i = 0 ;i < results.length ; i++)
        {
            this.createMarker(results[i]);
            console.log(results[i].name)
        }
    },(status)=>console.log(status));

    this.addMarker();

}

addMarker(){

  let marker = new google.maps.Marker({
  map: this.map,
  animation: google.maps.Animation.DROP,
  position: this.map.getCenter()
  });

  let content = "<p>This is your current position !</p>";          
  let infoWindow = new google.maps.InfoWindow({
  content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
  });

}

getRestaurants(latLng)
{
    var service = new google.maps.places.PlacesService(this.map);
    let request = {
        location : latLng,
        radius : 8047,
        keyword: ['catering'], 
    };
    return new Promise((resolve,reject)=>{
        service.nearbySearch(request,function(results,status){
            if(status === google.maps.places.PlacesServiceStatus.OK)
            {
                resolve(results);    
            }else
            {
                reject(status);
            }

        }); 
    });

}

createMarker(place)
{
    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: place.geometry.location
    });   
}


}