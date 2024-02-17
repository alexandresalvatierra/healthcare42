import express from "express";
import { ShiftController } from "./presentation/controllers/shift.controller";
const router = express.Router();
const shiftController = new ShiftController();

router.get("/", shiftController.index);
router.post("/calculate-overlap", shiftController.calculateOverlap);

export default router;
