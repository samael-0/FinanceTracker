import Card from "@/Component/Card";

import {
  Pie,
  PieChart,
  Cell,
  BarChart,
  CartesianGrid,
  XAxis,
  Bar,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const totalGoal = 1000;
const completed = 900;

const data = [
  { name: "Completed", value: completed },
  { name: "Remaining", value: totalGoal - completed },
];

const barChartData = [
  { month: "Jul", income: 250, expense: 110 },
  { month: "Aug", income: 270, expense: 130 },
  { month: "Sep", income: 320, expense: 150 },
  { month: "Oct", income: 350, expense: 170 },
  { month: "Nov", income: 400, expense: 200 },
  { month: "Dec", income: 450, expense: 220 },
];

import { FaRegCreditCard } from "react-icons/fa6";

import { useEffect, useState } from "react";
import { useTokenStore } from "@/store/tokenstore";
import TanTable from "@/Component/TanTable";

export const description = "A multiple bar chart";

export default function Homepage() {
  const [totalIncome, setTotalIncome] = useState(0);
  const token = useTokenStore((state) => state.token);

  useEffect(() => {
    fetch("https://localhost:7055/api/Income/gettotalincome", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalIncome(data);
      });
  }, [token]);

  return (
    <div className="  flex flex-col h-full bg-bgcolor dark:bg-black ">
      <div className="flex  justify-between  m-2 px-2  ">
        <div className="flex flex-col  p-1 w-full">
          <p className="font-light">Total Balance</p>

          <Card
            title={`$ ${totalIncome}`}
            description={
              <a className="text-blue-500 font-light text-xs">View Details</a>
            }
            content={
              <div className="  flex h-full  bg-pcolor rounded-xl p-4 justify-between ">
                <div className="flex flex-col">
                  <div className="font-light text-xs">Account Type</div>
                  <div className="font-bold">NIC ASIA</div>
                  <div className="text-xs font-light">**** **** **** ****</div>
                </div>
                <div>
                  {" "}
                  <div className="flex flex-col">
                    <FaRegCreditCard />
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <div className="flex flex-col  p-1 w-full ">
          <p className="font-light">Goals</p>

          <Card
            title="4000$"
            description=<a className="text-blue-500 font-light text-xs">
              View Details
            </a>
            content=<div className=" flex border-2 rounded-xl items-center justify-between ">
              <div className="flex flex-col gap-1 p-2 ">
                <div className="flex flex-col text-xs">
                  <div className="font-light">Goal Progress</div>
                  <div className="ml-2 font-bold">1000$</div>
                </div>
                <div className="flex flex-col text-xs">
                  <div className="font-light">This month Target</div>
                  <div className="ml-2 font-bold">1000$</div>
                </div>
              </div>
              <div className=" flex flex-col  items-center  gap-7">
                {" "}
                <div className="h-20">
                  {/* <FaRegCreditCard /> */}
                  <PieChart height={200} width={200} className="">
                    <Pie
                      startAngle={180}
                      endAngle={0}
                      innerRadius="55%"
                      data={data}
                      dataKey="value"
                      labelLine={false}
                      blendStroke
                      isAnimationActive={false}
                      cy={"50%"}
                    >
                      <Cell fill="#000" />
                      <Cell fill="#eaeaea" />
                    </Pie>
                  </PieChart>
                </div>
                <div>TotalVSSAVED</div>
              </div>
            </div>
          />
        </div>

        {/* hell */}
        <div className="flex flex-col  p-1 w-full  ">
          <p className="font-light">Total Balance</p>
          <Card
            title={"Bills"}
            description={
              <a className="text-blue-500 font-light text-xs">View Details</a>
            }
            content={
              <div className="flex flex-col">
                <div className="flex w-full py-1 justify-between h-20 border-b-2 mb-2">
                  <div className="border-2 bg-bgcolor dark:bg-black rounded-md p-2">
                    <p className="font-bold">May</p>
                    <p className="font-bold text-center">15</p>
                  </div>
                  <div className="">
                    <p className="font-bold">Figma</p>
                    <p className="text-sm">Figma-Monthly</p>
                    <p className="font-light text-[0.7rem]">
                      Last-Charge:14 May,2022
                    </p>
                  </div>
                  <div className="border-2 rounded-md h-7 p-1 font-bold">
                    $150
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex gap-2 mx-2 px-3 h-full">
        {/* Left */}
        <div className="flex-1 border-2 shadow-xs bg-white dark:bg-gray-800 rounded-xl p-4">
          {/* <TanTable data={data} columns={columns} /> */}
        </div>

        {/* Chart */}
        <div className="flex-1 border-2 border-red-900 shadow-xs bg-white dark:bg-gray-800 rounded-xl p-4 flex flex-col min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barChartData}
              margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#8884d8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expense" fill="#82ca9d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Right */}
        <div className="flex-1 border-2 shadow-xs bg-white dark:bg-gray-800 rounded-xl p-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          nisi in omnis! Sit dignissimos optio sint iste expedita...
        </div>
      </div>
    </div>
  );
}
