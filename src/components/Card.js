import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  return (
    <div className="card">
      <div className="card-details">
        <div className="card-user-img"></div>

        <div className="card-user-name">
          <h3>Simon Wright</h3>
          <span>SIM #12345</span>
        </div>
      </div>

      <div className="card-footer">
        <address>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 My Street
        </address>
        <div className="card-brand-img"></div>
      </div>
    </div>
  );
}
