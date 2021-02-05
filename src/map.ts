import { Student } from "./student";
import { Internship } from "./internship";

export class Map {

    private map :google.maps.Map;

    constructor(divId: string) {
        this.map = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
          zoom: 10,
          center: {
            lat: 49.246292,
            lng: -123.116226
          }
        });
      }
    
      addPin(pin: Student | Internship): void {
        const marker = new google.maps.Marker({
          map: this.map,
          position: {
            lat: pin.locations.latitude,
            lng: pin.locations.longtitude
          }
        });
    
        if (pin instanceof Student) {
          this.markerMessage(marker, `Student ${pin.firstName} ${pin.lastName} is living here`);
        } else {
          this.markerMessage(marker, `Here is ${pin.internshipName}.`);
        }
      }
    
      private markerMessage(marker: google.maps.Marker, message: string): void {
        const infowindow = new google.maps.InfoWindow({
          content: message,
        });
    
        marker.addListener("click", () => {
          infowindow.open(this.map, marker);
        });
      }
    }
    

