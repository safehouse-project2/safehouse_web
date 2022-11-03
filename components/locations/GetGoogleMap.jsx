import { useState, useEffect } from "react";
import axios from "axios";
import Autocomplete from "../Autocomplete";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
  DistanceMatrixService,
} from "@react-google-maps/api";
import Navbar from "../D3Components/Navbar/Navbar";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GetHostHome from "./GetHostHome";
const GetGoogleMap = ({
  hostInfo = {
    lat: "",
    lng: "",
  },
  isClicked = false,
  isBothClicked = false,
}) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const nasaApiKey = process.env.NEXT_PUBLIC_NASA_API;
  const [state, setState] = useState({ address: "" });
  const [center, setCenter] = useState({ lat: 49.2835, lng: -123.1153 });
  const [selected, setSelected] = useState(false);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    libraries: ["places"],
  });

  const [postCenter, setPostCenter] = useState([{ lat: "", lng: "" }]);
  const [isSearched, setIsSearched] = useState(false);
  const [distanceInfo, setDistanceInfo] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsSearched(true);
  }, [postCenter]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://eonet.gsfc.nasa.gov/api/v3/events"
      );
      const { events } = response.data;
      setData(events);
    })();
  }, []);

  const onSubmitHandler = e => {
    e.preventDefault();
  };

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
  const findmylocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          animation: google.maps.Animation.DROP,
        });
        setSelected(true);
      });
    } else {
      alert("Sorry, your browser does not support HTML5 geolocation.");
    }
  };
  const findNearMe = () => {
    return (
      <div>
        <DistanceMatrixService
          options={{
            destinations: [{ lat: postCenter[0].lat, lng: postCenter[0].lng }],
            origins: [{ lat: center.lat, lng: center.lng }],
            travelMode: "DRIVING",
          }}
          callback={response => {
            setDistanceInfo(response);
          }}
        />
      </div>
    );
  };

  const fireMarkers = data
    .map(item => {
      if (
        (item.categories[0].id === "wildfires" && !isClicked) ||
        (item.categories[0].id === "wildfires" && isBothClicked)
      ) {
        return (
          <div key={item.id}>
            <Marker
              key={item.id}
              position={{
                lat: parseInt(item.geometry[0].coordinates[1]),
                lng: parseInt(item.geometry[0].coordinates[0]),
              }}
              icon={{
                url: "/Fire.svg",
                scaledSize: new window.google.maps.Size(30, 40),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
              onClick={() => {
                setLocationInfo({
                  id: item.id,
                  title: item.title,
                  lat: item.geometry[0].coordinates[1],
                  lng: item.geometry[0].coordinates[0],
                });
              }}
            />
          </div>
        );
      }
      return null;
    })
    .filter(item => item !== null);

  const containerStyle = {
    width: "700",
    height: "500px",
  };

  if (loadError) {
    return "Error loading maps";
  }
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <div>
      <Navbar />
      <form onSubmit={onSubmitHandler}>
        {/* <div> */}
        {/* <Autocomplete postCenter={postCenter} setPostCenter={setPostCenter} /> */}
        <div>
          {/* <Button
            txt="Current Location"
            fontSize="16px"
            endIcon={<LocationOnIcon />}
            onBtnClick={findmylocation}
          /> */}
          {/* button class is border black */}
          <button
            className="dropd flex bg-[#fff] text-[#8C8C8C] gap-20 w-[234px] rounded-md justify-start"
            onClick={findmylocation}
          >
            Current Location
          </button>
          {/* </div> */}
          {/* <Input placeholder="Search Places" label="" /> */}
          {/* <div>
          <button onClick={findNearMe}>Near me</button>
        </div> */}
          {/* {distanceInfo} */}
          {/* <DistanceMatrixService
            options={{
              destinations: [
                { lat: postCenter[0].lat, lng: postCenter[0].lng },
              ],
              origins: [{ lat: center.lat, lng: center.lng }],
              travelMode: "DRIVING",
            }}
            callback={response => {
              setDistanceInfo(response.rows[0].elements[0].distance.text);
            }}
          /> */}
        </div>
        {/* <button
          onClick={() => {
            router.push("/Dashboard");
          }}
          type="submit"
        >
          Submit
        </button> */}
      </form>

      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {fireMarkers ? fireMarkers : null}
        {isSearched
          ? postCenter.map((item, index) => {
              return (
                <div key={index}>
                  <Marker
                    position={{
                      lat: parseInt(item.lat),
                      lng: parseInt(item.lng),
                    }}
                    icon={{
                      url: "/current_location.svg",
                      scaledSize: new window.google.maps.Size(40, 40),
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(15, 15),
                    }}
                  />
                </div>
              );
            })
          : null}
        <GetHostHome
          hostInfo={hostInfo}
          isClicked={isClicked}
          isBothClicked={isBothClicked}
        />

        {locationInfo && (
          <InfoWindow
            position={{ lat: locationInfo.lat, lng: locationInfo.lng }}
            onCloseClick={() => {
              setLocationInfo(null);
            }}
          >
            <div>
              <h2>{locationInfo.title}</h2>
            </div>
          </InfoWindow>
        )}

        {selected ? (
          <Marker
            key={center.id}
            position={{ lat: center.lat, lng: center.lng }}
            icon={{
              url: (
                <Button
                  txt="Current Location"
                  fontSize="16px"
                  endIcon={<LocationOnIcon />}
                  onBtnClick={findmylocation}
                />
              ),
              scaledSize: new window.google.maps.Size(40, 40),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
          />
        ) : null}
      </GoogleMap>
    </div>
  );
};
export default GetGoogleMap;
