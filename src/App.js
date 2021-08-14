import "./styles.css";
import { destinations } from "./destination";
import { useState } from "react";

export default function App() {
  const { Goa } = destinations;
  const [place, setPlace] = useState(Goa);

  const handelClick = (dest) => {
    setPlace(destinations[dest]);
  };

  return (
    <div className="App">
      <h1
        style={{
          color: "white"
        }}
      >
        Travel With Us ✈
      </h1>
      <p
        style={{
          color: "gray",
          fontSize: "smaller"
        }}
      >
        Checkout some awsome places to visit.
      </p>

      {Object.keys(destinations).map((dest) => {
        return (
          <button
            key={dest}
            style={{
              fontSize: "0.8rem",
              padding: "0.3rem 1.5rem",
              border: "1px solid black",
              borderRadius: "10px",
              backgroundColor: "#E5E7EB",
              marginRight: "10px",
              marginTop: "10px",
              cursor: "pointer"
            }}
            onClick={() => handelClick(dest)}
          >
            {dest}
          </button>
        );
      })}
      <ul
        style={{
          marginTop: "30px"
        }}
      >
        {place &&
          place.map((dest) => {
            return (
              <li
                style={{
                  width: "90%",
                  padding: "1rem",
                  margin: "1rem 0rem",
                  backgroundColor: "#E5E7EB",
                  listStyle: "none",
                  border: "2px solid gray",
                  borderRadius: "20px"
                }}
              >
                <p>Name: {dest.name}</p>
                <p>Description: {dest.description.substr(0, 50)}...</p>
                <p>Rating: {dest.rating}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
