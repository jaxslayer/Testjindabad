"use client";

import Card from "@/Components/Card";
import React, { JSX, useEffect } from "react";

export default function Home(): JSX.Element {
  const [data, setData] = React.useState<
    Array<{ name: string; email: string; id: number }>
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    };

    fetchData()
      .then((data) => setData(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold items-center justify-center text-center mt-4">
          Welcome to the home page
        </h1>
        {data.map((user) => (
          <Card
            name={user.name}
            email={user.email}
            id={user.id}
            key={user.id}
          />
        ))}
      </div>
    </>
  );
}
