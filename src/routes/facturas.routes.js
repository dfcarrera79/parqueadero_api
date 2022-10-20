import { Router } from "express";
import { getFacturas } from "../controllers/facturas.controllers";

const router = Router();

router.get("/facturas", getFacturas);
router.get("/hello", function(req, res) {
  let name = req.query.name;
  console.log(name);
});

export default router;
