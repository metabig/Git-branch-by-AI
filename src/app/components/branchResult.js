function BranchResultName({ branchName }) {
  return <h1>{ branchName }</h1>;
}

function BranchNoName() {
  return <></>
}

export default function BranchResult({ branchName }) {
  return <>{branchName ? <BranchResultName branchName={branchName} /> : BranchNoName}</>;
}
