import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  ExpenseType: string;
  ExpenseAmt: number;
  Remarks: string;
};

export default function NewIncome() {
  const { register, handleSubmit } = useForm<FormData>();
  const reg = register("ExpenseType");
  console.log(reg);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!data) {
      toast("something went wrong");
    } else {
      toast("worked");
    }
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input
        {...register("ExpenseType")}
        type="text"
        placeholder="ExpenseType"
      />
      <Input
        {...register("ExpenseAmt")}
        type="number"
        placeholder="ExpenseAmount"
      />
      <Input {...register("Remarks")} type="text" placeholder="Remarks" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
