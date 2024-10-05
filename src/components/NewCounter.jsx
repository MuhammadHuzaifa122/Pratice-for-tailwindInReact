import React, { useState } from "react";

export default function NewCounter({ name }) {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);
  return (
    <>
      <h2 className="mt-4">{name}</h2>
      <div className="flex items-center gap-4 mt-4">
        <button
          className="bg-blue-500 px-4 py-2 rounded "
          onClick={() => setcount(count - 1)}
        >
          -
        </button>
        <h2>{count}</h2>
        <button
          className="bg-blue-500 px-4 py-2 rounded "
          onClick={() => setcount(count + 1)}
        >
          +
        </button>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <button
          className="bg-blue-500 px-4 py-2 rounded "
          onClick={() => setcount2(count2 - 1)}
        >
          -
        </button>
        <h2>{count2}</h2>
        <button
          className="bg-blue-500 px-4 py-2 rounded "
          onClick={() => setcount2(count2 + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}
