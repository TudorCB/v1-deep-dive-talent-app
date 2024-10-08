'use client';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
export default function CompanyMap({ companyData }) {
  const [mapData, setMapData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (companyData && companyData.officeLocations) {
      // Assuming each office location has latitude and longitude properties
      const locationsWithCoords = companyData.officeLocations.map(location => ({
        name: location,
        latitude: 37.7749, // Replace with actual coordinate extraction
        longitude: -122.4194 // Replace with actual coordinate extraction
      }));
      setMapData(locationsWithCoords);
      setLoading(false);
    } else {
      setError(new Error('Invalid company data'));
      setLoading(false);
    }
  }, [companyData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (typeof window !== 'undefined') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', height: '60vh', marginTop: '20px', marginBottom: '20px' }}>
      {/* <MapContainer center={[37.7749, -122.4194]} zoom={12} scrollWheelZoom={true} style={{ height: "100%", width: "100%", border: '1px solid #ccc', borderRadius: '5px' }}>
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
      </MapContainer> */}
      </div>
    );
  } else {
    return null;
  }
}
