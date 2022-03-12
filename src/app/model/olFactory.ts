import { Map, View } from 'ol';
import { ViewOptions } from 'ol/View';
import { MapOptions } from 'ol/PluggableMap';

import olCollection from 'ol/Collection';
import Feature from 'ol/Feature';

import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import BaseLayer from 'ol/layer/Base';
import ImageWMS, { Options as ImageWMSOptions } from 'ol/source/ImageWMS';
import TileWMS, { Options as TileWMSOptions } from 'ol/source/TileWMS';
import GroupLayer, { Options as GroupLayerOptions } from 'ol/layer/Group';
import { VectorImage as VectorImageLayer } from 'ol/layer';
import WMTSSource, { Options as WmtsOptions } from 'ol/source/WMTS';
import WMTSTileGrid, { Options as TileGridOptions } from 'ol/tilegrid/WMTS';
import VectorLayer from 'ol/layer/Vector';
import VectorSource, { Options as VectorSourceOptions } from 'ol/source/Vector';
import Projection, { Options as ProjectionOptions } from 'ol/proj/Projection';
import ProjectionLike from 'ol/proj/Projection';
import Proj4 from 'proj4';
import { get as getProjection } from 'ol/proj';
import { register } from 'ol/proj/proj4';
import * as olExtent from 'ol/extent';
import { getTopLeft } from 'ol/extent';

import Style, { Options as StyleOptions } from 'ol/style/Style';
import StyleCircle, { Options as CircleStyleOptions } from 'ol/style/Circle';
import StyleFill, { Options as FillStyleOptions } from 'ol/style/Fill';
import StyleStroke, { Options as StrokeStyleOptions } from 'ol/style/Stroke';
import StyleText, { Options as TextStyleOptions } from 'ol/style/Text';

import Geometry from 'ol/geom/Geometry';
import Point from 'ol/geom/Point';
import Polygon, { fromCircle, fromExtent } from 'ol/geom/Polygon';
import LineString from 'ol/geom/LineString';
import Circle from 'ol/geom/Circle';

import olOverlay, { Options as OverlayOptions } from 'ol/Overlay';

import olInteractionExtent, { Options as ExtentOptions } from 'ol/interaction/Extent';
import olInteractionSnap, { Options as SnapOptions } from 'ol/interaction/Snap';
import olInteractionDraw, { Options as DrawOptions } from 'ol/interaction/Draw';
import olInteractionTranslate, { Options as TranslateOptions } from 'ol/interaction/Translate';
import olInteractionModify, { Options as ModifyOptions } from 'ol/interaction/Modify';
import olInteractionSelect, { Options as SelectOptions } from 'ol/interaction/Select';

import olMousePosition, { Options as MousePositionOptions } from 'ol/control/MousePosition';
import olScaleline, { Options as ScaleLineOptions, Units } from 'ol/control/ScaleLine';

import olFormatGeoJSON, { Options as GeoJSONOptions } from 'ol/format/GeoJSON';
import olFormatWKT, { Options as WKTOptions } from 'ol/format/WKT';
import olFormatGML from 'ol/format/GML2';

import { all, bbox, tile } from 'ol/loadingstrategy';
import TileSource from 'ol/source/Tile';
import ImageSource from 'ol/source/Image';

/**
 * Factory class to centralize OL imports and object creation
 */
export class OlFactory {
    /**
     * Creates a map
     * @param opts
     * @returns Map
     */
    public static createMap(opts: MapOptions): Map {
        return new Map(opts);
    }

    public static createView(options: ViewOptions): View {
        return new View(options);
    }

    public static createScalelineControl(options: ScaleLineOptions): olScaleline {
        return new olScaleline(options);
    }

    public static createMousePositioncontrol(options: MousePositionOptions): olMousePosition {
        return new olMousePosition(options);
    }

    public static createGroupLayer(options: GroupLayerOptions): GroupLayer {
        return new GroupLayer(options);
    }

    public static createWMTSTileGrid(options: TileGridOptions): WMTSTileGrid {
        return new WMTSTileGrid(options);
    }

    public static createWMTSSource(options: WmtsOptions): WMTSSource {
        return new WMTSSource(options);
    }

    public static createWMSSource(options: TileWMSOptions): TileWMS {
        return new TileWMS(options);
    }

