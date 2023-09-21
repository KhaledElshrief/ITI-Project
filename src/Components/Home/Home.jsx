import React from "react";
import Stsyels from "./home.module.scss";

export default function Home() {
  return (
    <>
      Homeeeeeeeeeee
      <div
        id="Info"
        className={`bg-white d-none text-dark mt-5 w-50 m-auto px-5 py-3 ${Stsyels.info}`}
      >
        <div
          className={`d-flex justify-content-between  list-unstyled ${Stsyels.info2}`}
        >
          <div>
            <li className="mb-2 ms-2 ">catagory</li>
          </div>
          <div>
            <li className="mb-2 ms-5 ps-5 ">catagory</li>
          </div>
          <div>
            <li className=" mb-2 me-5  ">catagory</li>
          </div>
        </div>
        <div className=" d-flex justify-content-between">
          <div>
            <ul className="list-unstyled ">
              <li className="my-2">Comporate Shoes</li>
              <li className="my-2">Hotdeals</li>
              <li className="my-2">Sandals</li>
              <li className="my-2">Sport Shoe</li>
              <li className="my-2">Trainers</li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled text-dark">
              <li className="my-2">Comporate Shoes</li>
              <li className="my-2">Hotdeals</li>
              <li className="my-2">Sandals</li>
              <li className="my-2">Sport Shoe</li>
              <li className="my-2">Trainers</li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled text-dark">
              <li className="my-2">HOT DELA</li>

              <li className="my-2">Sunglasses</li>
              <li className="my-2">Belts</li>
              <li className="my-2">Handbags</li>
              <li className="my-2">Hotdeals</li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled text-dark">
              <li className="my-2">HOT DELA</li>

              <li className="my-2">Sunglasses</li>
              <li className="my-2">Belts</li>
              <li className="my-2">Handbags</li>
              <li className="my-2">Hotdeals</li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled text-dark">
              <li className="my-2 ">Comporate Shoes</li>
              <li className="my-2">Hotdeals</li>
              <li className="my-2">Sandals</li>
              <li className="my-2">Sport Shoe</li>
              <li className="my-2">Trainers</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
