import { cqlParser } from "../generated";
import CqlResult from "./dto/CqlResult";
declare class CqlAntlr {
    private cql;
    constructor(cql: string);
    parse(): CqlResult;
    static initCqlResult(): CqlResult;
    private buildTree;
    buildParser(): cqlParser;
}
export default CqlAntlr;
//# sourceMappingURL=CqlAntlr.d.ts.map