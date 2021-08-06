"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreatorBase_1 = __importDefault(require("./CreatorBase"));
const generated_1 = require("../generated");
class CqlValueSetSystemCreator extends CreatorBase_1.default {
    constructor(ctx) {
        super(ctx, {});
    }
    build() {
        this.cqlDao.name = this.findChildText(generated_1.cqlLexer.QUOTEDIDENTIFIER);
        this.cqlDao.url = this.findChildText(generated_1.cqlLexer.STRING);
        this.cqlDao.hits = 0;
        return this.cqlDao;
    }
}
exports.default = CqlValueSetSystemCreator;
//# sourceMappingURL=CqlCodeValueSystemCreator.js.map