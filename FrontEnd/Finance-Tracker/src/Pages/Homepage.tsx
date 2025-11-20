import Card from "@/Component/Card";
import React from "react";

export default function Homepage() {
  return (
    <div>
      <div className="flex gap-2 justify-between border-2 m-2 p-2">
        <div className="flex flex-col  p-1 w-full">
          <Card
            title="2000$"
            description=<a className="text-blue-500 font-light text-xs">
              View Details
            </a>
            content=<div className=" flex bg-pcolor rounded-xl">
              <div className="flex flex-col">
                <div className="font-light text-xs">Account Type</div>
                <div className="font-bold">NIC ASIA</div>
                <div className="text-xs font-extralight">
                  **** **** **** ****
                </div>
                <div className="flex flex-col"></div>
              </div>
            </div>
            footer="hello"
          />
        </div>
        <div className="flex flex-col  p-1 w-full">2</div>
        <div className="flex flex-col  p-1 w-full">3</div>
      </div>
    </div>
  );
}
