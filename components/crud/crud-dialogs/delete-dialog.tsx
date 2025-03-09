import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { $api } from "@/utils";
import { Trash2 } from 'lucide-react';
import { useState } from "react";
import { toast } from "sonner";

export function DeleteData({ id }: { id: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await $api.delete(`/users/${id}`)
      setLoading(false);
      toast("User deleted successfully");
      setOpen(false); // 
      
    } catch (error: any) {
      setLoading(false);
      toast("User deleted successfully", {
        description: error.message
      });
      setOpen(false); // 
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Trash2 className="w-6 h-6 text-red-500" />
        </Button>
      </DialogTrigger>
      <DialogContent key="dialog-content" className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleDelete} className="bg-red-500 text-white hover:bg-red-700 " type="submit">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
