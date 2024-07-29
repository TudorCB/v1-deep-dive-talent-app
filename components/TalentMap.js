'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function TalentMap() {
  const [talentData, setTalentData] = useState([]);

  useEffect(() => {
    axios.get('/api/talent/San Francisco/React Developers')
      .then(response => setTalentData(response.data))
      .catch(error => {
        console.error('Error fetching talent data:', error);
        console.error('Full error:', error.message, error.stack);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '60vh' }}>
    <MapContainer center={[37.7749, -122.4194]} zoom={12} scrollWheelZoom={true} style={{ height: "100%", width: "80vw", border: '1px solid #ccc', borderRadius: '5px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {talentData.map((talent, index) => (
        <Marker key={index} position={[talent.latitude, talent.longitude]}>
          <Popup>
            <div>
              <h3>{talent.name}</h3>
              <p>{talent.skillset}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
}
