import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlError from "./dto/CqlError";
export default class CqlErrorCreator extends CreatorBase<CqlError> {
    constructor(ctx: ParserRuleContext);
    protected processLineInfo(): void;
    protected build(): CqlError;
}
//# sourceMappingURL=CqlErrorCreator.d.ts.map