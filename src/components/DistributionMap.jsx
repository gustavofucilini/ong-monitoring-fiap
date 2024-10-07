import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const DistributionMap = () => {
  const position = [-23.55052, -46.633308];

  return (
    <div className="w-full h-[500px] md:h-full rounded-lg overflow-hidden">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            ONG São Paulo <br /> Doações: 50kg de comida.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default DistributionMap;
