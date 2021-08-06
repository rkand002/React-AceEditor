import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlCode from "./dto/CqlCode";
export default class CqlCodeCreator extends CreatorBase<CqlCode> {
    constructor(ctx: ParserRuleContext);
    protected build(): CqlCode;
}
//# sourceMappingURL=CqlCodeCreator.d.ts.map