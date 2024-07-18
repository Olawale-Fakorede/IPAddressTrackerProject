import React from 'react'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

import markerIcon from "../components/images/icon-location.svg";
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Map = ({ coordinates }) => {
    const marker = new L.icon({ iconUrl: markerIcon });
    let state = {
        keyMAP: Math.random(),
    };
  return (
    <MapContainer 
    key={state.keyMAP} 
    center={[coordinates.lat, coordinates.lng]}
    zoom={18}
    className='w-full h-screen z-0'>

        {/* <TileLayer attribution='Google Maps'  */}
        {/* url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}'> */}
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
            <Marker position={[coordinates.lat, coordinates.lng]} icon={marker}>

            </Marker>
        {/* </TileLayer> */}

    </MapContainer>
  )
}

export default Map



// import React from 'react'
// import 'leaflet/dist/leaflet.css';
// import L from "leaflet";

// import markerIcon from "../components/images/icon-location.svg";
// import { MapContainer, Marker, TileLayer } from 'react-leaflet';

// const Map = ({ coordinates }) => {
//   // No state needed, remove the state definition

//   return (
//     <MapContainer 
//       center={[coordinates.lat, coordinates.lng]}
//       zoom={18}
//       className='w-full h-auto z-0'
//       // Add a unique key based on coordinates for better performance
//       key={`${coordinates.lat}-${coordinates.lng}`}
//     >

//       <TileLayer attribution='&copy' 
//         url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'>
//         <Marker position={[coordinates.lat, coordinates.lng]} icon={markerIcon}>

//         </Marker>
//       </TileLayer>

//     </MapContainer>
//   )
// }

// export default Map
