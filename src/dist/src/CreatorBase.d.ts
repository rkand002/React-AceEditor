import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { Token } from "antlr4ts/Token";
import CqlText from "./dto/CqlText";
import LineInfo from "./dto/LineInfo";
import { ParseTree } from "antlr4ts/tree";
export default abstract class CreatorBase<T extends CqlText> {
    protected ctx: ParserRuleContext;
    protected cqlDao: T;
    protected constructor(ctx: ParserRuleContext, cqlDao: T);
    protected processLineInfo(): void;
    buildDao(): T | undefined;
    buildLineInfo(token: Token | undefined): LineInfo | undefined;
    protected findChildText(cqlLexerId: number, occurrence?: number, children?: ParseTree[] | undefined): string | undefined;
    protected abstract build(): T;
}
//# sourceMappingURL=CreatorBase.d.ts.map