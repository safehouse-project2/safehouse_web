const Detail = ({ state }) => {
  return (
    <div key={state.id}>
      <div>Address: {state.addressLine1}</div>
      <div>City: {state.city}</div>
      <div>Province: {state.province}</div>
      <div>Postal Code: {state.postalCode}</div>
      <div>Description: {state.description}</div>
      <div>Guests: {state.guests}</div>
      <div>bedrooms: {state.bedrooms}</div>
      <div>beds: {state.beds}</div>
      <div>bathrooms: {state.bathrooms}</div>
      <div>kitchen: {state.kitchen}</div>
      <div>parking: {state.parking}</div>
      <div>Washer: {state.washer}</div>
      <div>Dryer: {state.dryer}</div>
      <div>petsAllowed: {state.petsAllowed}</div>
      <div>smokingAllowed: {state.smokingAllowed}</div>
      <div>Wifi: {state.wifi}</div>
      <div>TV: {state.tv}</div>
      <div>AC: {state.airConditioning}</div>
      <div>Heating: {state.heating}</div>
      {state.image && <img src={state.image}/>}
    </div>
  );
};
export default Detail;
