import React from "react";

export default function DetailTechnology(props) {
  const { state } = props.location;
  console.log("getDataFromTech:", state);
  return <div>Detail Technology Page</div>;
}
