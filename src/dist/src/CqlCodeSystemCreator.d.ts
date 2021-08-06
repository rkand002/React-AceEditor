import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlCodeSystem from "./dto/CqlCodeSystem";
import CqlVersion from "./dto/CqlVersion";
export default class CqlCodeSystemCreator extends CreatorBase<CqlCodeSystem> {
    constructor(ctx: ParserRuleContext);
    protected build(): CqlVersion;
}
//# sourceMappingURL=CqlCodeSystemCreator.d.ts.map