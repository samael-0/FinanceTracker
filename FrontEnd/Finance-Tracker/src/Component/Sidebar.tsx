import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const menus = [
    {
      url: "/",
      labelName: "Homepage",
    },
    {
      url: "/",
      labelName: "Balances",
    },
    {
      url: "/",
      labelName: "Transactions",
    },

    {
      url: "/",
      labelName: "Bills",
    },

    {
      url: "/",
      labelName: "Expenses",
    },
    {
      url: "/",
      labelName: "Goals",
    },
    {
      url: "/",
      labelName: "Settings",
    },
  ];

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className=" h-screen  w-50 bg-black text-white ">
      <div className="w-50 h-screen flex flex-col px-4 py-7 justify-between">
        <div className="flex-col gap-7 flex">
          <div className="text-center font-bold">FinanceTracker.IO</div>
          <div className="">
            <ul className="flex flex-col gap-3 ">
              {menus.map((items) => (
                <NavLink
                  to={items.url}
                  className={`hover:bg-pcolor px-4 py-1 ${
                    location.pathname === items.url ? "bg-pcolor" : "bg-black"
                  }`}
                >
                  {items.labelName}
                </NavLink>
              ))}
              {/* <li className="hover:bg-pcolor px-4  py-1 ">Balances</li>
            <li className="hover:bg-pcolor px-4  py-1 ">Transactions</li>
            <li className="hover:bg-pcolor px-4  py-1 ">Bills</li>
            <li className="hover:bg-pcolor px-4  py-1 ">Expenses</li>
            <li className="hover:bg-pcolor px-4  py-1 ">Goals</li>
            <li className="hover:bg-pcolor px-4  py-1 ">Settings</li> */}
            </ul>
          </div>
        </div>
        <div className="  flex flex-col gap-5">
          <div className="">LogOut</div>
          <div className="">user</div>
        </div>
      </div>
    </div>
  );
}
