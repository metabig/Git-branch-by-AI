"use client";
import { getBranchName } from "./cohere_generator/index.js";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [branchName, setBranchName] = useState(undefined);

  useEffect(() => {
    setBranchName(getBranchName("142166", "Fix dashboard bug that appears when clicking on images"));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {branchName ? <h1>{branchName}</h1> : <h1>Loading...</h1>}
      </div>
    </main>
  );
}
