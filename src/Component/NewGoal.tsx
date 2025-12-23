import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type formData = {
  goalName: string;
  goalAmt: number;
};
export default function NewGoal() {
  const { register, handleSubmit } = useForm<formData>();

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 ">
      <label htmlFor="goalName" className="text-black">
        Goal Name
      </label>
      <Input {...register("goalName")} type="text" placeholder="Goal Name" />

      <label htmlFor="goalAmt" className="text-black">
        Goal Amount
      </label>
      <Input {...register("goalAmt")} type="text" placeholder="Goal Amt " />
      <Button type="submit" className="w-[4rem] m-auto shadow-4xl">
        Save
      </Button>
    </form>
  );
}
