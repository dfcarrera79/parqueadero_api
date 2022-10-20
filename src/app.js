import express from "express";
import config from "./config";
import facturaRoutes from "./routes/facturas.routes";

const app = express();

// settings
app.set("port", config.port);
app.use(facturaRoutes);



export default app;
