// // app/users/ssr/page.tsx

// import UsersList, { UserProps } from "@/components/users-list";


// async function getServerUsers() {
//   const res = await fetch("http://localhost:3002/api/users", {
//     cache: "no-store",
//   });
//   return res.json();
// }

// export default async function UsersPageSSR() {
//   const users = await getServerUsers();

//   return (
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-center text-xl font-bold mt-5">
//         Users List (SSR - Server Side Rendering)
//       </h1>
//       <UsersList users={users} />
//     </div>
//   );
// }


// async function getStaticUsers() {
//   const res = await fetch("http://localhost:3002/api/users", {
//     next: { revalidate: 60 }, // 60 soniyada yangilash
//   });
//   return res.json();
// }

// export default async function UsersPageSSG() {
//   const users = await getStaticUsers();

//   return (
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-center text-xl font-bold mt-5">
//         Users List (SSG - Static Site Generation)
//       </h1>
//       <UsersList users={users} />
//     </div>
//   );
// }

// app/users/csr/page.tsx
"use client";

import { useEffect, useState } from "react";
import UsersList, { UserProps } from "@/components/users-list";

export default function UsersPageCSR() {
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

