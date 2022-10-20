import { useState, useEffect } from "react";
import Autocomplete from "../components/Autocomplete";
import axios from "axios";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
  DistanceMatrixService,
} from "@react-google-maps/api";
import EvacueePosting from "../components/evacueePosting";

const Evacuee = () => {
  return <EvacueePosting />;
};
export default Evacuee;
