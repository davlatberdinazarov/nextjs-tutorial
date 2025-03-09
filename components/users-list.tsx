"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { UpdateData } from "./crud/crud-dialogs/update-dialog";
import { DeleteData } from "./crud/crud-dialogs/delete-dialog";

export interface UserProps {
  _id: string;
  name: string;
  email: string;
  password: string | number;
}

export default function UsersList({ users }: { users: UserProps[] }) {
  return (
    <Table className="border border-gray-300 shadow-md rounded-md">
      <TableCaption>List of registered users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Password</TableHead>
          <TableHead className="w-[140px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.password}</TableCell>
            <TableCell className="flex gap-3 justify-center">
              <UpdateData data={user}/>
              <DeleteData id={user._id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total Users</TableCell>
          <TableCell className="text-center">{users.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
