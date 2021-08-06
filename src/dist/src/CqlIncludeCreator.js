"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreatorBase_1 = __importDefault(require("./CreatorBase"));
const CqlVersionCreator_1 = __importDefault(require("./CqlVersionCreator"));
const generated_1 = require("../generated");
class CqlIncludeCreator extends CreatorBase_1.default {
    constructor(ctx) {
        super(ctx, {});
    }
    build() {
        CqlVersionCreator_1.default.setNameVersion(this.ctx.children, this.cqlDao);
        this.cqlDao.called = this.findChildText(generated_1.cqlLexer.IDENTIFIER, 2);
        this.cqlDao.hits = 0;
        return this.cqlDao;
    }
}
exports.default = CqlIncludeCreator;
//# sourceMappingURL=CqlIncludeCreator.js.map