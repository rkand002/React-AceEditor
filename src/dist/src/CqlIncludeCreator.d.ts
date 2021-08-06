import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlInclude from "./dto/CqlInclude";
export default class CqlIncludeCreator extends CreatorBase<CqlInclude> {
    constructor(ctx: ParserRuleContext);
    protected build(): CqlInclude;
}
//# sourceMappingURL=CqlIncludeCreator.d.ts.map