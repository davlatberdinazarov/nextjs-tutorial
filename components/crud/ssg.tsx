import UsersList from "../users-list";

async function getStaticUsers() {
  const res = await fetch("http://localhost:3002/api/users", {
    next: { revalidate: 60 }, // 60 soniyada yangilash
  });
  return res.json();
}

export default async function StaticSideGeneration() {
  const users = await getStaticUsers();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-xl font-bold mt-5">
        Users List (SSG - Static Site Generation)
      </h1>
      <UsersList users={users} />
    </div>
  );
}