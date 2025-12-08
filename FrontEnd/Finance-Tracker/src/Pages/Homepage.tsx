import Card from "@/Component/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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
                  content=<div className=" flex bg-pcolor rounded-xl p-4 justify-between ">
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
                  content=<div className=" flex border-2 rounded-xl p-4 justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-col text-xs">
                        <div className="font-light">Goal Progress</div>
                        <div className="ml-2 font-bold">1000$</div>
                      </div>
                      <div className="flex flex-col text-xs">
                        <div className="font-light">This month Target</div>
                        <div className="ml-2 font-bold">1000$</div>
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
        <div className="flex flex-col  p-1 w-full  shadow-xl">
          <p className="font-light">UpComming Bill</p>
          <Carousel className="h-full ">
            <CarouselContent className="h-full!  ">
              <CarouselItem className="h-full">
                <Card
                  title="2000$"
                  description=<a className="text-blue-500 font-light text-xs">
                    View Details
                  </a>
                  content=<div className=" flex bg-pcolor rounded-xl p-4 justify-between ">
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
      </div>
    </div>
  );
}
