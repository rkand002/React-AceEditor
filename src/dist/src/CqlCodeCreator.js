"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreatorBase_1 = __importDefault(require("./CreatorBase"));
const generated_1 = require("../generated");
class CqlCodeCreator extends CreatorBase_1.default {
    constructor(ctx) {
        super(ctx, {});
    }
    build() {
        this.cqlDao.name = this.findChildText(generated_1.cqlLexer.QUOTEDIDENTIFIER);
        this.cqlDao.codeId = this.findChildText(generated_1.cqlLexer.STRING);
        this.cqlDao.codeSystem = this.findChildText(generated_1.cqlLexer.QUOTEDIDENTIFIER, 2);
        return this.cqlDao;
    }
}
exports.default = CqlCodeCreator;
//# sourceMappingURL=CqlCodeCreator.js.map