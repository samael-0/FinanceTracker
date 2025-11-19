import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosNotifications } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
export default function Header() {
  return (
    <div className="flex justify-between  h-17 bg-bgcolor p-2 px-4">
      <div className="flex items-center justify-between  gap-4 px-2 ">
        <div className="font-bold">Hello Shrawan</div>
        <p className="text-scolor font-light text-[14px]">{`>> ${new Date().toLocaleDateString(
          "en-US",
          {
            month: "long",
            day: "numeric",
            year: "numeric",
          }
        )}`}</p>
      </div>
      <div className="flex items-center justify-between  gap-4 px-2 ">
        <div className="font-bold text-2xl flex items-center justify-center">
          <Popover>
            <PopoverTrigger>
              <IoIosNotifications />
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
        <Input className="bg-white" type="text" placeholder="Search" />
        <Button className="bg-white" variant="outline">
          <CiSearch />
        </Button>
      </div>
    </div>
  );
}
