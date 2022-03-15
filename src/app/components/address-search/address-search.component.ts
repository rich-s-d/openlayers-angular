import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import * as dawaAutocomplete from 'dawa-autocomplete2';
import { OlFactory } from 'src/app/model/olFactory';
import { Point } from 'ol/geom/Point';
import Map from 'ol/Map';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.scss']
})
export class AddressSearchComponent implements OnInit, AfterViewInit {
  @ViewChild('address') addressElement: ElementRef;
  @Input() map: Map;


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    dawaAutocomplete.dawaAutocomplete(this.addressElement.nativeElement, {
      select: (item) => {
        const point = OlFactory.createPoint([item.data.x, item.data.y])
            .transform('EPSG:4326', 'EPSG:25832') as Point;

        this.map.getView().setCenter(point.getExtent());
        this.map.getView().setZoom(13);
      }
    });
  }
}
