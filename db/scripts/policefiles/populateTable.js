import query from "../../connection.js";

import { evidenceData } from "../../data.js";

async function populateEvidenceTable() {
  for (let i = 0; i < evidenceData.length; i++) {
    const res = await query(
      `INSERT INTO evidence (stage, evidence) VALUES ($1, $2) RETURNING *;`, [evidenceData[i].stage, evidenceData[i].evidence]
    );
    console.log("Populated evidence table", res);
  }
}

populateEvidenceTable();
