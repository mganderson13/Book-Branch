import app from "../dist/public/server";
import serverless from "serverless-http";


export const handler = serverless(app);