import query from "../../connection.js";

const sqlStringEvidence = `CREATE TABLE IF NOT EXISTS evidence (
stage INTEGER, evidence TEXT)`;

async function createEvidenceTable() {
  const res = await query(sqlStringEvidence);
  console.log("Created evidence table", res);
}

createEvidenceTable();
