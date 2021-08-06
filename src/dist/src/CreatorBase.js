"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AntlrUtils_1 = __importDefault(require("./AntlrUtils"));
class CreatorBase {
    constructor(ctx, cqlDao) {
        this.ctx = ctx;
        this.cqlDao = cqlDao;
    }
    processLineInfo() {
        this.cqlDao.start = this.buildLineInfo(this.ctx.start);
        this.cqlDao.stop = this.buildLineInfo(this.ctx.stop);
    }
    buildDao() {
        this.cqlDao.text = AntlrUtils_1.default.findText(this.ctx);
        this.processLineInfo();
        if (typeof this.cqlDao.text === "string") {
            return this.build();
        }
        return undefined;
    }
    buildLineInfo(token) {
        if (token) {
            const lineInfo = {};
            lineInfo.line = token.line;
            lineInfo.position = token.charPositionInLine;
            if (token.charPositionInLine !== 0) {
                lineInfo.position += token.stopIndex - token.startIndex;
            }
            return lineInfo;
        }
        return undefined;
    }
    findChildText(cqlLexerId, occurrence = 1, children = this.ctx.children) {
        return AntlrUtils_1.default.findChildText(children, cqlLexerId, occurrence);
    }
}
exports.default = CreatorBase;
//# sourceMappingURL=CreatorBase.js.map