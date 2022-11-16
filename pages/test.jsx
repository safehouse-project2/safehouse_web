import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useState, useEffect } from "react";
import Script from "next/script";
// import Carousel from "../components/D3Components/Carousel/Carousel";
import Popup from "../components/D3Components/PopupTest/Popup";

export default function Test() {
  // const [state, setState] = useState({ address: "" });
  // const [postCenter, setPostCenter] = useState([
  //   { lat: 49.2835, lng: -123.1153 },
  // ]);

  // const handleChange = address => {
  //   setState({ address });
  // };
  // const handleSelect = address => {
  //   geocodeByAddress(address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng =>
  //       console.log("Success", setPostCenter([latLng, ...postCenter]))
  //     )
  //     .catch(error => console.error("Error", error));
  // };
  return (
    <>
      <Popup />
    </>




  );
}









































    // <div>
    //   <Script
    //     strategy="beforeInteractive"
    //     src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&libraries=places`}
    //   ></Script>
    //   <PlacesAutocomplete
    //     value={state.address}
    //     onChange={handleChange}
    //     onSelect={handleSelect}
    //   >
    //     {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
    //       <div>
    //         <input
    //           {...getInputProps({
    //             placeholder: "Search Places ...",
    //             className: "location-search-input",
    //           })}
    //         />
    //         <div className="autocomplete-dropdown-container">
    //           {loading && <div>Loading...</div>}
    //           {suggestions.map(suggestion => {
    //             const className = suggestion.active
    //               ? "suggestion-item--active"
    //               : "suggestion-item";
    //             const style = suggestion.active
    //               ? { backgroundColor: "#fafafa", cursor: "pointer" }
    //               : { backgroundColor: "#ffffff", cursor: "pointer" };
    //             return (
    //               <div
    //                 key={suggestion.description}
    //                 {...getSuggestionItemProps(suggestion, {
    //                   className,
    //                   style,
    //                 })}
    //               >
    //                 <span>{suggestion.description}</span>
    //               </div>
    //             );
    //           })}
    //         </div>
    //       </div>
    //     )}
    //   </PlacesAutocomplete>
    // </div>


// import { useState, useEffect } from "react";
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from "react-places-autocomplete";
// import {
//   GoogleMap,
//   Marker,
//   InfoWindow,
//   useLoadScript,
//   DistanceMatrixService,
// } from "@react-google-maps/api";
// import { useRouter } from "next/router";

// export default function Autocomplete({
//   onSubmit,
//   fireMarkers,
//   locationInfo,
//   setLocationInfo,
// }) {
//   const [state, setState] = useState({ address: "" });
//   const [center, setCenter] = useState({ lat: 49.2835, lng: -123.1153 });
//   const [selected, setSelected] = useState(false);

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
//     libraries: ["places"],
//   });

//   const [postCenter, setPostCenter] = useState([
//     { lat: 49.2835, lng: -123.1153 },
//   ]);
//   const [isSearched, setIsSearched] = useState(false);
//   const [distanceInfo, setDistanceInfo] = useState(null);
//   const [people, setPeople] = useState([
//     {
//       id: "",
//       name: "",
//       mark: "",
//       description: "",
//       address: "",
//       number: 4,
//     },
//   ]);
//   const router = useRouter();

//   useEffect(() => {
//     setIsSearched(true);
//   }, [postCenter]);

//   const onSubmitHandler = e => {
//     e.preventDefault();
//     onSubmit({
//       address: people.address,
//       distance: distanceInfo,
//       center: postCenter,
//     });
//   };

//   const handleChange = address => {
//     setState({ address });
//   };

//   const handleSelect = address => {
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng =>
//         console.log("Success", setPostCenter([latLng, ...postCenter]))
//       )
//       .catch(error => console.error("Error", error));
//   };
//   const findmylocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         setCenter({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//           animation: google.maps.Animation.DROP,
//         });
//         setSelected(true);
//       });
//     } else {
//       alert("Sorry, your browser does not support HTML5 geolocation.");
//     }
//   };
//   const findNearMe = () => {
//     console.log("postCenter", postCenter);
//     return (
//       <div>
//         <DistanceMatrixService
//           options={{
//             destinations: [{ lat: postCenter[0].lat, lng: postCenter[0].lng }],
//             origins: [{ lat: center.lat, lng: center.lng }],
//             travelMode: "DRIVING",
//           }}
//           callback={response => {
//             console.log("response", response);
//             setDistanceInfo(response);
//           }}
//         />
//       </div>
//     );
//   };

