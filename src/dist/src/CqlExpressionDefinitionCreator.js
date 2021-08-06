"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreatorBase_1 = __importDefault(require("./CreatorBase"));
const CqlVersionCreator_1 = __importDefault(require("./CqlVersionCreator"));
const generated_1 = require("../generated");
const index_1 = require("./index");
class CqlExpressionDefinitionCreator extends CreatorBase_1.default {
    constructor(ctx) {
        super(ctx, {});
    }
    findExpressionType(children, lexerType, occurrence = 1) {
        if (children) {
            const foundChild = index_1.AntlrUtils.findChild(children, lexerType, occurrence);
            // this.processExpressionClass(foundChild, lexerType, occurrence);
        }
    }
    // private processExpressionClass(foundChild: ParseTree | undefined): void {
    //   if (foundChild) {
    //     const className = foundChild.constructor.name;
    //     console.log('InstanceName=' + className);
    //     this.cqlDao.expressionClass = className;
    //   }
    // }
    build() {
        CqlVersionCreator_1.default.setNameVersion(this.ctx.children, this.cqlDao);
        this.cqlDao.name = this.findChildText(generated_1.cqlLexer.QUOTEDIDENTIFIER, 1);
        this.cqlDao.expression = this.findChildText(generated_1.cqlLexer.IDENTIFIER, 1);
        if (!this.cqlDao.expression) {
            const foundChild = index_1.AntlrUtils.findChild(this.ctx.children, 37, 1);
            this.cqlDao.expression = this.findChildText(37, 1);
            // this.processExpressionClass(foundChild);
        }
        else {
            this.findExpressionType(this.ctx.children, generated_1.cqlLexer.IDENTIFIER, 1);
        }
        // console.log(this.cqlDao.expression);
        return this.cqlDao;
    }
}
exports.default = CqlExpressionDefinitionCreator;
//# sourceMappingURL=CqlExpressionDefinitionCreator.js.map