import React from "react";
import "./Modal.css";
import pokeball from "../images/pokeball.png";
import bg from "../images/bg.jpg";

function Modal({
  onClick,
  id,
  name,
  image,
  type,
  height,
  weight,
  stats,
  statsName,
}) {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "10",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50px",
          right: "50px",
          borderRadius: "50%",
          padding: "5px 10px",
          background: "black",
          color: "white",
          fontWeight: "900",
          cursor: "pointer",
        }}
      >
        X
      </div>
      <div>
        <img
          src={image}
          alt={name}
          style={{ filter: "drop-shadow(2px 4px 12px black)" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          width: "450px",
          height: "500px",
        }}
      >
        <div class="flex items-center text-base font-bold text-white ml--2 px-2 w-full h-36 border rounded-md bg-gradient-to-r from-purple-500 to-pink-500">
          <img src={image} alt={name} class="w-5 min-h-fit mr-4" />
          <p style={{ width: "180px", color: "black" }}>N° {id} </p>
          <p>{name}</p>
          <img src={pokeball} alt="pokeball" className="pokeball-title" />
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{ background: "#dbdbd9", textAlign: "center" }}
            class="flex flex-col w-1/2"
          >
            <p>Type:</p>
            <p>Height:</p>
            <p>Weight:</p>
          </div>
          <div
            style={{ background: "#ffffff" }}
            class="flex flex-col w-1/2 text-sm"
          >
            <p class="text-sm font-bold capitalize p-6 border-b-indigo-500">
              {type}
            </p>
            <p class="text-sm font-bold capitalize p-6 border-b-indigo-500">
              {height}0 cm
            </p>
            <p class="text-sm font-bold capitalize p-6 border-b-indigo-500">
              {weight} lbs
            </p>
          </div>
        </div>
        <div className="base-stats">
          <div>
            {statsName.map((stats) => (
              <p className="stats">{stats}</p>
            ))}
          </div>
          <div>
            {stats.map((stats) => (
              <p className="stats">{stats}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
