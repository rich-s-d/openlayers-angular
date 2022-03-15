import { Injectable } from '@angular/core';
import Map from 'ol/Map';
import { OlFactory } from '../model/olFactory';
import { Projection } from 'ol/proj/Projection';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public projection: Projection;
  public map: Map;

  constructor() {
    OlFactory.registerProjection();
   }


  public initMap() {
    
    this.projection = OlFactory.getProjection();
    this.map = new Map({
      view: new View({
        center: [600000, 6200000],
        zoom: 3,
        projection: this.projection
      }),
      layers: [
        new TileLayer({
          source: new OSM({
            projection: this.projection
          }),
        }),
      ]
    });
  }
}


