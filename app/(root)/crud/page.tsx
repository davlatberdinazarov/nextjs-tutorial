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

export default function Crud() {
  return (
    <div>Crud</div>
  )
}

