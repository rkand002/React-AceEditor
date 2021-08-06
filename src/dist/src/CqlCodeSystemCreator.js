"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreatorBase_1 = __importDefault(require("./CreatorBase"));
const cqlLexer_1 = require("../generated/cqlLexer");
class CqlCodeSystemCreator extends CreatorBase_1.default {
    constructor(ctx) {
        super(ctx, {});
    }
    build() {
        this.cqlDao.oid = this.findChildText(cqlLexer_1.cqlLexer.STRING);
        this.cqlDao.name = this.findChildText(cqlLexer_1.cqlLexer.QUOTEDIDENTIFIER);
        this.cqlDao.version = this.findChildText(cqlLexer_1.cqlLexer.STRING, 2);
        return this.cqlDao;
    }
}
exports.default = CqlCodeSystemCreator;
//# sourceMappingURL=CqlCodeSystemCreator.js.map