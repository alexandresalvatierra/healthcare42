import express from "express";
import shift from "./shift/shift.module";
const router = express.Router();

router.use("/", shift);

export default router;
