/*بسم الله اارحمن الرحيم*/

import express, { Request, Response, Router } from "express";
import resizing from "./sharp";
import path from "path";
import fs from "fs";
const an_endpoint: Router = express();

an_endpoint.get("/api", async (req: Request, res: Response): Promise<void> => {
  //Inputs or Querys variables:
  const file = req.query.file as string;
  const width = req.query.width as string;
  const height = req.query.height as string;
  let w: number | undefined, h: number | undefined;
  // Change width and height to intiger values.

  /**VALIDATION INPUTS OR QUERIES**/
  // It returns undefined  width, height or file when query doesn't added.
  if (file === undefined) res.status(404).send("File query is undefined~!"); // check query
  if (width === undefined) res.status(404).send("Width query is undefined~!"); // check query
  if (height === undefined) res.status(404).send("Heihgt query is undefined~!"); // check query
  if (file === "") res.status(404).send("File value is not assigned"); // check value
  if (width === "") res.status(404).send("Width value is not assigned"); // check value
  if (height === "") res.status(404).send("Heihgt value is undefined~!"); // check value
  if (width) w = parseInt(width);
  if (height) h = parseInt(height);
  if (file !== "img1" && file !== "img2" && file !== "img3" && file !== "img4" && file !== "img5") {
    res.status(400).send("Choose an img from here ==> [ img1 , img2 , img3 , img4 , img5 ] and typeing it as a query!");
  } else if (typeof w === "number" && typeof h === "number") {
    if (w === 0 || h === 0) {
      console.log(w);
      console.log(h);
      res.send("try to type a valid number to be greater than 0");
    } else if (w && h) {
      // Check folder.
      const dir = "./images/resizing";
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);

      const img = `images/${file}.jpg` as string;
      const outImg = `${path.resolve("./")}/images/resizing/${file}_${w}_${h}.jpg` as string;
      // Resizing with sharp:
      if (!fs.existsSync(outImg)) {
        await resizing(w, h, img, outImg).then(() => res.sendFile(outImg));
      } else {
        res.send("You need to resize the Image");
      }
    }
  }
});

export default an_endpoint;
