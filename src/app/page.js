"use client";
import { getBranchName } from "./cohere_generator/index.js";

import { useState } from "react";

export default function Home() {
  const [branchName, setBranchName] = useState(undefined);
  const [ticket, setTicket] = useState({
    id: "142166",
    description: "Fix dashboard bug that appears when clicking on images",
  });

  return (
    <main>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={ticket.id}
        onChange={(e) => setTicket({ ...ticket, id: e.target.value })}
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={ticket.description}
        onChange={(e) => setTicket({ ...ticket, description: e.target.value })}
      />
      <br></br>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        onClick={() =>
          setBranchName(getBranchName(ticket.id, ticket.description))
        }
      >
        Generate branch name
      </button>
      <div>{branchName && <h1>{branchName}</h1>}</div>
    </main>
  );
}
