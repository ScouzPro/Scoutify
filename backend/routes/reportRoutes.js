import express from "express";
import { createReport, getAllReports, updateReport, deleteReport } from "../controllers/reportController.js";

const router = express.Router();

router.post('/reports', createReport);
router.get('/reports', getAllReports);
router.put('/reports/:id', updateReport);
router.delete('/reports/:id', deleteReport);

export default router;