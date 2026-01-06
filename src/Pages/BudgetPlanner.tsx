import { Progress } from "@/components/ui/progress";

export default function BudgetPlanner() {
  interface Category {
    catoName: string;
    budgetAmt: number;
    usedAmt: number;
    remainAmt: number;
  }
  const categories: Category[] = [
    {
      catoName: "Groceries",
      budgetAmt: 500,
      usedAmt: 350,
      remainAmt: 150,
    },
    {
      catoName: "Rent",
      budgetAmt: 1200,
      usedAmt: 1201,
      remainAmt: -1,
    },
    {
      catoName: "Transportation",
      budgetAmt: 200,
      usedAmt: 145,
      remainAmt: 55,
    },
    {
      catoName: "Utilities",
      budgetAmt: 150,
      usedAmt: 98,
      remainAmt: 52,
    },
    {
      catoName: "Entertainment",
      budgetAmt: 100,
      usedAmt: 72,
      remainAmt: 28,
    },
    {
      catoName: "Healthcare",
      budgetAmt: 250,
      usedAmt: 180,
      remainAmt: 70,
    },
    {
      catoName: "Education",
      budgetAmt: 300,
      usedAmt: 220,
      remainAmt: 80,
    },
    {
      catoName: "Savings",
      budgetAmt: 400,
      usedAmt: 150,
      remainAmt: 250,
    },
  ];
  return (
    <div className="m-3 py-3 ">
      <p className="font-bold text-2xl">Budget Planner</p>
      <p className="font-light">Track and manage your monthly budgets</p>

      {/* cart */}
      <div className="grid grid-cols-4 gap-5 my-4 ">
        {/* Alter part */}
        <div className="col-span-4 border-2 p-2 rounded-xl bg-white text-red-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
          provident.
        </div>
        {categories.map((value, key) => (
          <div
            key={key}
            className={`${
              value.usedAmt > value.budgetAmt
                ? "border-2 border-red-500"
                : "border-0"
            } space-y-1 bg-white p-2 rounded-xl`}
          >
            <p className="font-medium ">{value.catoName}</p>
            <div className=" flex justify-between mt-6">
              <p className="">
                {`$${value.usedAmt}`}
                <span className="font-extralight text-sm">
                  {`/$${value.budgetAmt} `}
                </span>
              </p>
              <p className="font-extralight text-sm">{`${Math.round(
                (value.usedAmt / value.budgetAmt) * 100
              )}%`}</p>
            </div>

            <Progress
              value={Math.round((value.usedAmt / value.budgetAmt) * 100)}
            />
            <div className="flex justify-between gap-2 mb-6">
              <p className="text-sm">Remaining</p>
              <p className="text-m">{value.remainAmt}</p>
            </div>
          </div>
        ))}

        {/* Budget Summary */}
        <div className="col-span-4 border-2 bg-white rounded-xl p-2 ">
          <p className="font-medium pb-3">Budget Summary</p>
          <div className="flex justify-between">
            <div>
              <p>Total Budget</p>
              <p>$3800</p>
            </div>
            <div>
              <p>Total Spent</p>
              <p>$2500</p>
            </div>
            <div>
              <p>Total Remaining</p>
              <p>$1234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
