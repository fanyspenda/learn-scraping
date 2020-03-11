import { Router } from "express";
import scraperController from "./scraperController";

const scraperRouter = Router();

scraperRouter.use("/", scraperController.store);

export default scraperRouter;