    public static createTileLayer(options): TileLayer<TileSource> {
        return new TileLayer(options);
    }


    public static createImageLayer(options): ImageLayer<ImageSource> {
        return new ImageLayer(options);
    }

    public static createSingleImageSource(options: ImageWMSOptions): ImageWMS {
        return new ImageWMS(options);
    }

    public static createVectorSource(options?: VectorSourceOptions | undefined): VectorSource<Geometry> {
        return new VectorSource(options);
    }

    public static createVectorLayer(options?: any | undefined): VectorLayer<VectorSource<Geometry>> {
        return new VectorLayer(options);
    }

    public static createVectorImageLayer(options?: any | undefined): VectorImageLayer<VectorSource<Geometry>> {
        return new VectorImageLayer(options);
    }

    public static createStyle(options?: StyleOptions): Style {
        return new Style(options);
    }

    public static createStyleCircle(options: CircleStyleOptions): StyleCircle {
        return new StyleCircle(options);
    }

    public static createStyleFill(options: FillStyleOptions): StyleFill {
        return new StyleFill(options);
    }

    public static createStyleStroke(options: StrokeStyleOptions): StyleStroke {
        return new StyleStroke(options);
    }

    public static createStyleText(options: TextStyleOptions): StyleText {
        return new StyleText(options);
    }

    public static createFeatureCollection(feats: Feature<Geometry>[]): olCollection<Feature<Geometry>> {
        const col: olCollection<Feature<Geometry>> = new olCollection<Feature<Geometry>>(feats);
        return col;
    }

    public static createLayerCollection(layers: BaseLayer[]): olCollection<BaseLayer> {
        return new olCollection(layers);
    }

    public static extendExtent(extent: olExtent.Extent, other: olExtent.Extent): olExtent.Extent {
        return olExtent.extend(extent, other) as olExtent.Extent;
    }

    public static createPoint(coord: number[]): Point {
        return new Point(coord);
    }

    public static createGeomPolygonFromCircle(circle: Circle): Polygon {
        return fromCircle(circle) as Polygon;
    }

    public static createPolygonFromBounds(bound: olExtent.Extent) {
        return new Polygon(bound);
    }

    public static createOverlay(options: OverlayOptions): olOverlay {
        return new olOverlay(options);
    }

    public static createDrawinteraction(options: DrawOptions): olInteractionDraw {
        return new olInteractionDraw(options);
    }

    public static createInteractionExtent(options: ExtentOptions): olInteractionExtent {
        return new olInteractionExtent(options);
    }

    public static createInteractionTranslate(options: TranslateOptions): olInteractionTranslate {
        return new olInteractionTranslate(options);
    }

    public static createInteractionSnap(options: SnapOptions): olInteractionSnap {
        return new olInteractionSnap(options);
    }

    public static createInteractionModify(options: ModifyOptions): olInteractionModify {
        return new olInteractionModify(options);
    }

    public static createInteractionSelect(options: SelectOptions): olInteractionSelect {
        return new olInteractionSelect(options);
    }

    public static createFeature(geomOrProps?: Geometry | { [key: string]: any }): Feature<Geometry> {
        return new Feature(geomOrProps);
    }

    public static createFormatGeoJSON(options?: GeoJSONOptions | undefined): olFormatGeoJSON {
        return new olFormatGeoJSON(options);
    }
    public static createFormatWKT(options?: WKTOptions | undefined): olFormatWKT {
        return new olFormatWKT(options);
    }

    public static createProjection(options: ProjectionOptions): Projection {
        return new Projection(options);
    }

    public static registerProjection() {
        Proj4.defs('EPSG:25832', '+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
        Proj4.defs('urn:ogc:def:crs:EPSG::25832', Proj4.defs('EPSG:25832'));
        register(Proj4);
    }

    public static getProjection(): Projection {
        const projection = getProjection('EPSG:25832');
        projection.setExtent([120000, 5900000, 1000000, 6500000]);
        return projection;
    }

    public static getProjectionLike(): ProjectionLike {
        return new ProjectionLike({
            extent: [120000, 5900000, 1000000, 6500000],
            code: 'EPGS:25832',
            units: Units.METRIC
        });
    }

    public static getExtentTopLeft(projection: Projection) {
        return getTopLeft(projection.getExtent());
    }
}
