/* بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ */

import express from "express";
import an_endpoint from "./routes/api/An_endpoint";
import welcome from "./routes/welcome";
const app = express();

app.get("/api", an_endpoint);

app.use("/", welcome);// middleware

// Start server at port 3000
app.listen(3000, () => console.log("Server started at=> http://localhost:3000"));

export default app;

/* سبحانك اللهم وبحمدك اشهد ان لا اله الا انت استغفرك واتوب اليك */ 