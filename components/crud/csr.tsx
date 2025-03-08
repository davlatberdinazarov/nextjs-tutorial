"use client"
import { useEffect, useState } from "react";
import UsersList, { UserProps } from "@/components/users-list";

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
      {loading ? <p>Loading...</p> : <UsersList users={users} />}
    </div>
  );
}

