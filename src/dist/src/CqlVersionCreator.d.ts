import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParseTree } from "antlr4ts/tree";
import CreatorBase from "./CreatorBase";
import CqlVersion from "./dto/CqlVersion";
export default class CqlVersionCreator extends CreatorBase<CqlVersion> {
    constructor(ctx: ParserRuleContext, cqlVersion?: CqlVersion);
    static setNameVersion(children: ParseTree[] | undefined, cqlDao: CqlVersion): void;
    protected build(): CqlVersion;
}
//# sourceMappingURL=CqlVersionCreator.d.ts.map