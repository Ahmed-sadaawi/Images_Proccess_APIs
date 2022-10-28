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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const sharp_1 = __importDefault(require("../routes/api/sharp"));
// Testing endpoint;
const req = (0, supertest_1.default)(index_1.default);
describe("Test endpoint status", () => {
    it("Endpoint passed well👍", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get("/api?file=img1&width=400&height=200");
        expect(res.status).toBe(200);
    }));
    it("Test welcome status function ", () => __awaiter(void 0, void 0, void 0, function* () {
        const wel = yield req.get("/");
        expect(wel.status).toBe(200);
    }));
});
describe("Image Test", () => {
    it("Test Image proccess with resizing", () => __awaiter(void 0, void 0, void 0, function* () {
        expect((0, sharp_1.default)(200, 200, "img3", "./images/resizing/img1_400_200.jpg")).not.toBeUndefined();
    }));
});
