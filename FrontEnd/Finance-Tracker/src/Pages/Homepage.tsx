import Card from "@/Component/Card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { Pie, PieChart, Cell } from "recharts";

const data = [{ value: 527.65 }, { value: 602.35 }];

import { FaRegCreditCard } from "react-icons/fa6";

export default function Homepage() {
  return (
    <div className="h-full bg-bgcolor">
      <div className="flex gap-2 justify-between  m-2 p-2 ">
        <div className="flex flex-col  p-1 w-full   shadow-xl">
          <p className="font-light">Total Balance</p>
          <Carousel className="h-full ">
            <CarouselContent className="h-full!  ">
              <CarouselItem className="h-full">
                <Card
                  title="2000$"
                  description=<a className="text-blue-500 font-light text-xs">
                    View Details
                  </a>
                  content=<div className="  flex h-full  bg-pcolor rounded-xl p-4 justify-between ">
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
        <div className="flex flex-col  p-1 w-full  shadow-xl">
          {/* <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="desktop"
                stackId="a"
                fill="var(--color-desktop)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="mobile"
                stackId="a"
                fill="var(--color-mobile)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer> */}
          1
        </div>
      </div>
    </div>
  );
}
