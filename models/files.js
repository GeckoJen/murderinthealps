import  query  from "../db/connection.js";

export async function getFilesByStageNumber(number) {
  const result = await query(`SELECT * FROM evidence WHERE stage <= $1;`, [number]);
  return result.rows;
}
