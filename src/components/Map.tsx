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

  return (
    <LoadScript googleMapsApiKey="AIzaSyDIAvDghqd2fo0U3vI4K4mE6UBTLPcEF80">
      {mapElement}
    </LoadScript>
  );
};

export default MapComponent;
