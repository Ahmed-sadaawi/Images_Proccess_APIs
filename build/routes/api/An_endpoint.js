"use strict";
/*بسم الله اارحمن الرحيم*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("./sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const an_endpoint = (0, express_1.default)();
an_endpoint.get("/api", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Inputs or Querys variables:
    const file = req.query.file;
    const width = req.query.width;
    const height = req.query.height;
    let w, h;
    // Change width and height to intiger values.
    /**VALIDATION INPUTS OR QUERIES**/
    // It returns undefined  width, height or file when query doesn't added.
    if (file === undefined)
        res.status(404).send("File query is undefined~!"); // check query
    if (width === undefined)
        res.status(404).send("Width query is undefined~!"); // check query
    if (height === undefined)
        res.status(404).send("Heihgt query is undefined~!"); // check query
    if (file === "")
        res.status(404).send("File value is not assigned"); // check value
    if (width === "")
        res.status(404).send("Width value is not assigned"); // check value
    if (height === "")
        res.status(404).send("Heihgt value is undefined~!"); // check value
    if (width)
        w = parseInt(width);
    if (height)
        h = parseInt(height);
    if (file !== "img1" && file !== "img2" && file !== "img3" && file !== "img4" && file !== "img5") {
        res.status(400).send("Choose an img from here ==> [ img1 , img2 , img3 , img4 , img5 ] and typeing it as a query!");
    }
    else if (typeof w === "number" && typeof h === "number") {
        if (w === 0 || h === 0) {
            console.log(w);
            console.log(h);
            res.send("try to type a valid number to be greater than 0");
        }
        else if (w && h) {
            // Check folder.
            const dir = "./images/resizing";
            if (!fs_1.default.existsSync(dir))
                fs_1.default.mkdirSync(dir);
            const img = `images/${file}.jpg`;
            const outImg = `${path_1.default.resolve("./")}/images/resizing/${file}_${w}_${h}.jpg`;
            // Resizing with sharp:
            if (!fs_1.default.existsSync(outImg)) {
                yield (0, sharp_1.default)(w, h, img, outImg).then(() => res.sendFile(outImg));
            }
            else {
                res.send("You need to resize the Image");
            }
        }
    }
}));
exports.default = an_endpoint;
