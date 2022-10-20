import { useState, useEffect } from "react";
import axios from "axios";
import Autocomplete from "../components/Autocomplete";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
  DistanceMatrixService,
} from "@react-google-maps/api";

const Location = () => {
  const [data, setData] = useState([]);
  const [locationInfo, setLocationInfo] = useState(null);
  const nasaApiKey = process.env.NEXT_PUBLIC_NASA_API;
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://eonet.gsfc.nasa.gov/api/v3/events"
      );
      const { events } = response.data;
      setData(events);
    })();
  }, []);
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

  return (
    <div>
      <Autocomplete
        fireMarkers={fireMarkers}
        locationInfo={locationInfo}
        setLocationInfo={setLocationInfo}
      />
    </div>
  );
};

export default Location;
