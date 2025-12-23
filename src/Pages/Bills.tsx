import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import axios from "axios";
import { useEffect, useState } from "react";

interface IpoData {
  company_name: string;
  finid: number;
  Sector: string;
  type: string;
  shares_offered: number;
  issue_manager: string;
  offer_price: string;
  offered_to: string;
  application_date: string;
  approval_date: string;
  open_date: string | null;
  close_date: string | null;
  Status: string;
  filing_date: string;
}

interface IpoResponse {
  response: IpoData[];
}

const ipoColumns = [
  "Company Name",
  "Sector",
  "Shares Offered",
  "Offer Price",
  "Open Date",
  "Close Date",
];

const billColumns = [
  "Due Date",
  "Bill Name",
  "Description",
  "Last Charge",
  "Amount",
];

const billData = [
  {
    date: "2025-12-20",
    billName: "NMB SIP",
    description: "Monthly SIP",
    lastCharge: "2025-11-20",
    amount: 1500,
  },
  {
    date: "2025-12-20",
    billName: "NIC Asia SIP",
    description: "Monthly SIP",
    lastCharge: "2025-11-20",
    amount: 1500,
  },
];

export default function Bills() {
  const [data, setData] = useState<IpoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await axios.get<IpoResponse>(
          "https://www.onlinekhabar.com/smtm/home/ipo-corner-upcoming"
        );
        setData(res.data.response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchdata();
  }, []);

  return (
    <div className="bg-bgcolor min-h-screen p-6 space-y-8">
      {/* IPO Section */}
      <div className="bg-white border rounded-2xl shadow-sm p-5">
        <p className="text-xl font-semibold text-gray-700 mb-4">
          Upcoming IPOs
        </p>

        <div className="overflow-auto rounded-xl">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                {ipoColumns.map((col, i) => (
                  <TableHead
                    key={i}
                    className="font-semibold text-gray-700 whitespace-nowrap"
                  >
                    {col}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={ipoColumns.length}
                    className="text-center py-6 text-gray-500"
                  >
                    Loading IPO data...
                  </TableCell>
                </TableRow>
              ) : (
                data.map((d, i) => (
                  <TableRow
                    key={i}
                    className="hover:bg-gray-50 transition border-b last:border-none"
                  >
                    <TableCell>{d.company_name}</TableCell>
                    <TableCell>{d.Sector}</TableCell>
                    <TableCell>{d.shares_offered}</TableCell>
                    <TableCell>{d.offer_price}</TableCell>
                    <TableCell>{d.open_date ?? "-"}</TableCell>
                    <TableCell>{d.close_date ?? "-"}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Bills Section */}
      <div className="bg-white border rounded-2xl shadow-sm p-5">
        <p className="text-xl font-semibold text-gray-700 mb-4">
          Upcoming Bills
        </p>

        <div className="overflow-auto rounded-xl">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                {billColumns.map((col, i) => (
                  <TableHead
                    key={i}
                    className="font-semibold text-gray-700 whitespace-nowrap"
                  >
                    {col}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {billData.map((d, i) => (
                <TableRow
                  key={i}
                  className="hover:bg-gray-50 transition border-b last:border-none"
                >
                  <TableCell>{d.date}</TableCell>
                  <TableCell>{d.billName}</TableCell>
                  <TableCell>{d.description}</TableCell>
                  <TableCell>{d.lastCharge}</TableCell>
                  <TableCell>{d.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
