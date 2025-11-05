import React, { useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Mapa() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: "https://demotiles.maplibre.org/style.json",
      center: [-46.6333, -23.5505], // São Paulo
      zoom: 10,
    });

    // Adiciona zoom e rotação
    map.addControl(new maplibregl.NavigationControl(), "top-right");

    // Marcador simples
    new maplibregl.Marker()
      .setLngLat([-46.6333, -23.5505])
      .setPopup(new maplibregl.Popup().setHTML("<h4>São Paulo - SP</h4><p>Centro Cultural</p>"))
      .addTo(map);

    return () => map.remove(); // Limpa ao desmontar
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "500px",
        borderRadius: "12px",
        overflow: "hidden",
        marginTop: "30px"
      }}
    ></div>
  );
}
