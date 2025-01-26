"use client";
import React from "react";
import PixelTransition from "../components/PixelTransition";


export default function Galerie() {
  return (
    <div>
      <h1 className="text-3xl bg-red-400">Galerie - Scénarios</h1>
 

<PixelTransition
  firstContent={
    <img
      src="/carte2.png"
      alt="default pixel transition content, a cat!"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
     <img
      src="/cyrielle.jpg"
      alt="default pixel transition content, a cat!"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
  className="custom-pixel-card"
  style={{ width: "500px", height: "500px" }}
/>
    </div>
  );
}