import Card from "@/Component/Card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import {
  Pie,
  PieChart,
  Cell,
  BarChart,
  CartesianGrid,
  XAxis,
  Bar,
} from "recharts";

const totalGoal = 1000;
const completed = 900;

const data = [
  { name: "Completed", value: completed },
  { name: "Remaining", value: totalGoal - completed },
];

import { FaRegCreditCard } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Caard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export const description = "A multiple bar chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function Homepage() {
  return (
    <div className="  flex flex-col  bg-bgcolor dark:bg-black ">
      <div className="flex  justify-between  m-2 p-2 ">
        <div className="flex flex-col  p-1 w-full   shadow-xl">
          <p className="font-light">Total Balance</p>
          <Carousel className="h-full ">
            <CarouselContent className="h-full!  ">
              <CarouselItem className="h-full">
                <Card
                  title="2000$"
                  description={
                    <a className="text-blue-500 font-light text-xs">
                      View Details
                    </a>
                  }
                  content={
                    <div className="  flex h-full  bg-pcolor rounded-xl p-4 justify-between ">
                      <div className="flex flex-col">
                        <div className="font-light text-xs">Account Type</div>
                        <div className="font-bold">NIC ASIA</div>
                        <div className="text-xs font-light">
                          **** **** **** ****
                        </div>
                      </div>
                      <div>
                        {" "}
                        <div className="flex flex-col">
                          <FaRegCreditCard />
                        </div>
                      </div>
                    </div>
                  }
                  footer={<div className="flex justify-between"></div>}
                />
              </CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="border-none p-0 left-4 top-auto -bottom-2" />
            <CarouselNext className="border-none p-0 right-4 top-auto -bottom-2" />
          </Carousel>
        </div>
        <div className="flex flex-col  p-1 w-full shadow-xl">
          <p className="font-light">Goals</p>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
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
                  footer=<div className="flex justify-between"></div>
                />
              </CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="border-none p-0 left-4 top-auto -bottom-2" />
            <CarouselNext className="border-none p-0 right-4 top-auto -bottom-2" />
          </Carousel>
        </div>

        {/* hell */}
        <div className="flex flex-col  p-1 w-full  shadow-xl">
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

      <div className=" flex   px-3  gap-2 ">
        <div className=" border-2 shadow-xs bg-white dark:bg-gray-800 rounded-xl p-4">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">All</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="justify-between">
              <div className="flex w-full py-1 justify-between h-15 border-b-2 p-7">
                <div>svg</div>
                <div className="font-bold">GTR 5</div>
                <div className="font-bold">$1600</div>
              </div>
            </TabsContent>
            <TabsContent value="revenue">
              <div className="flex w-full py-1 justify-between h-15 border-b-2 p-7">
                <div>svg</div>
                <div className="font-bold">Salary</div>
                <div className="font-bold">$1600</div>
              </div>
            </TabsContent>
            <TabsContent value="expenses">
              <div className="flex w-full py-1 justify-between h-15 border-b-2 p-7">
                <div>svg</div>
                <div className="font-bold">GTR 5</div>
                <div className="font-bold">$1600</div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-full">
          <Caard>
            <CardHeader>
              <CardTitle>Bar Chart - Multiple</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={4}
                  />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 leading-none font-medium">
                Trending up by 5.2% this month{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground leading-none">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter>
          </Caard>
        </div>
      </div>
    </div>
  );
}
