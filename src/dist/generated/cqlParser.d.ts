import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { cqlListener } from "./cqlListener";
import { cqlVisitor } from "./cqlVisitor";
export declare class cqlParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly T__5 = 6;
    static readonly T__6 = 7;
    static readonly T__7 = 8;
    static readonly T__8 = 9;
    static readonly T__9 = 10;
    static readonly T__10 = 11;
    static readonly T__11 = 12;
    static readonly T__12 = 13;
    static readonly T__13 = 14;
    static readonly T__14 = 15;
    static readonly T__15 = 16;
    static readonly T__16 = 17;
    static readonly T__17 = 18;
    static readonly T__18 = 19;
    static readonly T__19 = 20;
    static readonly T__20 = 21;
    static readonly T__21 = 22;
    static readonly T__22 = 23;
    static readonly T__23 = 24;
    static readonly T__24 = 25;
    static readonly T__25 = 26;
    static readonly T__26 = 27;
    static readonly T__27 = 28;
    static readonly T__28 = 29;
    static readonly T__29 = 30;
    static readonly T__30 = 31;
    static readonly T__31 = 32;
    static readonly T__32 = 33;
    static readonly T__33 = 34;
    static readonly T__34 = 35;
    static readonly T__35 = 36;
    static readonly T__36 = 37;
    static readonly T__37 = 38;
    static readonly T__38 = 39;
    static readonly T__39 = 40;
    static readonly T__40 = 41;
    static readonly T__41 = 42;
    static readonly T__42 = 43;
    static readonly T__43 = 44;
    static readonly T__44 = 45;
    static readonly T__45 = 46;
    static readonly T__46 = 47;
    static readonly T__47 = 48;
    static readonly T__48 = 49;
    static readonly T__49 = 50;
    static readonly T__50 = 51;
    static readonly T__51 = 52;
    static readonly T__52 = 53;
    static readonly T__53 = 54;
    static readonly T__54 = 55;
    static readonly T__55 = 56;
    static readonly T__56 = 57;
    static readonly T__57 = 58;
    static readonly T__58 = 59;
    static readonly T__59 = 60;
    static readonly T__60 = 61;
    static readonly T__61 = 62;
    static readonly T__62 = 63;
    static readonly T__63 = 64;
    static readonly T__64 = 65;
    static readonly T__65 = 66;
    static readonly T__66 = 67;
    static readonly T__67 = 68;
    static readonly T__68 = 69;
    static readonly T__69 = 70;
    static readonly T__70 = 71;
    static readonly T__71 = 72;
    static readonly T__72 = 73;
    static readonly T__73 = 74;
    static readonly T__74 = 75;
    static readonly T__75 = 76;
    static readonly T__76 = 77;
    static readonly T__77 = 78;
    static readonly T__78 = 79;
    static readonly T__79 = 80;
    static readonly T__80 = 81;
    static readonly T__81 = 82;
    static readonly T__82 = 83;
    static readonly T__83 = 84;
    static readonly T__84 = 85;
    static readonly T__85 = 86;
    static readonly T__86 = 87;
    static readonly T__87 = 88;
    static readonly T__88 = 89;
    static readonly T__89 = 90;
    static readonly T__90 = 91;
    static readonly T__91 = 92;
    static readonly T__92 = 93;
    static readonly T__93 = 94;
    static readonly T__94 = 95;
    static readonly T__95 = 96;
    static readonly T__96 = 97;
    static readonly T__97 = 98;
    static readonly T__98 = 99;
    static readonly T__99 = 100;
    static readonly T__100 = 101;
    static readonly T__101 = 102;
    static readonly T__102 = 103;
    static readonly T__103 = 104;
    static readonly T__104 = 105;
    static readonly T__105 = 106;
    static readonly T__106 = 107;
    static readonly T__107 = 108;
    static readonly T__108 = 109;
    static readonly T__109 = 110;
    static readonly T__110 = 111;
    static readonly T__111 = 112;
    static readonly T__112 = 113;
    static readonly T__113 = 114;
    static readonly T__114 = 115;
    static readonly T__115 = 116;
    static readonly T__116 = 117;
    static readonly T__117 = 118;
    static readonly T__118 = 119;
    static readonly T__119 = 120;
    static readonly T__120 = 121;
    static readonly T__121 = 122;
    static readonly T__122 = 123;
    static readonly T__123 = 124;
    static readonly T__124 = 125;
    static readonly T__125 = 126;
    static readonly T__126 = 127;
    static readonly T__127 = 128;
    static readonly T__128 = 129;
    static readonly T__129 = 130;
    static readonly T__130 = 131;
    static readonly T__131 = 132;
    static readonly T__132 = 133;
    static readonly T__133 = 134;
    static readonly T__134 = 135;
    static readonly T__135 = 136;
    static readonly T__136 = 137;
    static readonly T__137 = 138;
    static readonly T__138 = 139;
    static readonly T__139 = 140;
    static readonly T__140 = 141;
    static readonly T__141 = 142;
    static readonly T__142 = 143;
    static readonly T__143 = 144;
    static readonly T__144 = 145;
    static readonly T__145 = 146;
    static readonly T__146 = 147;
    static readonly T__147 = 148;
    static readonly T__148 = 149;
    static readonly T__149 = 150;
    static readonly T__150 = 151;
    static readonly T__151 = 152;
    static readonly T__152 = 153;
    static readonly QUOTEDIDENTIFIER = 154;
    static readonly DATETIME = 155;
    static readonly TIME = 156;
    static readonly IDENTIFIER = 157;
    static readonly DELIMITEDIDENTIFIER = 158;
    static readonly STRING = 159;
    static readonly NUMBER = 160;
    static readonly WS = 161;
    static readonly COMMENT = 162;
    static readonly LINE_COMMENT = 163;
    static readonly RULE_library = 0;
    static readonly RULE_libraryDefinition = 1;
    static readonly RULE_usingDefinition = 2;
    static readonly RULE_includeDefinition = 3;
    static readonly RULE_localIdentifier = 4;
    static readonly RULE_accessModifier = 5;
    static readonly RULE_parameterDefinition = 6;
    static readonly RULE_codesystemDefinition = 7;
    static readonly RULE_valuesetDefinition = 8;
    static readonly RULE_codesystems = 9;
    static readonly RULE_codesystemIdentifier = 10;
    static readonly RULE_libraryIdentifier = 11;
    static readonly RULE_codeDefinition = 12;
    static readonly RULE_conceptDefinition = 13;
    static readonly RULE_codeIdentifier = 14;
    static readonly RULE_codesystemId = 15;
    static readonly RULE_valuesetId = 16;
    static readonly RULE_versionSpecifier = 17;
    static readonly RULE_codeId = 18;
    static readonly RULE_typeSpecifier = 19;
    static readonly RULE_namedTypeSpecifier = 20;
    static readonly RULE_modelIdentifier = 21;
    static readonly RULE_listTypeSpecifier = 22;
    static readonly RULE_intervalTypeSpecifier = 23;
    static readonly RULE_tupleTypeSpecifier = 24;
    static readonly RULE_tupleElementDefinition = 25;
    static readonly RULE_choiceTypeSpecifier = 26;
    static readonly RULE_statement = 27;
    static readonly RULE_expressionDefinition = 28;
    static readonly RULE_contextDefinition = 29;
    static readonly RULE_functionDefinition = 30;
    static readonly RULE_operandDefinition = 31;
    static readonly RULE_functionBody = 32;
    static readonly RULE_querySource = 33;
    static readonly RULE_aliasedQuerySource = 34;
    static readonly RULE_alias = 35;
    static readonly RULE_queryInclusionClause = 36;
    static readonly RULE_withClause = 37;
    static readonly RULE_withoutClause = 38;
    static readonly RULE_retrieve = 39;
    static readonly RULE_contextIdentifier = 40;
    static readonly RULE_codePath = 41;
    static readonly RULE_terminology = 42;
    static readonly RULE_qualifier = 43;
    static readonly RULE_query = 44;
    static readonly RULE_sourceClause = 45;
    static readonly RULE_letClause = 46;
    static readonly RULE_letClauseItem = 47;
    static readonly RULE_whereClause = 48;
    static readonly RULE_returnClause = 49;
    static readonly RULE_sortClause = 50;
    static readonly RULE_sortDirection = 51;
    static readonly RULE_sortByItem = 52;
    static readonly RULE_qualifiedIdentifier = 53;
    static readonly RULE_qualifiedIdentifierExpression = 54;
    static readonly RULE_qualifierExpression = 55;
    static readonly RULE_simplePath = 56;
    static readonly RULE_simpleLiteral = 57;
    static readonly RULE_expression = 58;
    static readonly RULE_dateTimePrecision = 59;
    static readonly RULE_dateTimeComponent = 60;
    static readonly RULE_pluralDateTimePrecision = 61;
    static readonly RULE_expressionTerm = 62;
    static readonly RULE_caseExpressionItem = 63;
    static readonly RULE_dateTimePrecisionSpecifier = 64;
    static readonly RULE_relativeQualifier = 65;
    static readonly RULE_offsetRelativeQualifier = 66;
    static readonly RULE_exclusiveRelativeQualifier = 67;
    static readonly RULE_quantityOffset = 68;
    static readonly RULE_temporalRelationship = 69;
    static readonly RULE_intervalOperatorPhrase = 70;
    static readonly RULE_term = 71;
    static readonly RULE_qualifiedInvocation = 72;
    static readonly RULE_qualifiedFunction = 73;
    static readonly RULE_invocation = 74;
    static readonly RULE_c_function = 75;
    static readonly RULE_ratio = 76;
    static readonly RULE_literal = 77;
    static readonly RULE_intervalSelector = 78;
    static readonly RULE_tupleSelector = 79;
    static readonly RULE_tupleElementSelector = 80;
    static readonly RULE_instanceSelector = 81;
    static readonly RULE_instanceElementSelector = 82;
    static readonly RULE_listSelector = 83;
    static readonly RULE_displayClause = 84;
    static readonly RULE_codeSelector = 85;
    static readonly RULE_conceptSelector = 86;
    static readonly RULE_keyword = 87;
    static readonly RULE_reservedWord = 88;
    static readonly RULE_keywordIdentifier = 89;
    static readonly RULE_obsoleteIdentifier = 90;
    static readonly RULE_functionIdentifier = 91;
    static readonly RULE_typeNameIdentifier = 92;
    static readonly RULE_referentialIdentifier = 93;
    static readonly RULE_referentialOrTypeNameIdentifier = 94;
    static readonly RULE_identifierOrFunctionIdentifier = 95;
    static readonly RULE_identifier = 96;
    static readonly RULE_externalConstant = 97;
    static readonly RULE_paramList = 98;
    static readonly RULE_quantity = 99;
    static readonly RULE_unit = 100;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    library(): LibraryContext;
    libraryDefinition(): LibraryDefinitionContext;
    usingDefinition(): UsingDefinitionContext;
    includeDefinition(): IncludeDefinitionContext;
    localIdentifier(): LocalIdentifierContext;
    accessModifier(): AccessModifierContext;
    parameterDefinition(): ParameterDefinitionContext;
    codesystemDefinition(): CodesystemDefinitionContext;
    valuesetDefinition(): ValuesetDefinitionContext;
    codesystems(): CodesystemsContext;
    codesystemIdentifier(): CodesystemIdentifierContext;
    libraryIdentifier(): LibraryIdentifierContext;
    codeDefinition(): CodeDefinitionContext;
    conceptDefinition(): ConceptDefinitionContext;
    codeIdentifier(): CodeIdentifierContext;
    codesystemId(): CodesystemIdContext;
    valuesetId(): ValuesetIdContext;
    versionSpecifier(): VersionSpecifierContext;
    codeId(): CodeIdContext;
    typeSpecifier(): TypeSpecifierContext;
    namedTypeSpecifier(): NamedTypeSpecifierContext;
    modelIdentifier(): ModelIdentifierContext;
    listTypeSpecifier(): ListTypeSpecifierContext;
    intervalTypeSpecifier(): IntervalTypeSpecifierContext;
    tupleTypeSpecifier(): TupleTypeSpecifierContext;
    tupleElementDefinition(): TupleElementDefinitionContext;
    choiceTypeSpecifier(): ChoiceTypeSpecifierContext;
    statement(): StatementContext;
    expressionDefinition(): ExpressionDefinitionContext;
    contextDefinition(): ContextDefinitionContext;
    functionDefinition(): FunctionDefinitionContext;
    operandDefinition(): OperandDefinitionContext;
    functionBody(): FunctionBodyContext;
    querySource(): QuerySourceContext;
    aliasedQuerySource(): AliasedQuerySourceContext;
    alias(): AliasContext;
    queryInclusionClause(): QueryInclusionClauseContext;
    withClause(): WithClauseContext;
    withoutClause(): WithoutClauseContext;
    retrieve(): RetrieveContext;
    contextIdentifier(): ContextIdentifierContext;
    codePath(): CodePathContext;
    terminology(): TerminologyContext;
    qualifier(): QualifierContext;
    query(): QueryContext;
    sourceClause(): SourceClauseContext;
    letClause(): LetClauseContext;
    letClauseItem(): LetClauseItemContext;
    whereClause(): WhereClauseContext;
    returnClause(): ReturnClauseContext;
    sortClause(): SortClauseContext;
    sortDirection(): SortDirectionContext;
    sortByItem(): SortByItemContext;
    qualifiedIdentifier(): QualifiedIdentifierContext;
    qualifiedIdentifierExpression(): QualifiedIdentifierExpressionContext;
    qualifierExpression(): QualifierExpressionContext;
    simplePath(): SimplePathContext;
    simplePath(_p: number): SimplePathContext;
    simpleLiteral(): SimpleLiteralContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    dateTimePrecision(): DateTimePrecisionContext;
    dateTimeComponent(): DateTimeComponentContext;
    pluralDateTimePrecision(): PluralDateTimePrecisionContext;
    expressionTerm(): ExpressionTermContext;
    expressionTerm(_p: number): ExpressionTermContext;
    caseExpressionItem(): CaseExpressionItemContext;
    dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext;
    relativeQualifier(): RelativeQualifierContext;
    offsetRelativeQualifier(): OffsetRelativeQualifierContext;
    exclusiveRelativeQualifier(): ExclusiveRelativeQualifierContext;
    quantityOffset(): QuantityOffsetContext;
    temporalRelationship(): TemporalRelationshipContext;
    intervalOperatorPhrase(): IntervalOperatorPhraseContext;
    term(): TermContext;
    qualifiedInvocation(): QualifiedInvocationContext;
    qualifiedFunction(): QualifiedFunctionContext;
    invocation(): InvocationContext;
    c_function(): C_functionContext;
    ratio(): RatioContext;
    literal(): LiteralContext;
    intervalSelector(): IntervalSelectorContext;
    tupleSelector(): TupleSelectorContext;
    tupleElementSelector(): TupleElementSelectorContext;
    instanceSelector(): InstanceSelectorContext;
    instanceElementSelector(): InstanceElementSelectorContext;
    listSelector(): ListSelectorContext;
    displayClause(): DisplayClauseContext;
    codeSelector(): CodeSelectorContext;
    conceptSelector(): ConceptSelectorContext;
    keyword(): KeywordContext;
    reservedWord(): ReservedWordContext;
    keywordIdentifier(): KeywordIdentifierContext;
    obsoleteIdentifier(): ObsoleteIdentifierContext;
    functionIdentifier(): FunctionIdentifierContext;
    typeNameIdentifier(): TypeNameIdentifierContext;
    referentialIdentifier(): ReferentialIdentifierContext;
    referentialOrTypeNameIdentifier(): ReferentialOrTypeNameIdentifierContext;
    identifierOrFunctionIdentifier(): IdentifierOrFunctionIdentifierContext;
    identifier(): IdentifierContext;
    externalConstant(): ExternalConstantContext;
    paramList(): ParamListContext;
    quantity(): QuantityContext;
    unit(): UnitContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private simplePath_sempred;
    private expression_sempred;
    private expressionTerm_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    private static readonly _serializedATNSegment2;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class LibraryContext extends ParserRuleContext {
    EOF(): TerminalNode;
    libraryDefinition(): LibraryDefinitionContext | undefined;
    usingDefinition(): UsingDefinitionContext[];
    usingDefinition(i: number): UsingDefinitionContext;
    includeDefinition(): IncludeDefinitionContext[];
    includeDefinition(i: number): IncludeDefinitionContext;
    codesystemDefinition(): CodesystemDefinitionContext[];
    codesystemDefinition(i: number): CodesystemDefinitionContext;
    valuesetDefinition(): ValuesetDefinitionContext[];
    valuesetDefinition(i: number): ValuesetDefinitionContext;
    codeDefinition(): CodeDefinitionContext[];
    codeDefinition(i: number): CodeDefinitionContext;
    conceptDefinition(): ConceptDefinitionContext[];
    conceptDefinition(i: number): ConceptDefinitionContext;
    parameterDefinition(): ParameterDefinitionContext[];
    parameterDefinition(i: number): ParameterDefinitionContext;
    statement(): StatementContext[];
    statement(i: number): StatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class LibraryDefinitionContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext;
    versionSpecifier(): VersionSpecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class UsingDefinitionContext extends ParserRuleContext {
    modelIdentifier(): ModelIdentifierContext;
    versionSpecifier(): VersionSpecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class IncludeDefinitionContext extends ParserRuleContext {
    qualifiedIdentifier(): QualifiedIdentifierContext;
    versionSpecifier(): VersionSpecifierContext | undefined;
    localIdentifier(): LocalIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class LocalIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class AccessModifierContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ParameterDefinitionContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    accessModifier(): AccessModifierContext | undefined;
    typeSpecifier(): TypeSpecifierContext | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CodesystemDefinitionContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    codesystemId(): CodesystemIdContext;
    accessModifier(): AccessModifierContext | undefined;
    versionSpecifier(): VersionSpecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ValuesetDefinitionContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    valuesetId(): ValuesetIdContext;
    accessModifier(): AccessModifierContext | undefined;
    versionSpecifier(): VersionSpecifierContext | undefined;
    codesystems(): CodesystemsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CodesystemsContext extends ParserRuleContext {
    codesystemIdentifier(): CodesystemIdentifierContext[];
    codesystemIdentifier(i: number): CodesystemIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CodesystemIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    libraryIdentifier(): LibraryIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class LibraryIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CodeDefinitionContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    codeId(): CodeIdContext;
    codesystemIdentifier(): CodesystemIdentifierContext;
    accessModifier(): AccessModifierContext | undefined;
    displayClause(): DisplayClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ConceptDefinitionContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    codeIdentifier(): CodeIdentifierContext[];
    codeIdentifier(i: number): CodeIdentifierContext;
    accessModifier(): AccessModifierContext | undefined;
    displayClause(): DisplayClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CodeIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    libraryIdentifier(): LibraryIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CodesystemIdContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ValuesetIdContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class VersionSpecifierContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CodeIdContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TypeSpecifierContext extends ParserRuleContext {
    namedTypeSpecifier(): NamedTypeSpecifierContext | undefined;
    listTypeSpecifier(): ListTypeSpecifierContext | undefined;
    intervalTypeSpecifier(): IntervalTypeSpecifierContext | undefined;
    tupleTypeSpecifier(): TupleTypeSpecifierContext | undefined;
    choiceTypeSpecifier(): ChoiceTypeSpecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class NamedTypeSpecifierContext extends ParserRuleContext {
    referentialOrTypeNameIdentifier(): ReferentialOrTypeNameIdentifierContext;
    qualifier(): QualifierContext[];
    qualifier(i: number): QualifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ModelIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ListTypeSpecifierContext extends ParserRuleContext {
    typeSpecifier(): TypeSpecifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class IntervalTypeSpecifierContext extends ParserRuleContext {
    typeSpecifier(): TypeSpecifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TupleTypeSpecifierContext extends ParserRuleContext {
    tupleElementDefinition(): TupleElementDefinitionContext[];
    tupleElementDefinition(i: number): TupleElementDefinitionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TupleElementDefinitionContext extends ParserRuleContext {
    referentialIdentifier(): ReferentialIdentifierContext;
    typeSpecifier(): TypeSpecifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ChoiceTypeSpecifierContext extends ParserRuleContext {
    typeSpecifier(): TypeSpecifierContext[];
    typeSpecifier(i: number): TypeSpecifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class StatementContext extends ParserRuleContext {
    expressionDefinition(): ExpressionDefinitionContext | undefined;
    contextDefinition(): ContextDefinitionContext | undefined;
    functionDefinition(): FunctionDefinitionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ExpressionDefinitionContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    expression(): ExpressionContext;
    accessModifier(): AccessModifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ContextDefinitionContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    modelIdentifier(): ModelIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class FunctionDefinitionContext extends ParserRuleContext {
    identifierOrFunctionIdentifier(): IdentifierOrFunctionIdentifierContext;
    functionBody(): FunctionBodyContext | undefined;
    accessModifier(): AccessModifierContext | undefined;
    operandDefinition(): OperandDefinitionContext[];
    operandDefinition(i: number): OperandDefinitionContext;
    typeSpecifier(): TypeSpecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class OperandDefinitionContext extends ParserRuleContext {
    referentialIdentifier(): ReferentialIdentifierContext;
    typeSpecifier(): TypeSpecifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class FunctionBodyContext extends ParserRuleContext {
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QuerySourceContext extends ParserRuleContext {
    retrieve(): RetrieveContext | undefined;
    qualifiedIdentifierExpression(): QualifiedIdentifierExpressionContext | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class AliasedQuerySourceContext extends ParserRuleContext {
    querySource(): QuerySourceContext;
    alias(): AliasContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class AliasContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QueryInclusionClauseContext extends ParserRuleContext {
    withClause(): WithClauseContext | undefined;
    withoutClause(): WithoutClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class WithClauseContext extends ParserRuleContext {
    aliasedQuerySource(): AliasedQuerySourceContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class WithoutClauseContext extends ParserRuleContext {
    aliasedQuerySource(): AliasedQuerySourceContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class RetrieveContext extends ParserRuleContext {
    namedTypeSpecifier(): NamedTypeSpecifierContext;
    contextIdentifier(): ContextIdentifierContext | undefined;
    terminology(): TerminologyContext | undefined;
    codePath(): CodePathContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ContextIdentifierContext extends ParserRuleContext {
    qualifiedIdentifierExpression(): QualifiedIdentifierExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CodePathContext extends ParserRuleContext {
    simplePath(): SimplePathContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TerminologyContext extends ParserRuleContext {
    qualifiedIdentifierExpression(): QualifiedIdentifierExpressionContext | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QualifierContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QueryContext extends ParserRuleContext {
    sourceClause(): SourceClauseContext;
    letClause(): LetClauseContext | undefined;
    queryInclusionClause(): QueryInclusionClauseContext[];
    queryInclusionClause(i: number): QueryInclusionClauseContext;
    whereClause(): WhereClauseContext | undefined;
    returnClause(): ReturnClauseContext | undefined;
    sortClause(): SortClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class SourceClauseContext extends ParserRuleContext {
    aliasedQuerySource(): AliasedQuerySourceContext[];
    aliasedQuerySource(i: number): AliasedQuerySourceContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class LetClauseContext extends ParserRuleContext {
    letClauseItem(): LetClauseItemContext[];
    letClauseItem(i: number): LetClauseItemContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class LetClauseItemContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class WhereClauseContext extends ParserRuleContext {
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ReturnClauseContext extends ParserRuleContext {
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class SortClauseContext extends ParserRuleContext {
    sortDirection(): SortDirectionContext | undefined;
    sortByItem(): SortByItemContext[];
    sortByItem(i: number): SortByItemContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class SortDirectionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class SortByItemContext extends ParserRuleContext {
    expressionTerm(): ExpressionTermContext;
    sortDirection(): SortDirectionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QualifiedIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    qualifier(): QualifierContext[];
    qualifier(i: number): QualifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QualifiedIdentifierExpressionContext extends ParserRuleContext {
    referentialIdentifier(): ReferentialIdentifierContext;
    qualifierExpression(): QualifierExpressionContext[];
    qualifierExpression(i: number): QualifierExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QualifierExpressionContext extends ParserRuleContext {
    referentialIdentifier(): ReferentialIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class SimplePathContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SimplePathContext): void;
}
export declare class SimplePathReferentialIdentifierContext extends SimplePathContext {
    referentialIdentifier(): ReferentialIdentifierContext;
    constructor(ctx: SimplePathContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class SimplePathQualifiedIdentifierContext extends SimplePathContext {
    simplePath(): SimplePathContext;
    referentialIdentifier(): ReferentialIdentifierContext;
    constructor(ctx: SimplePathContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class SimplePathIndexerContext extends SimplePathContext {
    simplePath(): SimplePathContext;
    simpleLiteral(): SimpleLiteralContext;
    constructor(ctx: SimplePathContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class SimpleLiteralContext extends ParserRuleContext {
    STRING(): TerminalNode | undefined;
    NUMBER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionContext): void;
}
export declare class TermExpressionContext extends ExpressionContext {
    expressionTerm(): ExpressionTermContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class RetrieveExpressionContext extends ExpressionContext {
    retrieve(): RetrieveContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QueryExpressionContext extends ExpressionContext {
    query(): QueryContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class BooleanExpressionContext extends ExpressionContext {
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TypeExpressionContext extends ExpressionContext {
    expression(): ExpressionContext;
    typeSpecifier(): TypeSpecifierContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CastExpressionContext extends ExpressionContext {
    expression(): ExpressionContext;
    typeSpecifier(): TypeSpecifierContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class NotExpressionContext extends ExpressionContext {
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ExistenceExpressionContext extends ExpressionContext {
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class BetweenExpressionContext extends ExpressionContext {
    expression(): ExpressionContext;
    expressionTerm(): ExpressionTermContext[];
    expressionTerm(i: number): ExpressionTermContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class DurationBetweenExpressionContext extends ExpressionContext {
    pluralDateTimePrecision(): PluralDateTimePrecisionContext;
    expressionTerm(): ExpressionTermContext[];
    expressionTerm(i: number): ExpressionTermContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class DifferenceBetweenExpressionContext extends ExpressionContext {
    pluralDateTimePrecision(): PluralDateTimePrecisionContext;
    expressionTerm(): ExpressionTermContext[];
    expressionTerm(i: number): ExpressionTermContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class InequalityExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TimingExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    intervalOperatorPhrase(): IntervalOperatorPhraseContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class EqualityExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class MembershipExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class AndExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class OrExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ImpliesExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class InFixSetExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class DateTimePrecisionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class DateTimeComponentContext extends ParserRuleContext {
    dateTimePrecision(): DateTimePrecisionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class PluralDateTimePrecisionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ExpressionTermContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionTermContext): void;
}
export declare class TermExpressionTermContext extends ExpressionTermContext {
    term(): TermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class InvocationExpressionTermContext extends ExpressionTermContext {
    expressionTerm(): ExpressionTermContext;
    qualifiedInvocation(): QualifiedInvocationContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class IndexedExpressionTermContext extends ExpressionTermContext {
    expressionTerm(): ExpressionTermContext;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ConversionExpressionTermContext extends ExpressionTermContext {
    expression(): ExpressionContext;
    typeSpecifier(): TypeSpecifierContext | undefined;
    unit(): UnitContext | undefined;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class PolarityExpressionTermContext extends ExpressionTermContext {
    expressionTerm(): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TimeBoundaryExpressionTermContext extends ExpressionTermContext {
    expressionTerm(): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TimeUnitExpressionTermContext extends ExpressionTermContext {
    dateTimeComponent(): DateTimeComponentContext;
    expressionTerm(): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class DurationExpressionTermContext extends ExpressionTermContext {
    pluralDateTimePrecision(): PluralDateTimePrecisionContext;
    expressionTerm(): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class DifferenceExpressionTermContext extends ExpressionTermContext {
    pluralDateTimePrecision(): PluralDateTimePrecisionContext;
    expressionTerm(): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class WidthExpressionTermContext extends ExpressionTermContext {
    expressionTerm(): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class SuccessorExpressionTermContext extends ExpressionTermContext {
    expressionTerm(): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class PredecessorExpressionTermContext extends ExpressionTermContext {
    expressionTerm(): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ElementExtractorExpressionTermContext extends ExpressionTermContext {
    expressionTerm(): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class PointExtractorExpressionTermContext extends ExpressionTermContext {
    expressionTerm(): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TypeExtentExpressionTermContext extends ExpressionTermContext {
    namedTypeSpecifier(): NamedTypeSpecifierContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class PowerExpressionTermContext extends ExpressionTermContext {
    expressionTerm(): ExpressionTermContext[];
    expressionTerm(i: number): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class MultiplicationExpressionTermContext extends ExpressionTermContext {
    expressionTerm(): ExpressionTermContext[];
    expressionTerm(i: number): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class AdditionExpressionTermContext extends ExpressionTermContext {
    expressionTerm(): ExpressionTermContext[];
    expressionTerm(i: number): ExpressionTermContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class IfThenElseExpressionTermContext extends ExpressionTermContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CaseExpressionTermContext extends ExpressionTermContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    caseExpressionItem(): CaseExpressionItemContext[];
    caseExpressionItem(i: number): CaseExpressionItemContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class AggregateExpressionTermContext extends ExpressionTermContext {
    expression(): ExpressionContext;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class SetAggregateExpressionTermContext extends ExpressionTermContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    dateTimePrecision(): DateTimePrecisionContext | undefined;
    constructor(ctx: ExpressionTermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CaseExpressionItemContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class DateTimePrecisionSpecifierContext extends ParserRuleContext {
    dateTimePrecision(): DateTimePrecisionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class RelativeQualifierContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class OffsetRelativeQualifierContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ExclusiveRelativeQualifierContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QuantityOffsetContext extends ParserRuleContext {
    quantity(): QuantityContext | undefined;
    offsetRelativeQualifier(): OffsetRelativeQualifierContext | undefined;
    exclusiveRelativeQualifier(): ExclusiveRelativeQualifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TemporalRelationshipContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class IntervalOperatorPhraseContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: IntervalOperatorPhraseContext): void;
}
export declare class ConcurrentWithIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    relativeQualifier(): RelativeQualifierContext | undefined;
    dateTimePrecision(): DateTimePrecisionContext | undefined;
    constructor(ctx: IntervalOperatorPhraseContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class IncludesIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined;
    constructor(ctx: IntervalOperatorPhraseContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class IncludedInIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined;
    constructor(ctx: IntervalOperatorPhraseContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class BeforeOrAfterIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    temporalRelationship(): TemporalRelationshipContext;
    quantityOffset(): QuantityOffsetContext | undefined;
    dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined;
    constructor(ctx: IntervalOperatorPhraseContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class WithinIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    quantity(): QuantityContext;
    constructor(ctx: IntervalOperatorPhraseContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class MeetsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined;
    constructor(ctx: IntervalOperatorPhraseContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class OverlapsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined;
    constructor(ctx: IntervalOperatorPhraseContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class StartsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined;
    constructor(ctx: IntervalOperatorPhraseContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class EndsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined;
    constructor(ctx: IntervalOperatorPhraseContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TermContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TermContext): void;
}
export declare class InvocationTermContext extends TermContext {
    invocation(): InvocationContext;
    constructor(ctx: TermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class LiteralTermContext extends TermContext {
    literal(): LiteralContext;
    constructor(ctx: TermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ExternalConstantTermContext extends TermContext {
    externalConstant(): ExternalConstantContext;
    constructor(ctx: TermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class IntervalSelectorTermContext extends TermContext {
    intervalSelector(): IntervalSelectorContext;
    constructor(ctx: TermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TupleSelectorTermContext extends TermContext {
    tupleSelector(): TupleSelectorContext;
    constructor(ctx: TermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class InstanceSelectorTermContext extends TermContext {
    instanceSelector(): InstanceSelectorContext;
    constructor(ctx: TermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ListSelectorTermContext extends TermContext {
    listSelector(): ListSelectorContext;
    constructor(ctx: TermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CodeSelectorTermContext extends TermContext {
    codeSelector(): CodeSelectorContext;
    constructor(ctx: TermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ConceptSelectorTermContext extends TermContext {
    conceptSelector(): ConceptSelectorContext;
    constructor(ctx: TermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ParenthesizedTermContext extends TermContext {
    expression(): ExpressionContext;
    constructor(ctx: TermContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QualifiedInvocationContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: QualifiedInvocationContext): void;
}
export declare class QualifiedMemberInvocationContext extends QualifiedInvocationContext {
    referentialIdentifier(): ReferentialIdentifierContext;
    constructor(ctx: QualifiedInvocationContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QualifiedFunctionInvocationContext extends QualifiedInvocationContext {
    qualifiedFunction(): QualifiedFunctionContext;
    constructor(ctx: QualifiedInvocationContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QualifiedFunctionContext extends ParserRuleContext {
    identifierOrFunctionIdentifier(): IdentifierOrFunctionIdentifierContext;
    paramList(): ParamListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class InvocationContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: InvocationContext): void;
}
export declare class MemberInvocationContext extends InvocationContext {
    referentialIdentifier(): ReferentialIdentifierContext;
    constructor(ctx: InvocationContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class FunctionInvocationContext extends InvocationContext {
    c_function(): C_functionContext;
    constructor(ctx: InvocationContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ThisInvocationContext extends InvocationContext {
    constructor(ctx: InvocationContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class IndexInvocationContext extends InvocationContext {
    constructor(ctx: InvocationContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TotalInvocationContext extends InvocationContext {
    constructor(ctx: InvocationContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class C_functionContext extends ParserRuleContext {
    referentialIdentifier(): ReferentialIdentifierContext;
    paramList(): ParamListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class RatioContext extends ParserRuleContext {
    quantity(): QuantityContext[];
    quantity(i: number): QuantityContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class LiteralContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: LiteralContext): void;
}
export declare class BooleanLiteralContext extends LiteralContext {
    constructor(ctx: LiteralContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class NullLiteralContext extends LiteralContext {
    constructor(ctx: LiteralContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class StringLiteralContext extends LiteralContext {
    STRING(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class NumberLiteralContext extends LiteralContext {
    NUMBER(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class DateTimeLiteralContext extends LiteralContext {
    DATETIME(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TimeLiteralContext extends LiteralContext {
    TIME(): TerminalNode;
    constructor(ctx: LiteralContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QuantityLiteralContext extends LiteralContext {
    quantity(): QuantityContext;
    constructor(ctx: LiteralContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class RatioLiteralContext extends LiteralContext {
    ratio(): RatioContext;
    constructor(ctx: LiteralContext);
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class IntervalSelectorContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TupleSelectorContext extends ParserRuleContext {
    tupleElementSelector(): TupleElementSelectorContext[];
    tupleElementSelector(i: number): TupleElementSelectorContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TupleElementSelectorContext extends ParserRuleContext {
    referentialIdentifier(): ReferentialIdentifierContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class InstanceSelectorContext extends ParserRuleContext {
    namedTypeSpecifier(): NamedTypeSpecifierContext;
    instanceElementSelector(): InstanceElementSelectorContext[];
    instanceElementSelector(i: number): InstanceElementSelectorContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class InstanceElementSelectorContext extends ParserRuleContext {
    referentialIdentifier(): ReferentialIdentifierContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ListSelectorContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    typeSpecifier(): TypeSpecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class DisplayClauseContext extends ParserRuleContext {
    STRING(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class CodeSelectorContext extends ParserRuleContext {
    STRING(): TerminalNode;
    codesystemIdentifier(): CodesystemIdentifierContext;
    displayClause(): DisplayClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ConceptSelectorContext extends ParserRuleContext {
    codeSelector(): CodeSelectorContext[];
    codeSelector(i: number): CodeSelectorContext;
    displayClause(): DisplayClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class KeywordContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ReservedWordContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class KeywordIdentifierContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ObsoleteIdentifierContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class FunctionIdentifierContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class TypeNameIdentifierContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ReferentialIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    keywordIdentifier(): KeywordIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ReferentialOrTypeNameIdentifierContext extends ParserRuleContext {
    referentialIdentifier(): ReferentialIdentifierContext | undefined;
    typeNameIdentifier(): TypeNameIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class IdentifierOrFunctionIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    functionIdentifier(): FunctionIdentifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class IdentifierContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode | undefined;
    DELIMITEDIDENTIFIER(): TerminalNode | undefined;
    QUOTEDIDENTIFIER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ExternalConstantContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    STRING(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class ParamListContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class QuantityContext extends ParserRuleContext {
    NUMBER(): TerminalNode;
    unit(): UnitContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
export declare class UnitContext extends ParserRuleContext {
    dateTimePrecision(): DateTimePrecisionContext | undefined;
    pluralDateTimePrecision(): PluralDateTimePrecisionContext | undefined;
    STRING(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: cqlListener): void;
    exitRule(listener: cqlListener): void;
    accept<Result>(visitor: cqlVisitor<Result>): Result;
}
//# sourceMappingURL=cqlParser.d.ts.map