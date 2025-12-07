import NewIncome from "@/Component/NewIncome";
import TanTable from "@/Component/TanTable";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";

import { useTokenStore } from "@/store/tokenstore";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

export default function SimpleTable() {
  const [data, setdata] = useState<[]>([]);
  const [expenses, setExpenses] = useState<[]>([]);
  const setIncome = useTokenStore((state) => state.setIncome);
  console.log(data);

  const columns = [
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
      cell: (info) => new Date(info.getValue()).toLocaleDateString(), // format date
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
    <div>
      <div className="flex justify-end px-3 py-2  gap-2 ">
        <Toaster />{" "}
        {/* <Button className=" hover:cursor-pointer hover:scale-95">
          Add New Expense
        </Button> */}
        {/* income */}
        <Dialog>
          <DialogTrigger className="bg-black text-white px-2 py-1 rounded-lg hover:cursor-pointer ">
            Add New Income
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Income</DialogTitle>
              <DialogDescription>
                <NewIncome />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {/* expense */}
        <Dialog>
          <DialogTrigger className="bg-black text-white px-2 py-1 rounded-lg hover:cursor-pointer ">
            Add New Expense
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Expense</DialogTitle>
              <DialogDescription>
                <NewIncome />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
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
