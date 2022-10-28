/*بسم الله اارحمن الرحيم*/

import supertest from "supertest";
import app from "../index";
import resizing from "../routes/api/sharp";
// Testing endpoint;
const req = supertest(app);
describe("Test endpoint status", () => {
  it("Endpoint passed well👍", async () => {
    const res = await req.get("/api?file=img1&width=400&height=200");
    expect(res.status).toBe(200);
  });

  it("Test welcome status function ", async () => {
    const wel = await req.get("/");
    expect(wel.status).toBe(200);
  });
});

describe("Image Test", () => {
  it("Test Image proccess with resizing", async () => {
    expect(resizing(200, 200, "img3", "./images/resizing/img1_400_200.jpg")).not.toBeUndefined();
  });
});
