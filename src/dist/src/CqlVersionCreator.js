"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreatorBase_1 = __importDefault(require("./CreatorBase"));
const AntlrUtils_1 = __importDefault(require("./AntlrUtils"));
const generated_1 = require("../generated");
class CqlVersionCreator extends CreatorBase_1.default {
    constructor(ctx, cqlVersion) {
        super(ctx, !cqlVersion ? {} : cqlVersion);
    }
    static setNameVersion(children, cqlDao) {
        /* eslint-disable no-param-reassign */
        cqlDao.name = AntlrUtils_1.default.findChildText(children, generated_1.cqlLexer.IDENTIFIER);
        cqlDao.version = AntlrUtils_1.default.findChildText(children, generated_1.cqlLexer.STRING);
        /* eslint-enable no-param-reassign */
    }
    build() {
        CqlVersionCreator.setNameVersion(this.ctx.children, this.cqlDao);
        return this.cqlDao;
    }
}
exports.default = CqlVersionCreator;
//# sourceMappingURL=CqlVersionCreator.js.map