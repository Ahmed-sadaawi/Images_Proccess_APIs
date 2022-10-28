/* بسم الله الرحمن الرحيم */

import { NextFunction, Request, Response } from "express";

function welcome(_req: Request, res: Response, next: NextFunction) {
  res.send("You'er welcome to ==> IMAGES PROCCESSING APIs");
  next();
}

export default welcome;
