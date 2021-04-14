import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const containerStyle = {
  width: "100vw",
  height: "100vh"
};

//const libraries = ["places"];

export default function GSearch() {
  const [center, setCenter] = useState({ lat: 51.5074, lng: 0.1278 });

  const [markers, setMarkers] = useState([]);

  const onMapClick = useCallback(
    (event) =>
      setMarkers((current) => [
        ...current,
        {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date()
        }
      ]),
    []
  );

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  });

  const [curSelect, setCurSelect] = useState(null);
  const libraries = ["places"];

  return (
    <div>
      <LoadScript
        googleMapsApiKey="AIzaSyC44LmEfw4hs78DkfdGjAnAXbL6PO8-AUQ"
        libraries={libraries}
      >
        <AutoSearch />
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          <React.Fragment>
            {markers.map((marker) => (
              <Marker
                key={marker.time.toISOString()}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => {
                  setCurSelect(marker);
                }}
              />
            ))}

            {curSelect ? (
              <InfoWindow
                position={curSelect}
                onCloseClick={() => {
                  setCurSelect(null);
                }}
              >
                <div>
                  <h1>text</h1>
                </div>
              </InfoWindow>
            ) : null}
          </React.Fragment>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

function AutoSearch() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete();

  return (
    <Combobox
      onSelect={(address) => {
        console.log(address);
      }}
    >
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Search here"
      />

      <ComboboxPopover>
        {status === "OK" &&
          data.map(({ id, description }) => (
            <ComboboxOption
              key={description}
              value={description}
            ></ComboboxOption>
          ))}
      </ComboboxPopover>
    </Combobox>
  );
}
/*{curSelect ? (
            <InfoWindow
              positon={{ lat: curSelect.lat, lng: curSelect.lng }}
              //anchor={curSelect}
            >
              <div>
                <h2> This should be working </h2>
              </div>
            </InfoWindow>
          ) : null}*/
