import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { MapService } from '../../services/map.service';
import { MapLayerService } from '../../services/map-layer.service';
import { * as dawaAutocomplete } from 'dawa-autocomplete2';
import { OlFactory } from 'src/app/model/olFactory';
import { Point } from 'ol/geom/Point';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css']
})
export class AddressSearchComponent implements OnInit, AfterViewInit {
  @ViewChild('address') addressElement: ElementRef;

  constructor(
    private mapService: MapService,
    private mapLayerService: MapLayerService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    dawaAutocomplete.dawaAutocomplete(this.addressElement.nativeElement, {
      select: (item) => {
        const point = OlFactory.createPoint([item.data.x, item.data.y])
            .transform('EPSG:4326', 'EPSG:25832') as Point;
      }
    });
  }
}
