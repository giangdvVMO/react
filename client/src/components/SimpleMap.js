// import React from "react";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap() {
//     const defaultProps = {
//         center: {
//             lat: 10.99835602,
//             lng: 77.01502627
//         },
//         zoom: 11
//     };

//     return (
//         // Important! Always set the container height explicitly
//         <div style={{ height: '500px', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: "" }}
//                 defaultCenter={defaultProps.center}
//                 defaultZoom={defaultProps.zoom}
//             >
//                 <AnyReactComponent
//                     lat={59.955413}
//                     lng={30.337844}
//                     text="My Marker"
//                 />
//             </GoogleMapReact>
//         </div>
//     );
// }

import React from "react";
// import "./styles.css";

import GoogleMapReact from "google-map-react";
import MyMarker from "./Mymaker";

// implementation of this function is needed for codesandbox example to work
// you can remove it otherwise
const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
        // return distance between the marker and mouse pointer
        return Math.sqrt(
            (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
        );
    }
};

const points = [
    { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
    { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
    { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
];

export default function SimpleMap() {
    return (
        <div >
            ;
            <GoogleMapReact
                bootstrapURLKeys={{
                    // remove the key if you want to fork

                    language: "en",
                    region: "US"
                }}
                defaultCenter={{ lat: 51.506, lng: -0.169 }}
                defaultZoom={15}
                distanceToMouse={distanceToMouse}
            >
                {points.map(({ lat, lng, id, title }) => {
                    return (
                        <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
                    );
                })}
            </GoogleMapReact>
        </div>
    );
}
