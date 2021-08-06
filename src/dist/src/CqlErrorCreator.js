"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreatorBase_1 = __importDefault(require("./CreatorBase"));
class CqlErrorCreator extends CreatorBase_1.default {
    constructor(ctx) {
        super(ctx, {});
    }
    processLineInfo() {
        super.processLineInfo();
        if (this.cqlDao.stop) {
            this.cqlDao.stop.position += (this.ctx.start.stopIndex - this.ctx.start.startIndex);
        }
    }
    build() {
        this.cqlDao.name = this.findChildText(this.ctx.start.type);
        // if (this.cqlDao.name) {
        //   this.cqlDao.name = this.cqlDao.name.replace(/"/g, "");
        // }
        this.cqlDao.message = "Cannot find symbol " + this.cqlDao.name + ".";
        return this.cqlDao;
    }
}
exports.default = CqlErrorCreator;
//# sourceMappingURL=CqlErrorCreator.js.map