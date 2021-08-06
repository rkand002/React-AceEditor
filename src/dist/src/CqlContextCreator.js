"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreatorBase_1 = __importDefault(require("./CreatorBase"));
const generated_1 = require("../generated");
class CqlContextCreator extends CreatorBase_1.default {
    constructor(ctx) {
        super(ctx, {});
    }
    build() {
        this.cqlDao.name = this.findChildText(generated_1.cqlLexer.IDENTIFIER);
        return this.cqlDao;
    }
}
exports.default = CqlContextCreator;
//# sourceMappingURL=CqlContextCreator.js.map