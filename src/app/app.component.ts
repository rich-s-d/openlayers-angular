import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import { MapService } from './services/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public map: Map;

  constructor(
    private mapService: MapService) { }


  ngOnInit(): void {
    this.mapService.initMap();
    this.map = this.mapService.map;
  }
}
