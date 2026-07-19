export type GitCleanliness = "clean" | "dirty";

export interface GitStatus {
  repository: string;
  branch: string;
  commit: string;
  cleanliness: GitCleanliness;
  verified: boolean;
  staged: string;
}
