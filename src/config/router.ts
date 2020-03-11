import { Router } from "express";
import scraperRouter from "api/scraper/scraperRouter";

const router = Router();

router.use("/scraper", scraperRouter);
export default router;
