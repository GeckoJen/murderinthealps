import query from "../../connection.js";

async function deleteTableData() {
  
    const res = await query(`DELETE FROM evidence;`);
    console.log("Deleted evidence table data", res);
  }

deleteTableData();
