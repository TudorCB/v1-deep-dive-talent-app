'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [51.505, -0.09]

export default function LeafletMap() {
    if (typeof window !== 'undefined') {
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
    } else {        
        return null     
    }
}
