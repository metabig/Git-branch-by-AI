import responseBranchName from '../mocks/branch-response.json';

export default function useBranchNamerAI() {
  const branchName = responseBranchName.result;

  return {branchName};
}