import React, { useEffect, useRef } from "react";
import "./MapComponents/Map.css";
import Devices from "./MapComponents/Devices";
import Dashboard from "./MapComponents/Dashboard";

import "ol/ol.css";
import { Map as OlMap, View as OlView } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Icon, Style } from "ol/style";
import { fromLonLat } from "ol/proj";

export default function MapContainer() {
    // Renamed from 'Map' to 'MapContainer'
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
                src: "https://cdn.icon-icons.com/icons2/1808/PNG/512/map-pin_115251.png", // URL to the pin icon
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
        mapRef.current = new OlMap({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                vectorLayer, // Add the pin layer to the map
            ],
            view: new OlView({
                center: pinLocation,
                zoom: 10, // Adjust the zoom level to your preference
            }),
        });

        document.getElementById("zoom-out").onclick = function () {
            const view = mapRef.current.getView();
            const zoom = view.getZoom();
            view.setZoom(zoom - 1);
        };

        document.getElementById("zoom-in").onclick = function () {
            const view = mapRef.current.getView();
            const zoom = view.getZoom();
            view.setZoom(zoom + 1);
        };
    }, []);

    return (
        <div className="Map-format">
            <div className="Devices">
                <Devices />
            </div>
            <div className="View">
                <div id="map" className="map"></div>
            </div>

            <Dashboard />
        </div>
    );
}
