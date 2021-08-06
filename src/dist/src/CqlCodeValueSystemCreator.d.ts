import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlValueSet from "./dto/CqlValueSet";
export default class CqlValueSetSystemCreator extends CreatorBase<CqlValueSet> {
    constructor(ctx: ParserRuleContext);
    protected build(): CqlValueSet;
}
//# sourceMappingURL=CqlCodeValueSystemCreator.d.ts.map