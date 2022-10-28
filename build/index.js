"use strict";
/* بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const An_endpoint_1 = __importDefault(require("./routes/api/An_endpoint"));
const welcome_1 = __importDefault(require("./routes/welcome"));
const app = (0, express_1.default)();
app.get("/api", An_endpoint_1.default);
app.use("/", welcome_1.default); // middleware
// Start server at port 3000
app.listen(3000, () => console.log("Server started at=> http://localhost:3000"));
exports.default = app;
/* سبحانك اللهم وبحمدك اشهد ان لا اله الا انت استغفرك واتوب اليك */ 
