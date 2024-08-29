import React from "react";
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { GraduationCap } from "lucide-react";
import LogoMap from "@/assets/images/logoMap.png";

export default function LocationPage() {

  const position = [27.617225501485724, 85.53628499165596];
  const fillBlueOptions = { fillColor: 'blue' }
  const iconCustom = new Icon({
    iconUrl: LogoMap,
    iconSize: [32,34]
  });
  
  return (
    <div className="flex flex-col px-10 overflow-hidden gap-8 items-center justify-center min-h-screen bg-slate-100">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl font-bold text-[#171A23]">GET DIRECTIONS</h1>
        <div className="w-full rounded-full bg-[#14C58F] h-2"></div>
      </div>
      <div className="w-full">
        <MapContainer
          center={[27.617225501485724, 85.53628499165596]}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker 
            position={position}
            icon={iconCustom}
          >
            <Popup>
              <div className="flex items-center gap-2">
              <GraduationCap className="text-red-600 gray"/><h1 className="font-bold">Kathmandu University</h1>
              </div>
              <h2 className="text-center font-semibold text-xs">IT MEET 24' VENUE </h2>
            </Popup>
          </Marker>
          <CircleMarker 
            center={position} 
            pathOptions={fillBlueOptions} 
            radius={40} />
        </MapContainer>
      </div>
    </div>
  );
}
