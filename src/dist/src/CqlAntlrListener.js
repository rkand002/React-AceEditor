"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CqlVersionCreator_1 = __importDefault(require("./CqlVersionCreator"));
const CqlIncludeCreator_1 = __importDefault(require("./CqlIncludeCreator"));
const CqlCodeSystemCreator_1 = __importDefault(require("./CqlCodeSystemCreator"));
const CqlCodeValueSystemCreator_1 = __importDefault(require("./CqlCodeValueSystemCreator"));
const CqlCodeCreator_1 = __importDefault(require("./CqlCodeCreator"));
const CqlParameterCreator_1 = __importDefault(require("./CqlParameterCreator"));
const CqlContextCreator_1 = __importDefault(require("./CqlContextCreator"));
const CqlExpressionDefinitionCreator_1 = __importDefault(require("./CqlExpressionDefinitionCreator"));
const CqlExpressionVisitor_1 = __importDefault(require("./CqlExpressionVisitor"));
class CqlAntlrListener {
    constructor(cqlResult) {
        this.cqlResult = cqlResult;
    }
    enterLibraryDefinition(ctx) {
        const cqlVersionCreator = new CqlVersionCreator_1.default(ctx);
        this.cqlResult.library = cqlVersionCreator.buildDao();
    }
    enterUsingDefinition(ctx) {
        const cqlVersionCreator = new CqlVersionCreator_1.default(ctx);
        this.cqlResult.using = cqlVersionCreator.buildDao();
    }
    enterIncludeDefinition(ctx) {
        const cqlCode = new CqlIncludeCreator_1.default(ctx).buildDao();
        if (cqlCode) {
            this.cqlResult.includes.push(cqlCode);
        }
    }
    enterCodesystemDefinition(ctx) {
        const cqlCodeSystem = new CqlCodeSystemCreator_1.default(ctx).buildDao();
        if (cqlCodeSystem) {
            this.cqlResult.codeSystems.push(cqlCodeSystem);
        }
    }
    enterValuesetDefinition(ctx) {
        const cqlCode = new CqlCodeValueSystemCreator_1.default(ctx).buildDao();
        if (cqlCode) {
            this.cqlResult.valueSets.push(cqlCode);
        }
    }
    enterCodeDefinition(ctx) {
        const cqlCode = new CqlCodeCreator_1.default(ctx).buildDao();
        if (cqlCode) {
            this.cqlResult.codes.push(cqlCode);
        }
    }
    enterParameterDefinition(ctx) {
        const cqlCode = new CqlParameterCreator_1.default(ctx).buildDao();
        if (cqlCode) {
            this.cqlResult.parameters.push(cqlCode);
        }
    }
    enterContextDefinition(ctx) {
        this.cqlResult.context = new CqlContextCreator_1.default(ctx).buildDao();
    }
    enterExpressionDefinition(ctx) {
        const cqlCode = new CqlExpressionDefinitionCreator_1.default(ctx).buildDao();
        if (cqlCode) {
            this.cqlResult.expressionDefinitions.push(cqlCode);
            const cqlExpressionVisitor = new CqlExpressionVisitor_1.default(this.cqlResult);
            cqlExpressionVisitor.visit(ctx);
        }
    }
}
exports.default = CqlAntlrListener;
//# sourceMappingURL=CqlAntlrListener.js.map