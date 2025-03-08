// components/UsersList.tsx
export interface UserProps {
    _id: string;
    name: string;
    email: string;
    password: string | number;
  }
  
  export default function UsersList({ users }: { users: UserProps[] }) {
    return (
      <ul className="border border-gray-300 rounded p-4 mt-3">
        {users.map((user) => (
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
  