import NewIncome from "@/Component/NewIncome";
import TanTable from "@/Component/TanTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";

import { useTokenStore } from "@/store/tokenstore";

import type { ColumnDef, CellContext } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import CustomDialog from "@/Component/CustomDialog";
import NewExpense from "@/Component/NewExpense";

interface Income {
  Incomeid: string;
  IncomeType: string;
  IncomeAmt: number;
  Remarks: string;
  Created_at: string;
}

export default function SimpleTable() {
  const [data, setdata] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Income[]>([]);
  const setIncome = useTokenStore((state) => state.setIncome);
  console.log(data);

  const columns: ColumnDef<Income>[] = [
    {
      header: "ID",
      accessorKey: "Incomeid",
    },
    {
      header: "Type",
      accessorKey: "IncomeType",
    },
    {
      header: "Amount",
      accessorKey: "IncomeAmt",
    },
    {
      header: "Remarks",
      accessorKey: "Remarks",
    },
    {
      header: "Date",
      accessorKey: "Created_at",
      cell: ({ row }) =>
        new Date(row.original.Created_at).toISOString().split("T")[0], // format date
    },
  ];

  useEffect(() => {
    async function fetchIncome() {
      try {
        const res = await fetch(
          "https://6934145d4090fe3bf01ed82a.mockapi.io/api/finance"
        );
        if (!res.ok) throw new Error("Failed to Fetch");
        const data = await res.json();
        console.log(data);
        setdata(data);
        setIncome(data);

        const res2 = await axios.get(
          "https://6934145d4090fe3bf01ed82a.mockapi.io/api/finance"
        );
        console.log(res2);
        setExpenses(res2.data);
      } catch (error) {
        return error;
      }
    }
    fetchIncome();
  }, []);

  return (
    <div className="bg-bgcolor">
      <div className="flex justify-end px-3 py-2  gap-2 ">
        <Toaster />{" "}
        {/* <Button className=" hover:cursor-pointer hover:scale-95">
          Add New Expense
        </Button> */}
        {/* income */}
        <CustomDialog dialogTrigger="Add New Income" dialogTitle="Add New Goal">
          <NewIncome />
        </CustomDialog>
        {/* expense */}
        <CustomDialog
          dialogTrigger="Add New Expenses"
          dialogTitle="Add New Goal"
        >
          <NewExpense />
        </CustomDialog>
      </div>

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
      </Tabs>
    </div>
  );
}
