import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="user-details">
        <div className="user-details--img"></div>

        <h2>Simon Wright</h2>
        <span>SIM #12345</span>
        <address>123 My Street</address>

        <div className="user-details--links">
          <button>Ask for Quote</button>
          <button>Chat</button>
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
        <h4>The launguages I speak</h4>

        <ul className="user-languages--list">
          <li>English</li>
          <li>Spanish</li>
        </ul>
      </section>

      <section className="user-services">
        <h4>The services I offer</h4>

        <ul className="user-services--list">
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
        </ul>
      </section>
    </aside>
  );
}
