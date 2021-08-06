import { CodeDefinitionContext, CodesystemDefinitionContext, ContextDefinitionContext, cqlListener, ExpressionDefinitionContext, IncludeDefinitionContext, LibraryDefinitionContext, ParameterDefinitionContext, UsingDefinitionContext, ValuesetDefinitionContext } from "../generated";
import CqlResult from "./dto/CqlResult";
export default class CqlAntlrListener implements cqlListener {
    private cqlResult;
    constructor(cqlResult: CqlResult);
    enterLibraryDefinition(ctx: LibraryDefinitionContext): void;
    enterUsingDefinition(ctx: UsingDefinitionContext): void;
    enterIncludeDefinition(ctx: IncludeDefinitionContext): void;
    enterCodesystemDefinition(ctx: CodesystemDefinitionContext): void;
    enterValuesetDefinition(ctx: ValuesetDefinitionContext): void;
    enterCodeDefinition(ctx: CodeDefinitionContext): void;
    enterParameterDefinition(ctx: ParameterDefinitionContext): void;
    enterContextDefinition(ctx: ContextDefinitionContext): void;
    enterExpressionDefinition(ctx: ExpressionDefinitionContext): void;
}
//# sourceMappingURL=CqlAntlrListener.d.ts.map