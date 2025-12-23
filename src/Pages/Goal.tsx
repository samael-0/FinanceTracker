import {
  Caard,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

import { Progress } from "@/components/ui/progress";
import React from "react";
import {
  Label,
  Legend,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

interface goalData {
  fundName: string;
  saved: string;
  target: string;
  remaining: string;
}
const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const data: goalData[] = [
  {
    fundName: "Emergency Fund",
    saved: "$6500",
    target: "$10000",
    remaining: "$3500",
  },
  {
    fundName: "Vaccation to Europe",
    saved: "$6500",
    target: "$10000",
    remaining: "$3500",
  },
];

function Goal() {
  return (
    <div className="flex flex-col bg-bgcolor h-full  px-6 py-2 border-7 ">
      <h1 className="font-semibold text-3xl">Financial Goal</h1>
      <div className=" bg-white shadow-xs flex flex-col   my-2 px-2 py-2 gap-5 rounded-xl">
        <p>Overall Progress</p>
        <div className="flex justify-between">
          <span>
            <p className="font-semimedium text-3xl">$1400</p>
            <p className="font-extralight text-sm">of $3200</p>
          </span>

          <span>
            <p className="font-semimedium text-3xl">14%</p>
            <p className="font-extralight text-sm">of $3200</p>
          </span>
        </div>
        <div className="">
          <Progress className="w-full h-4" value={33} />
        </div>
      </div>
      <div className="flex bg-white p-2  rounded-xl border-2 border-red-900">
        {data.map((goal) => (
          <Caard className="">
            <CardHeader>
              <CardTitle>{goal.fundName}</CardTitle>
              <CardDescription>Card Description</CardDescription>
              {/* <CardAction>Card Action</CardAction> */}
            </CardHeader>
            <CardContent className="  w-full">
              <div className="flex gap-4 items-center">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[250px] h-full"
                >
                  <RadialBarChart
                    data={chartData}
                    startAngle={0}
                    endAngle={250}
                    innerRadius={80}
                    outerRadius={110}
                  >
                    <PolarGrid
                      gridType="circle"
                      radialLines={false}
                      stroke="none"
                      className="first:fill-muted last:fill-background"
                      polarRadius={[86, 74]}
                    />
                    <RadialBar
                      dataKey="visitors"
                      background
                      cornerRadius={10}
                    />
                    <PolarRadiusAxis
                      tick={false}
                      tickLine={false}
                      axisLine={false}
                    >
                      <Label
                        content={({ viewBox }) => {
                          if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                              <text
                                x={viewBox.cx}
                                y={viewBox.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                              >
                                <tspan
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  className="fill-foreground text-4xl font-bold"
                                >
                                  {chartData[0].visitors.toLocaleString()}
                                </tspan>
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 24}
                                  className="fill-muted-foreground"
                                >
                                  Visitors
                                </tspan>
                              </text>
                            );
                          }
                        }}
                      />
                    </PolarRadiusAxis>
                  </RadialBarChart>
                </ChartContainer>
                <span className="flex flex-col">
                  <span>
                    <p className="font-light">Saved</p>
                    <p className="font-medium text-xl">{goal.saved}</p>
                  </span>
                  <span>
                    <p className="font-light">Target</p>
                    <p className="font-medium text-xl">{goal.target}</p>
                  </span>
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="  ">
                <p>Card Footer</p>
                <p className="font-light text-sm">{goal.remaining}</p>
              </div>
            </CardFooter>
          </Caard>
        ))}
      </div>
    </div>
  );
}

export default Goal;
