import { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
  DistanceMatrixService,
} from "@react-google-maps/api";
import axios from "axios";
import Autocomplete from "../components/Autocomplete";

const Location = () => {
  const [center, setCenter] = useState({ lat: 49.2835, lng: -123.1153 });
  const [selected, setSelected] = useState(false);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    libraries: ["places"],
  });
  const [data, setData] = useState([]);
  const [locationInfo, setLocationInfo] = useState(null);
  const [postCenter, setPostCenter] = useState([
    { lat: 49.2835, lng: -123.1153 },
  ]);
  const [isSearched, setIsSearched] = useState(false);
  const nasaApiKey = process.env.NEXT_PUBLIC_NASA_API;
  const [distanceInfo, setDistanceInfo] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://eonet.gsfc.nasa.gov/api/v3/events"
      );
      const { events } = response.data;
      setData(events);
    })();
  }, []);
  useEffect(() => {
    setIsSearched(true);
  }, [postCenter]);

  const fireMarkers = data.map(item => {
    if (item.categories[0].id === "wildfires") {
      return (
        <div key={item.id}>
          <Marker
            key={item.id}
            position={{
              lat: item.geometry[0].coordinates[1],
              lng: item.geometry[0].coordinates[0],
            }}
            icon={{
              url: "/fire_icon.png",
              scaledSize: new window.google.maps.Size(40, 40),
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
  });

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
    console.log("postCenter", postCenter);
    return (
      <div>
        <DistanceMatrixService
          options={{
            destinations: [{ lat: postCenter[0].lat, lng: postCenter[0].lng }],
            origins: [{ lat: center.lat, lng: center.lng }],
            travelMode: "DRIVING",
          }}
          callback={response => {
            console.log("response", response);
            setDistanceInfo(response);
          }}
        />
      </div>
    );
  };
  const callback = (response, status) => {
    if (status == "OK") {
      let origins = response.originAddresses;
      let destinations = response.destinationAddresses;

      for (let i = 0; i < origins.length; i++) {
        let results = response.rows[i].elements;
        for (let j = 0; j < results.length; j++) {
          let element = results[j];
          let distance = element.distance.text;
          let duration = element.duration.text;
          let from = origins[i];
          let to = destinations[j];
        }
      }
    }
  };

  console.log(distanceInfo);

  const containerStyle = {
    width: "1000px",
    height: "800px",
  };

  if (loadError) {
    return "Error loading maps";
  }
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <div>
      <Autocomplete setPostCenter={setPostCenter} postCenter={postCenter} />
      <div>
        <button onClick={findmylocation}>Current Location</button>
      </div>
      <div>
        <button onClick={findNearMe}>Near me</button>
      </div>
      {distanceInfo}
      <DistanceMatrixService
        options={{
          destinations: [{ lat: postCenter[0].lat, lng: postCenter[0].lng }],
          origins: [{ lat: center.lat, lng: center.lng }],
          travelMode: "DRIVING",
        }}
        callback={response => {
          setDistanceInfo(response.rows[0].elements[0].distance.text);
        }}
      />

      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {fireMarkers}
        {isSearched
          ? postCenter.map((item, index) => {
              return (
                <div key={index}>
                  <Marker
                    position={{
                      lat: item.lat,
                      lng: item.lng,
                    }}
                    icon={{
                      url: "/current_location.svg",
                      scaledSize: new window.google.maps.Size(40, 40),
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(15, 15),
                    }}
                  />
                  ;
                </div>
              );
            })
          : null}

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
              url: "/current_location.svg",
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

export default Location;
