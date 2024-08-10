
import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import React from 'react';
import 'ol/ol.css';


import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import { fromLonLat } from 'ol/proj';


export default function MapComponent() {
    const mapRef = useRef(null);
  
    useEffect(() => {
      if (mapRef.current) return;
  
      // Define the coordinates for the pin (longitude, latitude)
      const coordinates = [-0.1276, 51.5074]; // Example: London
  
      // Convert coordinates from lon/lat to the map's projection (Web Mercator)
      const pinLocation = fromLonLat(coordinates);
  
      // Create a feature for the pin
      const pinFeature = new Feature({
        geometry: new Point(pinLocation),
      });
  
      // Define a style for the pin
      const pinStyle = new Style({
        image: new Icon({
          src: 'https://cdn.icon-icons.com/icons2/1808/PNG/512/map-pin_115251.png', // URL to the pin icon
          scale: 0.05, // Scale the icon if necessary
        }),
      });
      pinFeature.setStyle(pinStyle);
  
      // Create a vector source and layer to hold the pin
      const vectorSource = new VectorSource({
        features: [pinFeature],
      });
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });
  
      // Initialize the map
      mapRef.current = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer, // Add the pin layer to the map
        ],
        view: new View({
          center: pinLocation,
          zoom: 10, // Adjust the zoom level to your preference
        }),
      });
  
      document.getElementById('zoom-out').onclick = function () {
        const view = mapRef.current.getView();
        const zoom = view.getZoom();
        view.setZoom(zoom - 1);
      };
  
      document.getElementById('zoom-in').onclick = function () {
        const view = mapRef.current.getView();
        const zoom = view.getZoom();
        view.setZoom(zoom + 1);
      };
    }, []);
  
    return (
      <div>
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
        <button id="zoom-out">Zoom out</button>
        <button id="zoom-in">Zoom in</button>
      </div>
    );
  }
  