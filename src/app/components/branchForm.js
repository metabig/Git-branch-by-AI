"use client";

import { useEffect, useState } from "react";

export default function BranchDescriptionForm() {
  const [ticket, setTicket] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const { id, description } = Object.fromEntries(
      new window.FormData(event.target)
    );
    setTicket({ id, description });
    console.log(id, description);
  };

  useEffect(() => {
    console.log("Ticket changed", ticket);
  }, [ticket]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="id"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="142166"
      />
      <input
        name="description"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Fix dashboard bug that appears when clicking on images"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Generate branch name
      </button>
    </form>
  );
}
