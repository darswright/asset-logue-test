import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCheckCircle,
  faCommentDots,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const servicesList = [
    "Something",
    "Something",
    "Something",
    "Something",
    "Something",
    "Something",
    "Something",
    "Something",
    "Something"
  ].map(item => (
    <li>
      <FontAwesomeIcon icon={faCheckCircle} /> {item}
    </li>
  ));

  return (
    <aside className="sidebar">
      <section className="user-details">
        <div className="user-details--img">
          <img src="https://darswright.com/static/media/profilepic.4c02c226.jpg" />
        </div>

        <h2>Simon Wright</h2>
        <span>SIM #12345</span>
        <address>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 My Street
        </address>

        <div className="user-details--links">
          <button>
            <FontAwesomeIcon icon={faEdit} /> Ask for Quote
          </button>
          <button>
            <FontAwesomeIcon icon={faCommentDots} /> Chat
          </button>
        </div>
      </section>

      <section className="user-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <section className="user-languages">
        <h4>The launguages I speak:</h4>

        <ul className="user-languages--list">
          <li>English</li>
          <li>Spanish</li>
        </ul>
      </section>

      <section className="user-services">
        <h4>The services I offer:</h4>

        <ul className="user-services--list">{servicesList}</ul>
      </section>
    </aside>
  );
}
