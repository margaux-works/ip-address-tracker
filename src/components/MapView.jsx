import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import customPin from '../assets/icon-location.svg';
import L from 'leaflet';

const customIcon = L.icon({
  iconUrl: customPin,
  iconSize: [38, 50],
  iconAnchor: [19, 50],
  popupAnchor: [0, -45],
});

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function MapView({ coordinates }) {
  const position = [coordinates.lat, coordinates.lng];
  const defaultPosition = [37.7749, -122.4194];
  console.log('Map coordinates:', coordinates);

  return (
    <MapContainer
      center={coordinates.lat && coordinates.lng ? position : defaultPosition}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <ChangeView center={position} zoom={13} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customIcon}></Marker>
    </MapContainer>
  );
}

MapView.propTypes = {
  data: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
  }),
};
