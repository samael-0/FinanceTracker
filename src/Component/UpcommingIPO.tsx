import { useTokenStore } from "@/store/tokenstore";
import axios, { type AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

export interface IpoData {
  company_name: string;
  finid: number;
  Sector: string;
  type: string;
  shares_offered: number;
  issue_manager: string;
  offer_price: string;
  offered_to: string;
  application_date: string; // or Date
  approval_date: string; // or Date
  open_date: string | null; // can be null
  close_date: string | null; // can be null
  Status: string;
  filing_date: string; // included from your previous data
}

export interface IpoResponse {
  response: IpoData[];
}

export default function UpcommingIPO() {
  // const [ipodata, setIpodata] = useState<IpoData>();

  const data = useTokenStore((state) => state.ipodata);
  console.log("token store", data);
  const setIpoData = useTokenStore((state) => state.setIpoData);

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get<IpoResponse>(
          "https://www.onlinekhabar.com/smtm/home/ipo-corner-upcoming"
        );

        const data = await response.data;
        setIpoData(data.response);
        console.log("hello", response.data.response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  return <div>UpcommingIPO</div>;
}
