import React from "react";
import { useState, useEffect } from "react";
import Loader from './components/Loader'
import "./style.css";
import Map from "./components/map";
export default function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);
  return <div>{!loading ? <Map eventData={eventData} /> : <Loader />}</div>;
}
