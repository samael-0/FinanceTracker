import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import React from "react";

export default function Homepage() {
  return (
    <div>
      <div className="flex gap-2 justify-between border-2 m-2 p-2">
        <div className="flex flex-col  p-1 w-full">1</div>
        <div className="flex flex-col  p-1 w-full">2</div>
        <div className="flex flex-col  p-1 w-full">3</div>
      </div>
    </div>
  );
}
