import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MAPBOX_TOKEN from "../../utils/mapboxConfig";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./Map.css";

mapboxgl.accessToken = MAPBOX_TOKEN;

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Coordinates for 10 Pepper Street, Cape Town
  const pepperStreetCoords = [18.4198, -33.9221]; // [lng, lat]

  useEffect(() => {
    if (mapContainerRef.current) {
      mapContainerRef.current.innerHTML = ""; // Clear container before rendering
    }

    // Initialize Mapbox
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      projection: "globe",
      zoom: 16,
      center: pepperStreetCoords,
    });

    mapRef.current.scrollZoom.disable();

    mapRef.current.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    mapRef.current.on("style.load", () => {
      mapRef.current.setFog({});
      setMapLoaded(true);

      // Add marker
      new mapboxgl.Marker({ color: "red" })
        .setLngLat(pepperStreetCoords)
        .setPopup(new mapboxgl.Popup().setText("10 Pepper Street, Cape Town"))
        .addTo(mapRef.current);
    });

    return () => mapRef.current.remove();
  }, []);

  return (
    <div className="map-wrap">
      <div className="map map-container" ref={mapContainerRef}></div>
    </div>
  );
};

export default MapComponent;
