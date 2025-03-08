"use client";

import { useEffect, useState } from "react";

export interface UserProps {
  _id: string;
  name: string;
  email: string;
  password: string | number;
}

// 🔹 **SSG (Static Site Generation)**
export async function getStaticProps() {
  const res = await fetch("http://localhost:3002/api/users");
  const users = await res.json();

  return {
    props: { users },
    revalidate: 60, // 60 soniyada yangilash
  };
}

// 🔹 **SSR (Server-side Rendering)**
async function getServerUsers() {
  const res = await fetch("http://localhost:3002/api/users", {
    cache: "no-store",
  });
  return res.json();
}

export default function UsersPage({ users }: { users: UserProps[] }) {
  // 🔹 **CSR (Client-side Rendering)**
  const [clientUsers, setClientUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3002/api/users")
      .then((res) => res.json())
      .then((data) => {
        setClientUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {/* 🔹 SSR */}
      <h1 className="text-center text-xl font-bold mt-5">
        Users List (SSR - Server Side Rendering)
      </h1>
      <UsersList fetchUsers={getServerUsers} />

      {/* 🔹 SSG */}
      <h1 className="text-center text-xl font-bold mt-5">
        Users List (SSG - Static Site Generation)
      </h1>
      <UsersList users={users} />

      {/* 🔹 CSR */}
      <h1 className="text-center text-xl font-bold mt-5">
        Users List (CSR - Client Side Rendering)
      </h1>
      {loading ? <p>Loading...</p> : <UsersList users={clientUsers} />}
    </div>
  );
}

// 🔹 **Users List Component**
function UsersList({
  users,
  fetchUsers,
}: {
  users?: UserProps[];
  fetchUsers?: () => Promise<UserProps[]>;
}) {
  const [fetchedUsers, setFetchedUsers] = useState<UserProps[] | null>(null);

  useEffect(() => {
    if (fetchUsers) {
      fetchUsers().then((data) => setFetchedUsers(data));
    }
  }, [fetchUsers]);

  const displayUsers = fetchedUsers || users || [];

  return (
    <ul className="border border-gray-300 rounded p-4 mt-3">
      {displayUsers.map((user) => (
        <li
          key={user._id}
          className="my-2 flex justify-between border-b border-gray-400 pb-2"
        >
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.password}</p>
        </li>
      ))}
    </ul>
  );
}
