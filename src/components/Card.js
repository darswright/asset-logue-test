import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { name, address } from "faker";
import Avatar from "react-user-avatar";

export default function Card() {
  return (
    <div className="card">
      <div className="card-details">
        <div className="card-user-img">
          <Avatar size="42" name={name.findName()} />
        </div>

        <div className="card-user-name">
          <h3>{name.findName()}</h3>
          <span>SIM #12345</span>
        </div>
      </div>

      <div className="card-footer">
        <address>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {address.city()}, {address.stateAbbr()}
        </address>
        <div className="card-brand-img"></div>
      </div>
    </div>
  );
}
