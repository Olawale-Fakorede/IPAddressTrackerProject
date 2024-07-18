
// import React from 'react'
// import { useState, useEffect } from 'react'
// import images from './images/pattern-bg-desktop.png'
// import Search from './Search'
// import Maparea from './Maparea'
// import Displays from './Displays'

// const Bg = () => {

//   // const [data, setData] = useState([]);

//   const [IPAddress, setIPAddress] = useState("");
//   const [location, setLocation] = useState("");
//   const [timezone, setTimezone] = useState("");
//   const [ISP, setISP] = useState("");
//   const [coordinates, setCoordinates] = useState({});

//   const fetchLocation = (ipAddress = "") => {
//     fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=YOUR_API_KEY&ipAddress=${ipAddress}`)
//      .then((res) => res.json())
//      .then((data) => {
//       console.log(data);
//        setIPAddress(data.ip);
//        setLocation(`${data.location.city}, ${data.location.country}, ${data.location.postalCode}`);
//        setTimezone(`UTC ${data.location.timezone}`);
//        setISP(`${data.isp}`);
//        setCoordinates({ lat: data.location.lat, lng: data.location.lng});
//      });
    
//   };
  
//   useEffect(() => {
//     fetchLocation();
//   }, []);

//   // useEffect(() => {
//   //   {
//   //     fetch('https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_API_KEY&ipAddress=8.8.8.8')
//   //     .then(res => res.json())
//   //     .then(json => console.log(json))
//   //  }
//   // }, [])
  


//   return (
//     <div className='w-full h-52'
//     style={{backgroundImage: `url(${images})`}}>
        
//         <h1 className='text-serif text-2xl text-white relative top-4 font-bold text-center '>
//           IP Address Tracker
//         </h1>

//       <Search/>
//       {/* <Displays ipAddress={IPAddress} location={location}  timezone={timezone} isp={ISP}/> */}
//       <Maparea/>
//     </div>
//   )
// }

// export default Bg


import React, { useState, useEffect } from 'react';
import images from './images/pattern-bg-desktop.png';
import Search from './Search';
import Displays from './Displays';
import Map from './Map';

const Bg = () => {
  const [IPAddress, setIPAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [ISP, setISP] = useState("");
  const [coordinates, setCoordinates] = useState({});

  const fetchLocation = (ipAddress = "") => {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Qe1PIeK2vlw5r8QNqyMLAxkg3Z7ga&ipAddress=${ipAddress}`)
      .then((res) => res.json())
      .then((data) => {
        setIPAddress(data.ip);
        setLocation(`${data.location.city}, ${data.location.country}, ${data.location.postalCode}`);
        setTimezone(`UTC ${data.location.timezone}`);
        setISP(data.isp);
        setCoordinates({ lat: data.location.lat, lng: data.location.lng });
      });
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className='w-full h-60' style={{ backgroundImage: `url(${images})` }}>
      <h1 className='text-serif text-2xl text-white relative top-4 font-bold text-center'>
        IP Address Tracker
      </h1>
      <Search setIPAddress={setIPAddress} fetchLocation={fetchLocation}/>
      <Displays ipAddress={IPAddress} location={location} timezone={timezone} isp={ISP} />
      <br/><br/><br/><br/><br/><br/>
      <Map coordinates={coordinates}/>
    </div>
  );
};

export default Bg;
