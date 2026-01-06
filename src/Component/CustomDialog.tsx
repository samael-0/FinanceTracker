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
  tailwindcss: ReactNode;
};

export default function CustomDialog({
  dialogTitle,
  dialogTrigger,
  children,
  tailwindcss,
}: propData) {
  return (
    <Dialog>
      <DialogTrigger className={`${tailwindcss}`}>
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
