import { Progress } from "@/components/ui/progress";
import React from "react";

export default function BudgetPlanner() {
  interface Category {
    catoName: string;
    budgetAmt: string;
    usedAmt: string;
  }
  const categories: Category[] = [
    {
      catoName: "Groceries",
      budgetAmt: "$500",
      usedAmt: "$269",
    },
    {
      catoName: "Rent",
      budgetAmt: "$1200",
      usedAmt: "$1200",
    },
    {
      catoName: "Transportation",
      budgetAmt: "$200",
      usedAmt: "$145",
    },
    {
      catoName: "Utilities",
      budgetAmt: "$150",
      usedAmt: "$98",
    },
    {
      catoName: "Entertainment",
      budgetAmt: "$100",
      usedAmt: "$72",
    },
  ];
  return (
    <div className="">
      <p>Budget Planner</p>
      <p>Track and manage your monthl budgets</p>
      {/* Alter part */}
      <div></div>

      {/* cart */}
      <div className="border-2 grid grid-cols-4 gap-4 my-4 py-4 ">
        {categories.map((value, i) => (
          <div className="border-2  flex flex-col gap-1 rounded-xl px-2 py-1">
            <p className="text-sm">{value.catoName}</p>
            <div className="flex justify-between px-1">
              <p className="font-semibold text-xl">{value.usedAmt}</p>
              <p className="font-light text-sm">{value.budgetAmt}</p>
            </div>
            <Progress value={40} />
            <div className="flex justify-between px-1 ">
              <p className="text-xm font-extralight">Remaining</p>
              <p className="text-xm font-extralight">{value.usedAmt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Budget Summary */}
      <div></div>
    </div>
  );
}
