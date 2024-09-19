import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req, res) => {
  res.send("Penus");
});

router.post("/teste", (req, res) => {
  res.status(StatusCodes.ACCEPTED).send("Marimba");
  console.log(req.body);
});

export { router };
