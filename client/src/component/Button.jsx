import React from "react";

export default function Button(props) {
  return (
    <>
      <button className="bg-slate-600 p-2 rounded-lg w-55">
        {props.children}
      </button>
    </>
  );
}
