import React from "react";

export default function Title({ title }) {
  return (
    <div>
      <h6
        style={{
          display: "inline-block",
          borderBottom: "1px solid grey",
          paddingBottom: 8,
        }}
      >
        {title} News
      </h6>
    </div>
  );
}
