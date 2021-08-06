import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlContext from "./dto/CqlContext";
export default class CqlContextCreator extends CreatorBase<CqlContext> {
    constructor(ctx: ParserRuleContext);
    protected build(): CqlContext;
}
//# sourceMappingURL=CqlContextCreator.d.ts.map