import React, { type JSX } from "react";
interface CardProps {
  title: string;
  content: string | JSX.Element;
  description?: string | JSX.Element;
  footer?: string | JSX.Element;
}

export default function Card({
  title,
  content,
  description,
  footer,
}: CardProps) {
  return (
    <div className="h-full flex flex-col p-4 rounded-md shadow-md bg-white dark:bg-gray-800 gap-3">
      <div className="flex flex-col  h-full   p-1">
        <div className="flex justify-between p-1 ">
          <div className="font-bold">{title}</div>
          <div>{description}</div>
        </div>
        <div className="flex-1  ">{content}</div>
      </div>
      <div className=" p-1 grow-0 flex justify-center">{footer}</div>
    </div>
  );
}
