import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ReactNode } from "react";

type propData = {
  dialogTrigger: string;
  dialogTitle: string;
  children: ReactNode;
};

export default function CustomDialog({
  dialogTitle,
  dialogTrigger,
  children,
}: propData) {
  return (
    <Dialog>
      <DialogTrigger className="border-2 px-1 rounded-sm bg-black text-white">
        {dialogTrigger}
      </DialogTrigger>
      <DialogContent className="w-[25rem]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
