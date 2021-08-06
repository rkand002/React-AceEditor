import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { AliasContext, cqlVisitor, InvocationTermContext } from "../generated";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { CqlResult } from "./dto";
export default class CqlExpressionVisitor extends AbstractParseTreeVisitor<void> implements cqlVisitor<void> {
    private result;
    private aliases;
    private finder;
    constructor(result: CqlResult, aliases?: string[]);
    static count: number;
    protected defaultResult(): void;
    visit(tree: ParseTree): void;
    visitChildren(/*@NotNull*/ node: RuleNode): void;
    visitAlias(ctx: AliasContext): void;
    visitInvocationTerm(ctx: InvocationTermContext): void;
}
//# sourceMappingURL=CqlExpressionVisitor.d.ts.map