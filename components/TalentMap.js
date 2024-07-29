'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

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

  if (typeof window !== 'undefined') {
    return (<div>Map</div>
      // <Map center={[37.7749, -122.4194]} zoom={12}>
      //   <TileLayer
      //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      //   />
      //   {talentData.map((talent, index) => (
      //     <Marker key={index} position={[talent.latitude, talent.longitude]}>
      //       <Popup>
      //         <div>
      //           <h3>{talent.name}</h3>
      //           <p>{talent.skillset}</p>
      //         </div>
      //       </Popup>
      //     </Marker>
      //   ))}
      // </Map>
    );
  } else {
    return null;
  }
}