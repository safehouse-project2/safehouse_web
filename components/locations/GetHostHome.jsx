import { Marker, InfoWindow } from "@react-google-maps/api";
import Button from "../D3Components/Button/Button";
import { useState } from "react";

const GetHostHome = ({
  hostInfo = [
    {
      lat: null,
      lng: null,
    },
  ],
  isClicked = false,
  isBothClicked = false,
}) => {
  const [locationInfo, setLocationInfo] = useState(null);
  if (isBothClicked || isClicked) {
    return (
      <div>
        {hostInfo.map((item, index) => (
          <div key={index}>
            <Marker
              key={item.lat}
              position={{ lat: Number(item.lat), lng: Number(item.lng) }}
              icon={{
                url: "/vector.svg",
                scaledSize: new window.google.maps.Size(40, 40),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
              onClick={() => {
                setLocationInfo({
                  id: item.id,
                  title: (
                    //   <Button txt="See Details" fontSize="12px" href={`/home/${item.id}`}>
                    <Button
                      txt="See Details"
                      fontSize="12px"
                      href={`/home/${item.id}`}
                    ></Button>
                  ),
                  address: item.addressLine1,
                  description: item.description,
                  lat: item.lat,
                  lng: item.lng,
                });
                // onClick={() => {
                //   router.push(`/home/${item.id}`);
                // }}
              }}
            />
          </div>
        ))}
        {locationInfo && (
          <InfoWindow
            position={{
              lat: locationInfo.lat,
              lng: locationInfo.lng,
            }}
            onCloseClick={() => {
              setLocationInfo(null);
            }}
          >
            <div>
              <h2>
                {locationInfo.address
                  ? locationInfo.address
                  : "No provided address"}
              </h2>
              <p>
                {locationInfo.description
                  ? locationInfo.description
                  : "No provided description"}
              </p>
              <h3>
                {locationInfo.title ? locationInfo.title : "No title available"}
              </h3>
            </div>
          </InfoWindow>
        )}
      </div>
    );
  }
};
export default GetHostHome;
