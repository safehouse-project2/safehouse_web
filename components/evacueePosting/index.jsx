import React from "react";
import { useState, useEffect } from "react";
import Autocomplete from "../Autocomplete";
import axios from "axios";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
  DistanceMatrixService,
} from "@react-google-maps/api";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const EvacueePosting = ({ onSubmit }) => {
  const [data, setData] = useState([]);
  const [locationInfo, setLocationInfo] = useState(null);
  const [state, setState] = useState({ address: "" });
  const [postCenter, setPostCenter] = useState([]);
  const [people, setPeople] = useState([
    {
      id: "",
      name: "",
      mark: "",
      description: "",
      address: "",
      number: 4,
    },
  ]);
  const nasaApiKey = process.env.NEXT_PUBLIC_NASA_API;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    libraries: ["places"],
  });
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
  const submitHandler = e => {
    e.preventDefault();
    onSubmit({ address: people.address, number: people.number });
  };
  const handleChange = address => {
    setState({ address });
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>
        console.log("Success", setPostCenter([latLng, ...postCenter]))
      )
      .catch(error => console.error("Error", error));
  };
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
      <form onSubmit={submitHandler}>
        <input
          value={people.number}
          onChange={event =>
            setPeople({ ...people, number: event.target.value })
          }
          type="number"
          placeholder="How many people?"
        />

        <PlacesAutocomplete
          value={state.address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  console.log(suggestion);
                  setPeople({ ...people, address: suggestion.description });
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      key={suggestion.description}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <button type="submit">Submit</button>
      </form>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 49.2835, lng: -123.1153 }}
        zoom={5}
      >
        {fireMarkers ? fireMarkers : null}
        {postCenter.map((item, index) => (
          <div key={index}>
            <Marker
              key={item.lat}
              position={{ lat: item.lat, lng: item.lng }}
              icon={{
                url: "/current_location.svg",
                scaledSize: new window.google.maps.Size(40, 40),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
            />
          </div>
        ))}
      </GoogleMap>
    </div>
  );
};
export default EvacueePosting;
