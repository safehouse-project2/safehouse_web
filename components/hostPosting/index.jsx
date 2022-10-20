import { useState, useRef } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";
import Autocomplete from "../Autocomplete";

const Host = ({ onSubmit }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    libraries: ["places"],
  });

  const [postCenter, setPostCenter] = useState([]);
  const [isPosted, setIsPosted] = useState(false);
  const [address, setAddress] = useState("");
  const [guests, setGuests] = useState(null);
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);
  const [description, setDescription] = useState("");
  const [data, setData] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosted(true);
    setData({
      address,
      guests,
      file,
      description,
    });
    onSubmit({ address, guests, file, description });
    router.push("/Dashboard");
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
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
            />
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              type="number"
              placeholder="Number of Guests"
            />
            <input
              type="file"
              ref={fileRef}
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              placeholder="Upload Image"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
export default Host;
