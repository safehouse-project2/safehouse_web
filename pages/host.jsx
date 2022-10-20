import { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Autocomplete from "../components/Autocomplete";
import style from "../styles/Host.module.css";

const Host = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    libraries: ["places"],
  });

  const [postCenter, setPostCenter] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [address, setAddress] = useState("");
  const [guests, setGuests] = useState(0);

  const handleSubmit = (e) => {
    setIsSearched(true);
  };

  useEffect(() => {
    setIsSearched(true);
  }, [postCenter]);

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
      <p className={style.tellus}>Tell us something about your place </p>
      <div className={style.search}>
        <div className={style.inputForm}>
          <div>
            <input
              value={address}
              className={style.input}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
            />
            <input
              value={guests}
              className={style.input}
              onChange={(e) => setGuests(e.target.value)}
              type="number"
              placeholder="Number of Guests"
            />
            <Autocomplete
              className={style.autoComplete}
              setPostCenter={setPostCenter}
              postCenter={postCenter}
              value={address}
            />
            <button
              value={isSearched}
              className={style.button}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: 49.2835, lng: -123.1153 }}
          zoom={5}
        >
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
    </div>
  );
};
export default Host;