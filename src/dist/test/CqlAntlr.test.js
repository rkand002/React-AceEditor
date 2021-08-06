"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testCql_1 = __importDefault(require("./testCql"));
const CqlAntlr_1 = __importDefault(require("../src/CqlAntlr"));
describe('test antlr', () => {
    it('parse', () => {
        var _a;
        const cqlAntlr = new CqlAntlr_1.default(testCql_1.default);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.codes.length).toBe(1);
        expect(cqlResult.valueSets.length).toBe(4);
        expect(cqlResult.codeSystems.length).toBe(3);
        expect(cqlResult.parameters.length).toBe(1);
        expect((_a = cqlResult.context) === null || _a === void 0 ? void 0 : _a.name).toEqual('Patient');
        expect(cqlResult.expressionDefinitions.length).toEqual(6);
        // console.log(JSON.stringify(cqlResult, null, 2));
    });
});
//# sourceMappingURL=CqlAntlr.test.js.map