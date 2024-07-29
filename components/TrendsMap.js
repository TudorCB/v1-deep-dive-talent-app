'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function TrendsMap({ trendsData }) {
  const [mapData, setMapData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (trendsData && trendsData.data) {
      // Assuming trendsData.data contains locations with latitude and longitude properties
      const locationsWithCoords = trendsData.data.tech_clusters.map(cluster => ({
        name: cluster.name,
        latitude: cluster.latitude, // Using actual coordinates from data
        longitude: cluster.longitude // Using actual coordinates from data
      }));
      setMapData(locationsWithCoords);
      setLoading(false);
    } else {
      setError(new Error('Invalid trends data'));
      setLoading(false);
    }
  }, [trendsData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', height: '60vh', marginTop: '20px', marginBottom: '20px' }}>
    <MapContainer center={[37.7749, -122.4194]} zoom={12} scrollWheelZoom={true} style={{ height: "100%", width: "100%", border: '1px solid #ccc', borderRadius: '5px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {mapData.map((location, index) => (
        <Marker key={index} position={[location.latitude, location.longitude]}>
          <Popup>
            <div>
              <h3>{location.name}</h3>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
}
