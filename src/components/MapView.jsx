import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapView({ coordinates }) {
  const position = [coordinates.lat, coordinates.lng];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
        </Popup>
      </Marker>
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
