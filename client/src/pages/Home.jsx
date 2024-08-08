import React from "react";
import "../assets/image.css";
import Navbar from "../component/Navbar";
import Button from "../component/Button";
import Card from "../component/Card";

export default function Home() {
  const imageUrl =
    "https://images.unsplash.com/photo-1608619945373-8fdba33f944a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxjbG90aGluZyUyMHN0b3JlfGVufDB8fDB8fHww";

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="relative rounded-lg h-full w-full p-5 z-1 select-none">
        <img
          className="h-[80vh] w-full rounded-lg object-cover"
          src={imageUrl}
          alt="Tolus Spring Collection"
        />

        <div className="absolute w-full bottom-10 left-2 gap-4 p-5">
          <h1 className="uppercase text-4xl z-20 font-semibold select-none text-white">
            Tolus Spring Collection
          </h1>
          <div className="w-full mt-5 flex flex-row justify-between right-14 gap-3">
            <p className="select-none text-white">
              Find out our best spring collection. Offering our best quality
              products in the Tolus Spring Collection.
            </p>
            <span className="mr-[20px] select-none">
              <Button>Buy Now</Button>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="select-none text-4xl font-semibold text-center">
          New Collection
        </h1>
        <p className="select-none text-center font-sans opacity-65">
          Our latest collection where classic and contemporary style converge in
          perfect harmony
        </p>
      </div>
      <div className="relative left-2 p-10 flex gap-10 justify-between items-center">
        <Card className="block items-center" />
        <Card className="hidden md:block" />
        <Card className="hidden md:block" />
      </div>
    </div>
  );
}
