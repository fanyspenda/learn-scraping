import Express, { Response, Request } from "express";
import Cors from "cors";
const app = Express();
import IndexRouter from "config/router";
require("./config/db");

app.use(Express.json());
app.use(Cors());
app.use(IndexRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
  res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server Running");
});
