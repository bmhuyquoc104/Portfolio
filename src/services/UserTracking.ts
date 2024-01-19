import Alert from "./Alert";
import SETTING from "../common/setting";
import { useState } from "react";

const alert = new Alert(SETTING.getWebhookChannel());
console.log(SETTING.getGeoAPIKey());
const isDayPassed = (lastVisitDate) => {
  const today = new Date();
  return today.toDateString() !== lastVisitDate.toDateString();
};

const logVisitorInfo = () => {
  const lastVisitTimestamp = localStorage.getItem("lastVisitTimestamp");

  const ip = localStorage.getItem("ip");
  const apiUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${SETTING.getGeoAPIKey()}`;
  if (!ip || isDayPassed(new Date(lastVisitTimestamp ?? Date.now()))) {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert.send({ content: JSON.stringify(data) });
          const currentTimestamp = new Date().toISOString();
          console.log(data);
          localStorage.setItem("lastVisitTimestamp", currentTimestamp);
          localStorage.setItem("ip", data.ip);
        }
      })
      .catch((error) => {
        alert.send({ content: JSON.stringify(error) });
      });
  }
};

export default logVisitorInfo;
