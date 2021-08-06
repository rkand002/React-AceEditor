import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlParameter from "./dto/CqlParameter";
export default class CqlParameterCreator extends CreatorBase<CqlParameter> {
    constructor(ctx: ParserRuleContext);
    protected build(): CqlParameter;
}
//# sourceMappingURL=CqlParameterCreator.d.ts.map