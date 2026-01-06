import NewIncome from "@/Component/NewIncome";
import TanTable from "@/Component/TanTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { RiArrowUpDownFill } from "react-icons/ri";

import { useTokenStore } from "@/store/tokenstore";

import {
  type ColumnDef,
  type CellContext,
  createColumnHelper,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import CustomDialog from "@/Component/CustomDialog";
import NewExpense from "@/Component/NewExpense";

export interface Income {
  Incomeid: string;
  IncomeType: string;
  IncomeAmt: number;
  Remarks: string;
  status: string;
  Created_at: string;
}

export default function SimpleTable() {
  const [data, setdata] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Income[]>([]);
  const setIncome = useTokenStore((state) => state.setIncome);
  console.log(data);
  const columnHelper = createColumnHelper();
  const columns: ColumnDef<Income>[] = [
    {
      header: "ID",
      accessorKey: "id",
      enableSorting: false,
    },
    {
      header: "Type",
      accessorKey: "Type",
      enableSorting: false,
    },
    {
      header: "Amount",
      accessorKey: "Amt",
      meta: {
        className: " rounded-xl bg-blue-200  px-2   py-1 ",
      },
      sortingFn: (rowA, rowB, columnId) => {
        return (
          Number(rowA.getValue(columnId)) - Number(rowB.getValue(columnId))
        );
      },
      enableSorting: false,
    },

    {
      header: "Remarks",
      accessorKey: "Remarks",
      enableSorting: false,
    },
    {
      header: "Date",
      accessorKey: "Created_at",
      cell: ({ row }) =>
        new Date(row.original.Created_at).toISOString().split("T")[0],
      enableSorting: true,
      sortDescFirst: false,
    },
  ];

  useEffect(() => {
    async function fetchIncome() {
      try {
        const res = await fetch("/api/finance");
        if (!res.ok) throw new Error("Failed to Fetch");
        const data = await res.json();
        console.log(data);
        setdata(data);
        setIncome(data);

        const res2 = await axios.get("/api/finance");
        console.log(res2);
        setExpenses(res2.data);
      } catch (error) {
        return error;
      }
    }
    fetchIncome();
  }, []);

  return (
    <div className="bg-bgcolor dark:bg-gray-800 ">
      <div className="flex justify-end px-3 py-2  gap-2 ">
        <Toaster />{" "}
        {/* <Button className=" hover:cursor-pointer hover:scale-95">
          Add New Expense
        </Button> */}
        {/* income */}
        <CustomDialog
          dialogTrigger="Add New Income"
          dialogTitle="Add New Goal"
          tailwindcss="border-2 px-1 py-1 rounded-sm bg-black text-white"
        >
          <NewIncome />
        </CustomDialog>
        {/* expense */}
        <CustomDialog
          dialogTrigger="Add New Expenses"
          dialogTitle="Add New Goal"
          tailwindcss="border-2 px-1 py-1 rounded-sm bg-black text-white"
        >
          <NewExpense />
        </CustomDialog>
      </div>
      {/* 
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full h-10 px-2 ">
          <TabsTrigger value="account">Incomes</TabsTrigger>
          <TabsTrigger value="password">Expenses</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="px-2">
          <TanTable data={data} columns={columns} />
        </TabsContent>
        <TabsContent value="password" className="px-2">
          <TanTable data={expenses} columns={columns} />
        </TabsContent>
      </Tabs> */}
      <TanTable data={expenses} columns={columns} />
    </div>
  );
}
