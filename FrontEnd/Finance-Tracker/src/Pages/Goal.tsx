import { TrendingDown, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import {
  Caard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// --------------------
// Constants
// --------------------
const CATEGORY_GOALS = [
  { cardName: "Housing", amt: "$250" },
  { cardName: "Food", amt: "$250" },
  { cardName: "Transportation", amt: "$250" },
];

const AREA_CHART_DATA = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const CHART_CONFIG = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
    icon: TrendingDown,
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
    icon: TrendingUp,
  },
};

// --------------------
// Component
// --------------------
export default function Goal() {
  const totalGoal = 1000;
  const completed = 900;

  return (
    <div className="flex flex-col h-full bg-white p-2 gap-4">
      {/* Header */}
      <div className="flex justify-between px-2">
        <p className="text-2xl font-light text-gray-400">Goals</p>
        <Button variant="secondary">Add Goal</Button>
      </div>

      {/* Main section */}
      <div className="flex justify-between gap-4">
        {/* Saving Goal Card */}
        <div className="flex flex-col gap-4 bg-white dark:bg-black dark:text-white p-4 shadow-lg rounded-xl w-[350px]">
          <div className="flex justify-between items-center">
            <b>Saving Goal</b>
            <select>
              <option value="jan">Jan</option>
              <option value="feb">Feb</option>
            </select>
          </div>

          <div className="flex gap-8 items-center">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs text-gray-500">Target achieved</p>
                <p className="font-bold text-xl">$12500</p>
              </div>

              <div>
                <p className="text-xs text-gray-500">This month target</p>
                <p className="font-bold text-xl">$12500</p>
              </div>
            </div>

            <PieChart width={200} height={200}>
              <Pie
                startAngle={180}
                endAngle={0}
                innerRadius="55%"
                cy="50%"
                data={[
                  { name: "Completed", value: completed },
                  { name: "Remaining", value: totalGoal - completed },
                ]}
                dataKey="value"
                labelLine={false}
                isAnimationActive={false}
              >
                <Cell fill="#000" />
                <Cell fill="#eaeaea" />
              </Pie>
            </PieChart>
          </div>

          <div className="mx-auto">
            <Button variant="secondary">Adjust Goal</Button>
          </div>
        </div>

        {/* Area Chart Card */}
        <Caard className="flex-1">
          <CardHeader>
            <CardTitle>Area Chart - Icons</CardTitle>
            <CardDescription>
              Showing total visitors for the last 6 months
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ChartContainer
              className="max-h-[200px] w-full"
              config={CHART_CONFIG}
            >
              <AreaChart
                data={AREA_CHART_DATA}
                margin={{ left: 12, right: 12 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />

                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="var(--color-mobile)"
                  fillOpacity={0.4}
                  stroke="var(--color-mobile)"
                  stackId="a"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                  stackId="a"
                />

                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </CardContent>

          <CardFooter>
            <div className="flex items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground">January - June 2024</div>
              </div>
            </div>
          </CardFooter>
        </Caard>
      </div>

      {/* Category Goals */}
      <p className="text-2xl font-light text-gray-400">
        Expenses Goals by Category
      </p>

      <div className="grid grid-cols-3 gap-3">
        {CATEGORY_GOALS.map((value, index) => (
          <div
            key={index}
            className="flex items-center bg-white dark:bg-black dark:text-white gap-3 p-4 rounded-xl shadow-xl justify-between"
          >
            <img src="" alt="Logo" />
            <div>
              <p>{value.cardName}</p>
              <p>{value.amt}</p>
            </div>
            <Button variant="secondary">Adjust</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
