import BranchForm from "./branchForm";
import BranchResult from "./branchResult";
import useBranchNamerAI from "../hooks/useBranchNamerAI.js";

export default function BranchGenerator() {
  const { branchName } = useBranchNamerAI();

  return (
    <div>
      <BranchForm />
      <BranchResult branchName={branchName} />
    </div>
  );
}
