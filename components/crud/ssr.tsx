import UsersList from "@/components/users-list";

async function getServerUsers() {
  const res = await fetch("http://localhost:3002/api/users", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ServerSideRendering() {
  const users = await getServerUsers();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-xl font-bold mt-5">
        Users List (SSR - Server Side Rendering)
      </h1>
      <UsersList users={users} />
    </div>
  );
}
