import React from "react";

export default function Highlight() {
  return (
    <div className="w-full h-full">
      <video autoPlay muted loop>
      {/* <video> */}
        <source src="/highlight.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}
