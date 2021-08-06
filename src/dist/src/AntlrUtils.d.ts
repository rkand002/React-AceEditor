import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParseTree } from "antlr4ts/tree";
export default class AntlrUtils {
    static findText(ctx: ParserRuleContext): string | undefined;
    static findChildText(children: ParseTree[] | undefined, lexerType: number, occurrence?: number): string | undefined;
    static findChild(children: ParseTree[] | undefined, lexerType: number, occurrence: number): ParseTree | undefined;
    private static isTargetType;
}
//# sourceMappingURL=AntlrUtils.d.ts.map