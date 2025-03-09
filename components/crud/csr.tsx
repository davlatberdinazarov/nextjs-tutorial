"use client"
import { useEffect, useState } from "react";
import UsersList, { UserProps } from "@/components/users-list";
import Loader from "@/lib/loader";

export default function ClientSideRendering() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-xl font-bold mt-5">
        Users List (CSR - Client Side Rendering)
      </h1>
      {loading ? <Loader/> : <UsersList users={users} />}
    </div>
  );
}

