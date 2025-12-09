import React, { useState } from "react";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
function TanStackTable() {
  type transaction = {
    Items: string;
    ShopName: string;
    Date: string;
    PaymentMethod: string;
    Amount: number;
  };
  const DefData: transaction[] = [
    {
      Items: "Laptop",
      ShopName: "Tech Store",
      Date: "2023-10-01",
      PaymentMethod: "Credit Card",
      Amount: 1200,
    },
    {
      Items: "Headphones",
      ShopName: "Audio World",
      Date: "2023-10-05",
      PaymentMethod: "PayPal",
      Amount: 200,
    },
  ];

  const columnHelper = createColumnHelper<transaction>();

  const columns = [
    columnHelper.accessor("Items", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("ShopName", {
      cell: (info) => info.getValue(),
      header: () => <span>Shop Name</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("Date", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("PaymentMethod", {
      cell: (info) => info.getValue(),
      header: () => <p>Payment Method</p>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("Amount", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
  ];

  const [data, setDate] = useState([...DefData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <table>
        <thead>{}</thead>
        <tbody>{}</tbody>
        <tfoot>{}</tfoot>
      </table>
    </div>
  );
}

export default TanStackTable;
