import TanTable from "@/Component/TanTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

export default function SimpleTable() {
  const [data, setdata] = useState<[]>([]);
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
      } catch (error) {
        return error;
      }
    }
    fetchIncome();
  }, []);

  return (
    <div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full h-14 px-2 py-1">
          <TabsTrigger value="account">Incomes</TabsTrigger>
          <TabsTrigger value="password">Expenses</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="px-2">
          <TanTable data={data} columns={columns} />
        </TabsContent>
        <TabsContent value="password" className="px-2">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
}
