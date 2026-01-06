import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import type { Income } from "@/Pages/Transactions";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
} from "@tanstack/react-table";
import type { ColumnDef, SortingState } from "@tanstack/react-table";
import { useState } from "react";
import { RiArrowUpDownFill } from "react-icons/ri";

interface SimpleTableProps {
  data: Income[];
  columns: ColumnDef<Income, any>[];
}

export default function SimpleTable({ data, columns }: SimpleTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <table className="min-w-full bg-white rounded-xl dark:bg-black   ">
      <thead>
        {table.getHeaderGroups().map((hg) => (
          <tr key={hg.id}>
            {hg.headers.map((header) => {
              const sorted = header.column.getIsSorted();
              const isDateColumn = header.column.id === "Created_at";
              return (
                <th
                  key={header.id}
                  onClick={() => {
                    const current = header.column.getIsSorted();
                    if (current === "asc") {
                      header.column.clearSorting();
                    } else {
                      header.column.toggleSorting(false);
                    }
                  }}
                  className="cursor-pointer select-none font-medium border-b border-r pb-3"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}

                  {/* {sorted === "asc" ? <FaArrowUp /> : ""} */}
                  {isDateColumn && (
                    <RiArrowUpDownFill
                      className={`text-sm transition ${
                        sorted ? "text-blue-600" : "text-gray-400"
                      }`}
                    />
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className={`border-b  transition
            
            `}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-4 text-sm ">
                <span
                  className={`
        ${cell.column.columnDef.meta?.className ?? ""}
        ${
          cell.column.id === "Amt" // Only for Amount column
            ? row.original.status === "income"
              ? "text-green-600 font-semibold"
              : row.original.status === "expense"
              ? "text-red-600 font-semibold"
              : ""
            : ""
        }
      `}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
