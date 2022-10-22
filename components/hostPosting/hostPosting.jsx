import { useState, useRef } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";
import Autocomplete from "../Autocomplete";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const Host = ({ onSubmit }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    libraries: ["places"],
  });

  const [postCenter, setPostCenter] = useState([]);
  const [isPosted, setIsPosted] = useState(false);
  const [address, setAddress] = useState("");
  const [guests, setGuests] = useState(null);
  const [state, setState] = useState({ address: "" });
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);
  const [description, setDescription] = useState("");
  const [data, setData] = useState(null);
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    setIsPosted(true);
    setData({
      address: state.address,
      guests,
      file,
      description,
    });
    onSubmit({ address, guests, file, description });
    router.push("/Dashboard");
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
      <p>Tell us something about your place </p>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
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
            </div>
            <input
              value={address}
              onChange={e => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
            />
            <input
              value={guests}
              onChange={e => setGuests(e.target.value)}
              type="number"
              placeholder="Number of Guests"
            />
            <input
              type="file"
              ref={fileRef}
              accept="image/*"
              onChange={e => setFile(e.target.files[0])}
              placeholder="Upload Image"
            />
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              type="text"
              placeholder="Description"
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 49.2835, lng: -123.1153 }}
        zoom={5}
      >
        {home.map((item, index) => (
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
export default Host;
