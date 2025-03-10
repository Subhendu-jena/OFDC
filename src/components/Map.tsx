import { useMemo } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = ({ width = '100%', height = '400px' }) => {
  const containerStyle = {
    width,
    height,
  };

  const center = {
    lat: 20.9517,
    lng: 85.0985,
  };

  const mapElement = useMemo(() => {
    return (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9} />
    );
  }, []);
  const apiKey =import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      {mapElement}
    </LoadScript>
  );
};

export default MapComponent;
