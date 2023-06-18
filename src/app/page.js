import BranchGenerator from "./components/branchGenerator.js";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-50">
      <header>
        <h1 className="text-3xl font-bold text-center">
          Branch name generator
        </h1>
      </header>
      <main className="flex-grow flex justify-center items-center">
        <BranchGenerator />
      </main>
    </div>
  );
}
