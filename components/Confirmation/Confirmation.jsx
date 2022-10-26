import AppText from "../D3Components/AppText/AppText";
import ConfirmForm from "../hostPosting/ConfirmForm";

let formData = {};

export default function Confirmation() {
  <div>
    <div className="flex gap-[13.5rem] pt-10">
      <AppText txt="Home Type" color="#F0E6D9" fontSize="18px" />
      <AppText txt={formData.homeType} color="#F5F5F5" fontSize="18px" />
    </div>
    <div className="flex gap-[13.5rem] pt-10">
      <AppText txt="Home description" color="#F0E6D9" fontSize="18px" />
      <AppText txt={formData.description} color="#F5F5F5" fontSize="18px" />
    </div>
    <div className="flex gap-[13.5rem] pt-10">
      <AppText txt="Address" color="#F0E6D9" fontSize="18px" />
      <div>
        <span>{formData.addressLine1}</span>
        <span>{formData.addressLine2}</span>
        <span>{formData.city}</span>
        <span>{formData.province}</span>
        <span>{formData.postalCode}</span>
      </div>
    </div>
    <div className="flex gap-[13.5rem] pt-10">
      <AppText txt="Guests Allowed" color="#F0E6D9" fontSize="18px" />
      <AppText txt={formData.guests} color="#F5F5F5" fontSize="18px" />
    </div>
    <div className="flex gap-[13.5rem] pt-10">
      <AppText txt="Bedrooms" color="#F0E6D9" fontSize="18px" />
      <AppText txt={formData.bedrooms} color="#F5F5F5" fontSize="18px" />
    </div>

    <div className="flex gap-[13.5rem] pt-10">
      <AppText txt="Beds" color="#F0E6D9" fontSize="18px" />
      <AppText txt={formData.beds} color="#F5F5F5" fontSize="18px" />
    </div>

    <div className="flex gap-[13.5rem] pt-10">
      <AppText txt="Bathrooms" color="#F0E6D9" fontSize="18px" />
      <AppText txt={formData.bathrooms} color="#F5F5F5" fontSize="18px" />
    </div>

    <div className="flex gap-[13.5rem] pt-10">
      <AppText txt="Kitchen" color="#F0E6D9" fontSize="18px" />
      <AppText txt={formData.kitchen} color="#F5F5F5" fontSize="18px" />
    </div>

    <div className="flex gap-[13.5rem] pt-10">
      <AppText txt="Parking Spaces" color="#F0E6D9" fontSize="18px" />
      <AppText txt={formData.parking} color="#F5F5F5" fontSize="18px" />
    </div>
  </div>;
}
