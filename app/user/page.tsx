"use client";

import React from "react";

export default function User() {
  const [counter, setCounter] = React.useState<number>(0);
  return (
    <>
      <div className="text-2xl">This is your counter</div>
      <div className="text-xl">Counter:{counter}</div>
      <div className="flex gap-4 mt-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCounter(counter + 1)}
        >
          increment
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCounter(counter - 1)}
        >
          decrement
        </button>
      </div>
    </>
  );
}