//   const containerStyle = {
//     width: "1000px",
//     height: "800px",
//   };

//   if (loadError) {
//     return "Error loading maps";
//   }
//   if (!isLoaded) return <div>Loading Maps</div>;

//   return (
//     <div>
//       <form onSubmit={onSubmitHandler}>
//         <div>
//           {/* <PlacesAutocomplete
//             value={state.address}
//             onChange={handleChange}
//             onSelect={handleSelect}
//           >
//             {({
//               getInputProps,
//               suggestions,
//               getSuggestionItemProps,
//               loading,
//             }) => (
//               <div>
//                 <input
//                   {...getInputProps({
//                     placeholder: "Search Places ...",
//                     className: "location-search-input",
//                   })}
//                 />
//                 <div className="autocomplete-dropdown-container">
//                   {loading && <div>Loading...</div>}
//                   {suggestions.map(suggestion => {
//                     // setPeople({ ...people, address: suggestion.description });
//                     const className = suggestion.active
//                       ? "suggestion-item--active"
//                       : "suggestion-item";
//                     const style = suggestion.active
//                       ? { backgroundColor: "#fafafa", cursor: "pointer" }
//                       : { backgroundColor: "#ffffff", cursor: "pointer" };
//                     return (
//                       <div
//                         key={suggestion.description}
//                         {...getSuggestionItemProps(suggestion, {
//                           className,
//                           style,
//                         })}
//                       >
//                         <span>{suggestion.description}</span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}
//           </PlacesAutocomplete> */}

//           <div>
//             <button onClick={findmylocation}>Current Location</button>
//           </div>
//           {/* <div>
//         <button onClick={findNearMe}>Near me</button>
//       </div> */}
//           {distanceInfo}
//           <DistanceMatrixService
//             options={{
//               destinations: [
//                 { lat: postCenter[0].lat, lng: postCenter[0].lng },
//               ],
//               origins: [{ lat: center.lat, lng: center.lng }],
//               travelMode: "DRIVING",
//             }}
//             callback={response => {
//               setDistanceInfo(response.rows[0].elements[0].distance.text);
//             }}
//           />
//         </div>
//         <button
//           onClick={() => {
//             router.push("/Dashboard");
//           }}
//           type="submit"
//         >
//           Submit
//         </button>
//       </form>
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
//         {fireMarkers ? fireMarkers : null}
//         {isSearched
//           ? postCenter.map((item, index) => {
//               return (
//                 <div key={index}>
//                   <Marker
//                     position={{
//                       lat: item.lat,
//                       lng: item.lng,
//                     }}
//                     icon={{
//                       url: "/current_location.svg",
//                       scaledSize: new window.google.maps.Size(40, 40),
//                       origin: new window.google.maps.Point(0, 0),
//                       anchor: new window.google.maps.Point(15, 15),
//                     }}
//                   />
//                 </div>
//               );
//             })
//           : null}

//         {locationInfo && (
//           <InfoWindow
//             position={{ lat: locationInfo.lat, lng: locationInfo.lng }}
//             onCloseClick={() => {
//               setLocationInfo(null);
//             }}
//           >
//             <div>
//               <h2>{locationInfo.title}</h2>
//             </div>
//           </InfoWindow>
//         )}

//         {selected ? (
//           <Marker
//             key={center.id}
//             position={{ lat: center.lat, lng: center.lng }}
//             icon={{
//               url: "/current_location.svg",
//               scaledSize: new window.google.maps.Size(40, 40),
//               origin: new window.google.maps.Point(0, 0),
//               anchor: new window.google.maps.Point(15, 15),
//             }}
//           />
//         ) : null}
//       </GoogleMap>
//     </div>
//   );
// }


