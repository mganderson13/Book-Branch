import app from "../dist/public/server.js";
import serverless from "serverless-http";


export const handler = serverless(app);