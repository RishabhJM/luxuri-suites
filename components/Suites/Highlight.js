import React from "react";

export default function Highlight() {
  return (
    <div className="w-full h-full">
      <video controls>
        <source src="/highlight.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
