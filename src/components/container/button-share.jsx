"use client";

import { Copy } from "lucide-react";

import { Button } from "@/components/UI/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import Image from "next/image";
import { toast } from "sonner";

export default function ButtonShare({ children, classname, link, ...props }) {
  const handleCopy = () => {
    const link = document.getElementById("link").value;
    navigator.clipboard.writeText(link).then(
      () => {
        toast.success("Link copied to clipboard");
      },
      (err) => {
        toast.error("Failed to copy");
      }
    );
  };

  return (
    <Dialog {...props}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-white text-black max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-medium">Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              className="border-[#e5e5e5] bg-white ring-offset-white placeholder:text-[#737373] focus-visible:ring-[#0a0a0a]"
              id="link"
              defaultValue={link}
              readOnly
            />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3 bg-[#1e1e1e] text-[#fafafa] hover:bg-[#1e1e1e]/90"
            onClick={handleCopy}
          >
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        {/* <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
