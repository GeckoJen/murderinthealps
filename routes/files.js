import express from "express";
const router = express.Router();

import { getFilesByStageNumber } from '../models/files.js';

/* GET files listing. */
router.get("/:stage", async function (req, res) {
  const number = Number(req.params.stage);
  const data = await getFilesByStageNumber(number);

  res.json({
    success: true,
    payload: data
  });
});

export default router;
