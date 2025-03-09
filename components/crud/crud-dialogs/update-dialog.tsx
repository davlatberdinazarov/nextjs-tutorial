"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IUser } from "@/types";
import { $api } from "@/utils";
import { Pencil } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

export function UpdateData({ data }: { data: IUser }) {
  const [form, setForm] = useState<IUser>({
    name: data.name || "",
    email: data.email || "",
    password: data.password || "",
  });

  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false); // Dialog state qo‘shildi

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await $api.put(`users/${data._id}`, form);
      setForm({ name: "", email: "", password: "" });
      toast("User updated successfully");
      setOpen(false); // Foydalanuvchi qo‘shilganda dialog yopiladi
    } catch (error) {
      setError("Something went wrong. Please try again.");
      toast.error("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="cursor-pointer transition-colors duration-100"
          variant="outline"
        >
          <Pencil size="20" className="text-green-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-900">
        <DialogHeader>
          <DialogTitle>Update User</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="col-span-3 border-gray-300"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="col-span-3 border-gray-300"
              type="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="col-span-3 border-gray-300"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <DialogFooter>
            <Button type="submit" disabled={loading} className="cursor-pointer">
              {loading ? "Updating..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
