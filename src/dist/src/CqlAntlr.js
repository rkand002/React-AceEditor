"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const tree_1 = require("antlr4ts/tree");
const generated_1 = require("../generated");
const generated_2 = require("../generated");
const CqlAntlrListener_1 = __importDefault(require("./CqlAntlrListener"));
class CqlAntlr {
    constructor(cql) {
        this.cql = cql;
    }
    parse() {
        const tree = this.buildTree();
        const result = CqlAntlr.initCqlResult();
        const listener = new CqlAntlrListener_1.default(result);
        tree_1.ParseTreeWalker.DEFAULT.walk(listener, tree);
        return result;
    }
    static initCqlResult() {
        return {
            includes: [],
            codeSystems: [],
            valueSets: [],
            codes: [],
            parameters: [],
            expressionDefinitions: [],
            errors: []
        };
    }
    buildTree() {
        const parser = this.buildParser();
        return parser.library();
    }
    buildParser() {
        const charStream = antlr4ts_1.CharStreams.fromString(this.cql);
        // eslint-disable-next-line new-cap
        const lexer = new generated_1.cqlLexer(charStream);
        const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        // eslint-disable-next-line new-cap
        return new generated_2.cqlParser(tokenStream);
    }
}
exports.default = CqlAntlr;
//# sourceMappingURL=CqlAntlr.js.map