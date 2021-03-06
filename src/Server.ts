import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import cors from "cors";

import express, { Request, Response, NextFunction } from "express";
import { BAD_REQUEST } from "http-status-codes";
import "express-async-errors";
import { postgraphile } from "postgraphile";
import { NodePlugin } from "graphile-build";

import BaseRouter from "./routes";
import logger from "@shared/Logger";

// Init express
const app = express();

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

// Add APIs
app.use("/api", BaseRouter);

// GraphQL API
app.use(
  postgraphile(process.env.CONNECTION_STRING || "", "public", {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    skipPlugins: [NodePlugin],
  })
);

// Print API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message, err);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

const mainPage = path.join(__dirname, "public", "index.html");
app.get("*", (req: Request, res: Response) => {
  res.sendFile(mainPage);
});

// Export express instance
export default app;
