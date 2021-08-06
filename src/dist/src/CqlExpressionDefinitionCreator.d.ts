import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import CreatorBase from './CreatorBase';
import CqlExpressionDefinition from './dto/CqlExpressionDefinition';
export default class CqlExpressionDefinitionCreator extends CreatorBase<CqlExpressionDefinition> {
    constructor(ctx: ParserRuleContext);
    private findExpressionType;
    protected build(): CqlExpressionDefinition;
}
//# sourceMappingURL=CqlExpressionDefinitionCreator.d.ts.map