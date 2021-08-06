"use strict";
// Generated from cql.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhereClauseContext = exports.LetClauseItemContext = exports.LetClauseContext = exports.SourceClauseContext = exports.QueryContext = exports.QualifierContext = exports.TerminologyContext = exports.CodePathContext = exports.ContextIdentifierContext = exports.RetrieveContext = exports.WithoutClauseContext = exports.WithClauseContext = exports.QueryInclusionClauseContext = exports.AliasContext = exports.AliasedQuerySourceContext = exports.QuerySourceContext = exports.FunctionBodyContext = exports.OperandDefinitionContext = exports.FunctionDefinitionContext = exports.ContextDefinitionContext = exports.ExpressionDefinitionContext = exports.StatementContext = exports.ChoiceTypeSpecifierContext = exports.TupleElementDefinitionContext = exports.TupleTypeSpecifierContext = exports.IntervalTypeSpecifierContext = exports.ListTypeSpecifierContext = exports.ModelIdentifierContext = exports.NamedTypeSpecifierContext = exports.TypeSpecifierContext = exports.CodeIdContext = exports.VersionSpecifierContext = exports.ValuesetIdContext = exports.CodesystemIdContext = exports.CodeIdentifierContext = exports.ConceptDefinitionContext = exports.CodeDefinitionContext = exports.LibraryIdentifierContext = exports.CodesystemIdentifierContext = exports.CodesystemsContext = exports.ValuesetDefinitionContext = exports.CodesystemDefinitionContext = exports.ParameterDefinitionContext = exports.AccessModifierContext = exports.LocalIdentifierContext = exports.IncludeDefinitionContext = exports.UsingDefinitionContext = exports.LibraryDefinitionContext = exports.LibraryContext = exports.cqlParser = void 0;
exports.PointExtractorExpressionTermContext = exports.ElementExtractorExpressionTermContext = exports.PredecessorExpressionTermContext = exports.SuccessorExpressionTermContext = exports.WidthExpressionTermContext = exports.DifferenceExpressionTermContext = exports.DurationExpressionTermContext = exports.TimeUnitExpressionTermContext = exports.TimeBoundaryExpressionTermContext = exports.PolarityExpressionTermContext = exports.ConversionExpressionTermContext = exports.IndexedExpressionTermContext = exports.InvocationExpressionTermContext = exports.TermExpressionTermContext = exports.ExpressionTermContext = exports.PluralDateTimePrecisionContext = exports.DateTimeComponentContext = exports.DateTimePrecisionContext = exports.InFixSetExpressionContext = exports.ImpliesExpressionContext = exports.OrExpressionContext = exports.AndExpressionContext = exports.MembershipExpressionContext = exports.EqualityExpressionContext = exports.TimingExpressionContext = exports.InequalityExpressionContext = exports.DifferenceBetweenExpressionContext = exports.DurationBetweenExpressionContext = exports.BetweenExpressionContext = exports.ExistenceExpressionContext = exports.NotExpressionContext = exports.CastExpressionContext = exports.TypeExpressionContext = exports.BooleanExpressionContext = exports.QueryExpressionContext = exports.RetrieveExpressionContext = exports.TermExpressionContext = exports.ExpressionContext = exports.SimpleLiteralContext = exports.SimplePathIndexerContext = exports.SimplePathQualifiedIdentifierContext = exports.SimplePathReferentialIdentifierContext = exports.SimplePathContext = exports.QualifierExpressionContext = exports.QualifiedIdentifierExpressionContext = exports.QualifiedIdentifierContext = exports.SortByItemContext = exports.SortDirectionContext = exports.SortClauseContext = exports.ReturnClauseContext = void 0;
exports.BooleanLiteralContext = exports.LiteralContext = exports.RatioContext = exports.C_functionContext = exports.TotalInvocationContext = exports.IndexInvocationContext = exports.ThisInvocationContext = exports.FunctionInvocationContext = exports.MemberInvocationContext = exports.InvocationContext = exports.QualifiedFunctionContext = exports.QualifiedFunctionInvocationContext = exports.QualifiedMemberInvocationContext = exports.QualifiedInvocationContext = exports.ParenthesizedTermContext = exports.ConceptSelectorTermContext = exports.CodeSelectorTermContext = exports.ListSelectorTermContext = exports.InstanceSelectorTermContext = exports.TupleSelectorTermContext = exports.IntervalSelectorTermContext = exports.ExternalConstantTermContext = exports.LiteralTermContext = exports.InvocationTermContext = exports.TermContext = exports.EndsIntervalOperatorPhraseContext = exports.StartsIntervalOperatorPhraseContext = exports.OverlapsIntervalOperatorPhraseContext = exports.MeetsIntervalOperatorPhraseContext = exports.WithinIntervalOperatorPhraseContext = exports.BeforeOrAfterIntervalOperatorPhraseContext = exports.IncludedInIntervalOperatorPhraseContext = exports.IncludesIntervalOperatorPhraseContext = exports.ConcurrentWithIntervalOperatorPhraseContext = exports.IntervalOperatorPhraseContext = exports.TemporalRelationshipContext = exports.QuantityOffsetContext = exports.ExclusiveRelativeQualifierContext = exports.OffsetRelativeQualifierContext = exports.RelativeQualifierContext = exports.DateTimePrecisionSpecifierContext = exports.CaseExpressionItemContext = exports.SetAggregateExpressionTermContext = exports.AggregateExpressionTermContext = exports.CaseExpressionTermContext = exports.IfThenElseExpressionTermContext = exports.AdditionExpressionTermContext = exports.MultiplicationExpressionTermContext = exports.PowerExpressionTermContext = exports.TypeExtentExpressionTermContext = void 0;
exports.UnitContext = exports.QuantityContext = exports.ParamListContext = exports.ExternalConstantContext = exports.IdentifierContext = exports.IdentifierOrFunctionIdentifierContext = exports.ReferentialOrTypeNameIdentifierContext = exports.ReferentialIdentifierContext = exports.TypeNameIdentifierContext = exports.FunctionIdentifierContext = exports.ObsoleteIdentifierContext = exports.KeywordIdentifierContext = exports.ReservedWordContext = exports.KeywordContext = exports.ConceptSelectorContext = exports.CodeSelectorContext = exports.DisplayClauseContext = exports.ListSelectorContext = exports.InstanceElementSelectorContext = exports.InstanceSelectorContext = exports.TupleElementSelectorContext = exports.TupleSelectorContext = exports.IntervalSelectorContext = exports.RatioLiteralContext = exports.QuantityLiteralContext = exports.TimeLiteralContext = exports.DateTimeLiteralContext = exports.NumberLiteralContext = exports.StringLiteralContext = exports.NullLiteralContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class cqlParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(cqlParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return cqlParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "cql.g4"; }
    // @Override
    get ruleNames() { return cqlParser.ruleNames; }
    // @Override
    get serializedATN() { return cqlParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    library() {
        let _localctx = new LibraryContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, cqlParser.RULE_library);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 203;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__0) {
                    {
                        this.state = 202;
                        this.libraryDefinition();
                    }
                }
                this.state = 208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cqlParser.T__2) {
                    {
                        {
                            this.state = 205;
                            this.usingDefinition();
                        }
                    }
                    this.state = 210;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 214;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cqlParser.T__3) {
                    {
                        {
                            this.state = 211;
                            this.includeDefinition();
                        }
                    }
                    this.state = 216;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 220;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 217;
                                this.codesystemDefinition();
                            }
                        }
                    }
                    this.state = 222;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                }
                this.state = 226;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 223;
                                this.valuesetDefinition();
                            }
                        }
                    }
                    this.state = 228;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                }
                this.state = 232;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 229;
                                this.codeDefinition();
                            }
                        }
                    }
                    this.state = 234;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                }
                this.state = 238;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 235;
                                this.conceptDefinition();
                            }
                        }
                    }
                    this.state = 240;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                }
                this.state = 244;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7))) !== 0)) {
                    {
                        {
                            this.state = 241;
                            this.parameterDefinition();
                        }
                    }
                    this.state = 246;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cqlParser.T__26 || _la === cqlParser.T__27) {
                    {
                        {
                            this.state = 247;
                            this.statement();
                        }
                    }
                    this.state = 252;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 253;
                this.match(cqlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    libraryDefinition() {
        let _localctx = new LibraryDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, cqlParser.RULE_libraryDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this.match(cqlParser.T__0);
                this.state = 256;
                this.qualifiedIdentifier();
                this.state = 259;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__1) {
                    {
                        this.state = 257;
                        this.match(cqlParser.T__1);
                        this.state = 258;
                        this.versionSpecifier();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    usingDefinition() {
        let _localctx = new UsingDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, cqlParser.RULE_usingDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 261;
                this.match(cqlParser.T__2);
                this.state = 262;
                this.modelIdentifier();
                this.state = 265;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__1) {
                    {
                        this.state = 263;
                        this.match(cqlParser.T__1);
                        this.state = 264;
                        this.versionSpecifier();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    includeDefinition() {
        let _localctx = new IncludeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, cqlParser.RULE_includeDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 267;
                this.match(cqlParser.T__3);
                this.state = 268;
                this.qualifiedIdentifier();
                this.state = 271;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__1) {
                    {
                        this.state = 269;
                        this.match(cqlParser.T__1);
                        this.state = 270;
                        this.versionSpecifier();
                    }
                }
                this.state = 275;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__4) {
                    {
                        this.state = 273;
                        this.match(cqlParser.T__4);
                        this.state = 274;
                        this.localIdentifier();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    localIdentifier() {
        let _localctx = new LocalIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, cqlParser.RULE_localIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 277;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    accessModifier() {
        let _localctx = new AccessModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, cqlParser.RULE_accessModifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 279;
                _la = this._input.LA(1);
                if (!(_la === cqlParser.T__5 || _la === cqlParser.T__6)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parameterDefinition() {
        let _localctx = new ParameterDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, cqlParser.RULE_parameterDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
                    {
                        this.state = 281;
                        this.accessModifier();
                    }
                }
                this.state = 284;
                this.match(cqlParser.T__7);
                this.state = 285;
                this.identifier();
                this.state = 287;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                    case 1:
                        {
                            this.state = 286;
                            this.typeSpecifier();
                        }
                        break;
                }
                this.state = 291;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__8) {
                    {
                        this.state = 289;
                        this.match(cqlParser.T__8);
                        this.state = 290;
                        this.expression(0);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    codesystemDefinition() {
        let _localctx = new CodesystemDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, cqlParser.RULE_codesystemDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
                    {
                        this.state = 293;
                        this.accessModifier();
                    }
                }
                this.state = 296;
                this.match(cqlParser.T__9);
                this.state = 297;
                this.identifier();
                this.state = 298;
                this.match(cqlParser.T__10);
                this.state = 299;
                this.codesystemId();
                this.state = 302;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__1) {
                    {
                        this.state = 300;
                        this.match(cqlParser.T__1);
                        this.state = 301;
                        this.versionSpecifier();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    valuesetDefinition() {
        let _localctx = new ValuesetDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, cqlParser.RULE_valuesetDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 305;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
                    {
                        this.state = 304;
                        this.accessModifier();
                    }
                }
                this.state = 307;
                this.match(cqlParser.T__11);
                this.state = 308;
                this.identifier();
                this.state = 309;
                this.match(cqlParser.T__10);
                this.state = 310;
                this.valuesetId();
                this.state = 313;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__1) {
                    {
                        this.state = 311;
                        this.match(cqlParser.T__1);
                        this.state = 312;
                        this.versionSpecifier();
                    }
                }
                this.state = 316;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__12) {
                    {
                        this.state = 315;
                        this.codesystems();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    codesystems() {
        let _localctx = new CodesystemsContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, cqlParser.RULE_codesystems);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 318;
                this.match(cqlParser.T__12);
                this.state = 319;
                this.match(cqlParser.T__13);
                this.state = 320;
                this.codesystemIdentifier();
                this.state = 325;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cqlParser.T__14) {
                    {
                        {
                            this.state = 321;
                            this.match(cqlParser.T__14);
                            this.state = 322;
                            this.codesystemIdentifier();
                        }
                    }
                    this.state = 327;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 328;
                this.match(cqlParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    codesystemIdentifier() {
        let _localctx = new CodesystemIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, cqlParser.RULE_codesystemIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 333;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                    case 1:
                        {
                            this.state = 330;
                            this.libraryIdentifier();
                            this.state = 331;
                            this.match(cqlParser.T__16);
                        }
                        break;
                }
                this.state = 335;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    libraryIdentifier() {
        let _localctx = new LibraryIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, cqlParser.RULE_libraryIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 337;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    codeDefinition() {
        let _localctx = new CodeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, cqlParser.RULE_codeDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 340;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
                    {
                        this.state = 339;
                        this.accessModifier();
                    }
                }
                this.state = 342;
                this.match(cqlParser.T__17);
                this.state = 343;
                this.identifier();
                this.state = 344;
                this.match(cqlParser.T__10);
                this.state = 345;
                this.codeId();
                this.state = 346;
                this.match(cqlParser.T__18);
                this.state = 347;
                this.codesystemIdentifier();
                this.state = 349;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__149) {
                    {
                        this.state = 348;
                        this.displayClause();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    conceptDefinition() {
        let _localctx = new ConceptDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, cqlParser.RULE_conceptDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 352;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
                    {
                        this.state = 351;
                        this.accessModifier();
                    }
                }
                this.state = 354;
                this.match(cqlParser.T__19);
                this.state = 355;
                this.identifier();
                this.state = 356;
                this.match(cqlParser.T__10);
                this.state = 357;
                this.match(cqlParser.T__13);
                this.state = 358;
                this.codeIdentifier();
                this.state = 363;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cqlParser.T__14) {
                    {
                        {
                            this.state = 359;
                            this.match(cqlParser.T__14);
                            this.state = 360;
                            this.codeIdentifier();
                        }
                    }
                    this.state = 365;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 366;
                this.match(cqlParser.T__15);
                this.state = 368;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__149) {
                    {
                        this.state = 367;
                        this.displayClause();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    codeIdentifier() {
        let _localctx = new CodeIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, cqlParser.RULE_codeIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 373;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                    case 1:
                        {
                            this.state = 370;
                            this.libraryIdentifier();
                            this.state = 371;
                            this.match(cqlParser.T__16);
                        }
                        break;
                }
                this.state = 375;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    codesystemId() {
        let _localctx = new CodesystemIdContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, cqlParser.RULE_codesystemId);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                this.match(cqlParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    valuesetId() {
        let _localctx = new ValuesetIdContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, cqlParser.RULE_valuesetId);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 379;
                this.match(cqlParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    versionSpecifier() {
        let _localctx = new VersionSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, cqlParser.RULE_versionSpecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 381;
                this.match(cqlParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    codeId() {
        let _localctx = new CodeIdContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, cqlParser.RULE_codeId);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 383;
                this.match(cqlParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeSpecifier() {
        let _localctx = new TypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, cqlParser.RULE_typeSpecifier);
        try {
            this.state = 390;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case cqlParser.T__0:
                case cqlParser.T__1:
                case cqlParser.T__2:
                case cqlParser.T__3:
                case cqlParser.T__4:
                case cqlParser.T__5:
                case cqlParser.T__6:
                case cqlParser.T__7:
                case cqlParser.T__8:
                case cqlParser.T__9:
                case cqlParser.T__11:
                case cqlParser.T__12:
                case cqlParser.T__17:
                case cqlParser.T__19:
                case cqlParser.T__26:
                case cqlParser.T__27:
                case cqlParser.T__28:
                case cqlParser.T__41:
                case cqlParser.T__46:
                case cqlParser.T__47:
                case cqlParser.T__48:
                case cqlParser.T__49:
                case cqlParser.T__50:
                case cqlParser.T__70:
                case cqlParser.T__72:
                case cqlParser.T__73:
                case cqlParser.T__75:
                case cqlParser.T__76:
                case cqlParser.T__77:
                case cqlParser.T__86:
                case cqlParser.T__87:
                case cqlParser.T__88:
                case cqlParser.T__101:
                case cqlParser.T__102:
                case cqlParser.T__104:
                case cqlParser.T__105:
                case cqlParser.T__106:
                case cqlParser.T__114:
                case cqlParser.T__115:
                case cqlParser.T__126:
                case cqlParser.T__127:
                case cqlParser.T__128:
                case cqlParser.T__129:
                case cqlParser.T__136:
                case cqlParser.T__137:
                case cqlParser.T__140:
                case cqlParser.T__144:
                case cqlParser.T__145:
                case cqlParser.T__149:
                case cqlParser.T__150:
                case cqlParser.T__151:
                case cqlParser.QUOTEDIDENTIFIER:
                case cqlParser.IDENTIFIER:
                case cqlParser.DELIMITEDIDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 385;
                        this.namedTypeSpecifier();
                    }
                    break;
                case cqlParser.T__20:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 386;
                        this.listTypeSpecifier();
                    }
                    break;
                case cqlParser.T__23:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 387;
                        this.intervalTypeSpecifier();
                    }
                    break;
                case cqlParser.T__24:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 388;
                        this.tupleTypeSpecifier();
                    }
                    break;
                case cqlParser.T__25:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 389;
                        this.choiceTypeSpecifier();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    namedTypeSpecifier() {
        let _localctx = new NamedTypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, cqlParser.RULE_namedTypeSpecifier);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 397;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 392;
                                this.qualifier();
                                this.state = 393;
                                this.match(cqlParser.T__16);
                            }
                        }
                    }
                    this.state = 399;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                }
                this.state = 400;
                this.referentialOrTypeNameIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    modelIdentifier() {
        let _localctx = new ModelIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, cqlParser.RULE_modelIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 402;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    listTypeSpecifier() {
        let _localctx = new ListTypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, cqlParser.RULE_listTypeSpecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 404;
                this.match(cqlParser.T__20);
                this.state = 405;
                this.match(cqlParser.T__21);
                this.state = 406;
                this.typeSpecifier();
                this.state = 407;
                this.match(cqlParser.T__22);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    intervalTypeSpecifier() {
        let _localctx = new IntervalTypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, cqlParser.RULE_intervalTypeSpecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 409;
                this.match(cqlParser.T__23);
                this.state = 410;
                this.match(cqlParser.T__21);
                this.state = 411;
                this.typeSpecifier();
                this.state = 412;
                this.match(cqlParser.T__22);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tupleTypeSpecifier() {
        let _localctx = new TupleTypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, cqlParser.RULE_tupleTypeSpecifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 414;
                this.match(cqlParser.T__24);
                this.state = 415;
                this.match(cqlParser.T__13);
                this.state = 416;
                this.tupleElementDefinition();
                this.state = 421;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cqlParser.T__14) {
                    {
                        {
                            this.state = 417;
                            this.match(cqlParser.T__14);
                            this.state = 418;
                            this.tupleElementDefinition();
                        }
                    }
                    this.state = 423;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 424;
                this.match(cqlParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tupleElementDefinition() {
        let _localctx = new TupleElementDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, cqlParser.RULE_tupleElementDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 426;
                this.referentialIdentifier();
                this.state = 427;
                this.typeSpecifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    choiceTypeSpecifier() {
        let _localctx = new ChoiceTypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, cqlParser.RULE_choiceTypeSpecifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 429;
                this.match(cqlParser.T__25);
                this.state = 430;
                this.match(cqlParser.T__21);
                this.state = 431;
                this.typeSpecifier();
                this.state = 436;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cqlParser.T__14) {
                    {
                        {
                            this.state = 432;
                            this.match(cqlParser.T__14);
                            this.state = 433;
                            this.typeSpecifier();
                        }
                    }
                    this.state = 438;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 439;
                this.match(cqlParser.T__22);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, cqlParser.RULE_statement);
        try {
            this.state = 444;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 441;
                        this.expressionDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 442;
                        this.contextDefinition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 443;
                        this.functionDefinition();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expressionDefinition() {
        let _localctx = new ExpressionDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, cqlParser.RULE_expressionDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
                this.match(cqlParser.T__26);
                this.state = 448;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
                    {
                        this.state = 447;
                        this.accessModifier();
                    }
                }
                this.state = 450;
                this.identifier();
                this.state = 451;
                this.match(cqlParser.T__10);
                this.state = 452;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contextDefinition() {
        let _localctx = new ContextDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, cqlParser.RULE_contextDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 454;
                this.match(cqlParser.T__27);
                this.state = 458;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                    case 1:
                        {
                            this.state = 455;
                            this.modelIdentifier();
                            this.state = 456;
                            this.match(cqlParser.T__16);
                        }
                        break;
                }
                this.state = 460;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionDefinition() {
        let _localctx = new FunctionDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, cqlParser.RULE_functionDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 462;
                this.match(cqlParser.T__26);
                this.state = 464;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
                    {
                        this.state = 463;
                        this.accessModifier();
                    }
                }
                this.state = 466;
                this.match(cqlParser.T__28);
                this.state = 467;
                this.identifierOrFunctionIdentifier();
                this.state = 468;
                this.match(cqlParser.T__29);
                this.state = 477;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__17) | (1 << cqlParser.T__19) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (cqlParser.T__41 - 42)) | (1 << (cqlParser.T__46 - 42)) | (1 << (cqlParser.T__47 - 42)) | (1 << (cqlParser.T__48 - 42)) | (1 << (cqlParser.T__49 - 42)) | (1 << (cqlParser.T__50 - 42)) | (1 << (cqlParser.T__70 - 42)) | (1 << (cqlParser.T__72 - 42)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (cqlParser.T__73 - 74)) | (1 << (cqlParser.T__75 - 74)) | (1 << (cqlParser.T__76 - 74)) | (1 << (cqlParser.T__77 - 74)) | (1 << (cqlParser.T__86 - 74)) | (1 << (cqlParser.T__87 - 74)) | (1 << (cqlParser.T__88 - 74)) | (1 << (cqlParser.T__101 - 74)) | (1 << (cqlParser.T__102 - 74)) | (1 << (cqlParser.T__104 - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (cqlParser.T__105 - 106)) | (1 << (cqlParser.T__106 - 106)) | (1 << (cqlParser.T__114 - 106)) | (1 << (cqlParser.T__115 - 106)) | (1 << (cqlParser.T__126 - 106)) | (1 << (cqlParser.T__127 - 106)) | (1 << (cqlParser.T__128 - 106)) | (1 << (cqlParser.T__129 - 106)) | (1 << (cqlParser.T__136 - 106)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (cqlParser.T__137 - 138)) | (1 << (cqlParser.T__140 - 138)) | (1 << (cqlParser.T__144 - 138)) | (1 << (cqlParser.T__145 - 138)) | (1 << (cqlParser.T__149 - 138)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 138)) | (1 << (cqlParser.IDENTIFIER - 138)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 138)))) !== 0)) {
                    {
                        this.state = 469;
                        this.operandDefinition();
                        this.state = 474;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === cqlParser.T__14) {
                            {
                                {
                                    this.state = 470;
                                    this.match(cqlParser.T__14);
                                    this.state = 471;
                                    this.operandDefinition();
                                }
                            }
                            this.state = 476;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 479;
                this.match(cqlParser.T__30);
                this.state = 482;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__31) {
                    {
                        this.state = 480;
                        this.match(cqlParser.T__31);
                        this.state = 481;
                        this.typeSpecifier();
                    }
                }
                this.state = 484;
                this.match(cqlParser.T__10);
                this.state = 487;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case cqlParser.T__0:
                    case cqlParser.T__1:
                    case cqlParser.T__2:
                    case cqlParser.T__3:
                    case cqlParser.T__4:
                    case cqlParser.T__5:
                    case cqlParser.T__6:
                    case cqlParser.T__7:
                    case cqlParser.T__8:
                    case cqlParser.T__9:
                    case cqlParser.T__11:
                    case cqlParser.T__12:
                    case cqlParser.T__13:
                    case cqlParser.T__17:
                    case cqlParser.T__18:
                    case cqlParser.T__19:
                    case cqlParser.T__20:
                    case cqlParser.T__23:
                    case cqlParser.T__24:
                    case cqlParser.T__26:
                    case cqlParser.T__27:
                    case cqlParser.T__28:
                    case cqlParser.T__29:
                    case cqlParser.T__36:
                    case cqlParser.T__41:
                    case cqlParser.T__44:
                    case cqlParser.T__46:
                    case cqlParser.T__47:
                    case cqlParser.T__48:
                    case cqlParser.T__49:
                    case cqlParser.T__50:
                    case cqlParser.T__52:
                    case cqlParser.T__53:
                    case cqlParser.T__54:
                    case cqlParser.T__55:
                    case cqlParser.T__57:
                    case cqlParser.T__58:
                    case cqlParser.T__62:
                    case cqlParser.T__63:
                    case cqlParser.T__70:
                    case cqlParser.T__72:
                    case cqlParser.T__73:
                    case cqlParser.T__75:
                    case cqlParser.T__76:
                    case cqlParser.T__77:
                    case cqlParser.T__78:
                    case cqlParser.T__79:
                    case cqlParser.T__80:
                    case cqlParser.T__81:
                    case cqlParser.T__82:
                    case cqlParser.T__83:
                    case cqlParser.T__84:
                    case cqlParser.T__85:
                    case cqlParser.T__86:
                    case cqlParser.T__87:
                    case cqlParser.T__88:
                    case cqlParser.T__89:
                    case cqlParser.T__90:
                    case cqlParser.T__91:
                    case cqlParser.T__92:
                    case cqlParser.T__93:
                    case cqlParser.T__94:
                    case cqlParser.T__95:
                    case cqlParser.T__96:
                    case cqlParser.T__97:
                    case cqlParser.T__99:
                    case cqlParser.T__100:
                    case cqlParser.T__101:
                    case cqlParser.T__102:
                    case cqlParser.T__104:
                    case cqlParser.T__105:
                    case cqlParser.T__106:
                    case cqlParser.T__107:
                    case cqlParser.T__108:
                    case cqlParser.T__109:
                    case cqlParser.T__110:
                    case cqlParser.T__114:
                    case cqlParser.T__115:
                    case cqlParser.T__117:
                    case cqlParser.T__120:
                    case cqlParser.T__121:
                    case cqlParser.T__122:
                    case cqlParser.T__123:
                    case cqlParser.T__126:
                    case cqlParser.T__127:
                    case cqlParser.T__128:
                    case cqlParser.T__129:
                    case cqlParser.T__136:
                    case cqlParser.T__137:
                    case cqlParser.T__140:
                    case cqlParser.T__144:
                    case cqlParser.T__145:
                    case cqlParser.T__146:
                    case cqlParser.T__147:
                    case cqlParser.T__148:
                    case cqlParser.T__149:
                    case cqlParser.T__150:
                    case cqlParser.T__151:
                    case cqlParser.T__152:
                    case cqlParser.QUOTEDIDENTIFIER:
                    case cqlParser.DATETIME:
                    case cqlParser.TIME:
                    case cqlParser.IDENTIFIER:
                    case cqlParser.DELIMITEDIDENTIFIER:
                    case cqlParser.STRING:
                    case cqlParser.NUMBER:
                        {
                            this.state = 485;
                            this.functionBody();
                        }
                        break;
                    case cqlParser.T__32:
                        {
                            this.state = 486;
                            this.match(cqlParser.T__32);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    operandDefinition() {
        let _localctx = new OperandDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, cqlParser.RULE_operandDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 489;
                this.referentialIdentifier();
                this.state = 490;
                this.typeSpecifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionBody() {
        let _localctx = new FunctionBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, cqlParser.RULE_functionBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 492;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    querySource() {
        let _localctx = new QuerySourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, cqlParser.RULE_querySource);
        try {
            this.state = 500;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case cqlParser.T__36:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 494;
                        this.retrieve();
                    }
                    break;
                case cqlParser.T__0:
                case cqlParser.T__1:
                case cqlParser.T__2:
                case cqlParser.T__3:
                case cqlParser.T__4:
                case cqlParser.T__5:
                case cqlParser.T__6:
                case cqlParser.T__7:
                case cqlParser.T__8:
                case cqlParser.T__9:
                case cqlParser.T__11:
                case cqlParser.T__12:
                case cqlParser.T__17:
                case cqlParser.T__19:
                case cqlParser.T__26:
                case cqlParser.T__27:
                case cqlParser.T__28:
                case cqlParser.T__41:
                case cqlParser.T__46:
                case cqlParser.T__47:
                case cqlParser.T__48:
                case cqlParser.T__49:
                case cqlParser.T__50:
                case cqlParser.T__70:
                case cqlParser.T__72:
                case cqlParser.T__73:
                case cqlParser.T__75:
                case cqlParser.T__76:
                case cqlParser.T__77:
                case cqlParser.T__86:
                case cqlParser.T__87:
                case cqlParser.T__88:
                case cqlParser.T__101:
                case cqlParser.T__102:
                case cqlParser.T__104:
                case cqlParser.T__105:
                case cqlParser.T__106:
                case cqlParser.T__114:
                case cqlParser.T__115:
                case cqlParser.T__126:
                case cqlParser.T__127:
                case cqlParser.T__128:
                case cqlParser.T__129:
                case cqlParser.T__136:
                case cqlParser.T__137:
                case cqlParser.T__140:
                case cqlParser.T__144:
                case cqlParser.T__145:
                case cqlParser.T__149:
                case cqlParser.QUOTEDIDENTIFIER:
                case cqlParser.IDENTIFIER:
                case cqlParser.DELIMITEDIDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 495;
                        this.qualifiedIdentifierExpression();
                    }
                    break;
                case cqlParser.T__29:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 496;
                        this.match(cqlParser.T__29);
                        this.state = 497;
                        this.expression(0);
                        this.state = 498;
                        this.match(cqlParser.T__30);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    aliasedQuerySource() {
        let _localctx = new AliasedQuerySourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, cqlParser.RULE_aliasedQuerySource);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 502;
                this.querySource();
                this.state = 503;
                this.alias();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    alias() {
        let _localctx = new AliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, cqlParser.RULE_alias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 505;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    queryInclusionClause() {
        let _localctx = new QueryInclusionClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, cqlParser.RULE_queryInclusionClause);
        try {
            this.state = 509;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case cqlParser.T__33:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 507;
                        this.withClause();
                    }
                    break;
                case cqlParser.T__35:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 508;
                        this.withoutClause();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    withClause() {
        let _localctx = new WithClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, cqlParser.RULE_withClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 511;
                this.match(cqlParser.T__33);
                this.state = 512;
                this.aliasedQuerySource();
                this.state = 513;
                this.match(cqlParser.T__34);
                this.state = 514;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    withoutClause() {
        let _localctx = new WithoutClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, cqlParser.RULE_withoutClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 516;
                this.match(cqlParser.T__35);
                this.state = 517;
                this.aliasedQuerySource();
                this.state = 518;
                this.match(cqlParser.T__34);
                this.state = 519;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    retrieve() {
        let _localctx = new RetrieveContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, cqlParser.RULE_retrieve);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 521;
                this.match(cqlParser.T__36);
                this.state = 525;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                    case 1:
                        {
                            this.state = 522;
                            this.contextIdentifier();
                            this.state = 523;
                            this.match(cqlParser.T__37);
                        }
                        break;
                }
                this.state = 527;
                this.namedTypeSpecifier();
                this.state = 535;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__10) {
                    {
                        this.state = 528;
                        this.match(cqlParser.T__10);
                        this.state = 532;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                            case 1:
                                {
                                    this.state = 529;
                                    this.codePath();
                                    this.state = 530;
                                    this.match(cqlParser.T__38);
                                }
                                break;
                        }
                        this.state = 534;
                        this.terminology();
                    }
                }
                this.state = 537;
                this.match(cqlParser.T__39);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contextIdentifier() {
        let _localctx = new ContextIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, cqlParser.RULE_contextIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 539;
                this.qualifiedIdentifierExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    codePath() {
        let _localctx = new CodePathContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, cqlParser.RULE_codePath);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 541;
                this.simplePath(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    terminology() {
        let _localctx = new TerminologyContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, cqlParser.RULE_terminology);
        try {
            this.state = 545;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 543;
                        this.qualifiedIdentifierExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 544;
                        this.expression(0);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualifier() {
        let _localctx = new QualifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, cqlParser.RULE_qualifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 547;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query() {
        let _localctx = new QueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, cqlParser.RULE_query);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 549;
                this.sourceClause();
                this.state = 551;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                    case 1:
                        {
                            this.state = 550;
                            this.letClause();
                        }
                        break;
                }
                this.state = 556;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 553;
                                this.queryInclusionClause();
                            }
                        }
                    }
                    this.state = 558;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                }
                this.state = 560;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
                    case 1:
                        {
                            this.state = 559;
                            this.whereClause();
                        }
                        break;
                }
                this.state = 563;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                    case 1:
                        {
                            this.state = 562;
                            this.returnClause();
                        }
                        break;
                }
                this.state = 566;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                    case 1:
                        {
                            this.state = 565;
                            this.sortClause();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sourceClause() {
        let _localctx = new SourceClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, cqlParser.RULE_sourceClause);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 569;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__18) {
                    {
                        this.state = 568;
                        this.match(cqlParser.T__18);
                    }
                }
                this.state = 571;
                this.aliasedQuerySource();
                this.state = 576;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 572;
                                this.match(cqlParser.T__14);
                                this.state = 573;
                                this.aliasedQuerySource();
                            }
                        }
                    }
                    this.state = 578;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    letClause() {
        let _localctx = new LetClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, cqlParser.RULE_letClause);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 579;
                this.match(cqlParser.T__40);
                this.state = 580;
                this.letClauseItem();
                this.state = 585;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 581;
                                this.match(cqlParser.T__14);
                                this.state = 582;
                                this.letClauseItem();
                            }
                        }
                    }
                    this.state = 587;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    letClauseItem() {
        let _localctx = new LetClauseItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, cqlParser.RULE_letClauseItem);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 588;
                this.identifier();
                this.state = 589;
                this.match(cqlParser.T__10);
                this.state = 590;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    whereClause() {
        let _localctx = new WhereClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, cqlParser.RULE_whereClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 592;
                this.match(cqlParser.T__41);
                this.state = 593;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    returnClause() {
        let _localctx = new ReturnClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, cqlParser.RULE_returnClause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 595;
                this.match(cqlParser.T__42);
                this.state = 597;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                    case 1:
                        {
                            this.state = 596;
                            _la = this._input.LA(1);
                            if (!(_la === cqlParser.T__43 || _la === cqlParser.T__44)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 599;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sortClause() {
        let _localctx = new SortClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, cqlParser.RULE_sortClause);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 601;
                this.match(cqlParser.T__45);
                this.state = 612;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case cqlParser.T__47:
                    case cqlParser.T__48:
                    case cqlParser.T__49:
                    case cqlParser.T__50:
                        {
                            this.state = 602;
                            this.sortDirection();
                        }
                        break;
                    case cqlParser.T__46:
                        {
                            {
                                this.state = 603;
                                this.match(cqlParser.T__46);
                                this.state = 604;
                                this.sortByItem();
                                this.state = 609;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 605;
                                                this.match(cqlParser.T__14);
                                                this.state = 606;
                                                this.sortByItem();
                                            }
                                        }
                                    }
                                    this.state = 611;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sortDirection() {
        let _localctx = new SortDirectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, cqlParser.RULE_sortDirection);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 614;
                _la = this._input.LA(1);
                if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (cqlParser.T__47 - 48)) | (1 << (cqlParser.T__48 - 48)) | (1 << (cqlParser.T__49 - 48)) | (1 << (cqlParser.T__50 - 48)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sortByItem() {
        let _localctx = new SortByItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, cqlParser.RULE_sortByItem);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 616;
                this.expressionTerm(0);
                this.state = 618;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                    case 1:
                        {
                            this.state = 617;
                            this.sortDirection();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualifiedIdentifier() {
        let _localctx = new QualifiedIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, cqlParser.RULE_qualifiedIdentifier);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 625;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 620;
                                this.qualifier();
                                this.state = 621;
                                this.match(cqlParser.T__16);
                            }
                        }
                    }
                    this.state = 627;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                }
                this.state = 628;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualifiedIdentifierExpression() {
        let _localctx = new QualifiedIdentifierExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, cqlParser.RULE_qualifiedIdentifierExpression);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 635;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 630;
                                this.qualifierExpression();
                                this.state = 631;
                                this.match(cqlParser.T__16);
                            }
                        }
                    }
                    this.state = 637;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                }
                this.state = 638;
                this.referentialIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualifierExpression() {
        let _localctx = new QualifierExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, cqlParser.RULE_qualifierExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 640;
                this.referentialIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simplePath(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new SimplePathContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 112;
        this.enterRecursionRule(_localctx, 112, cqlParser.RULE_simplePath, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    _localctx = new SimplePathReferentialIdentifierContext(_localctx);
                    this._ctx = _localctx;
                    _prevctx = _localctx;
                    this.state = 643;
                    this.referentialIdentifier();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 655;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 653;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new SimplePathQualifiedIdentifierContext(new SimplePathContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_simplePath);
                                        this.state = 645;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 646;
                                        this.match(cqlParser.T__16);
                                        this.state = 647;
                                        this.referentialIdentifier();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new SimplePathIndexerContext(new SimplePathContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_simplePath);
                                        this.state = 648;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 649;
                                        this.match(cqlParser.T__36);
                                        this.state = 650;
                                        this.simpleLiteral();
                                        this.state = 651;
                                        this.match(cqlParser.T__39);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 657;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simpleLiteral() {
        let _localctx = new SimpleLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, cqlParser.RULE_simpleLiteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 658;
                _la = this._input.LA(1);
                if (!(_la === cqlParser.STRING || _la === cqlParser.NUMBER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 116;
        this.enterRecursionRule(_localctx, 116, cqlParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 691;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                    case 1:
                        {
                            _localctx = new TermExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 661;
                            this.expressionTerm(0);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new RetrieveExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 662;
                            this.retrieve();
                        }
                        break;
                    case 3:
                        {
                            _localctx = new QueryExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 663;
                            this.query();
                        }
                        break;
                    case 4:
                        {
                            _localctx = new CastExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 664;
                            this.match(cqlParser.T__57);
                            this.state = 665;
                            this.expression(0);
                            this.state = 666;
                            this.match(cqlParser.T__56);
                            this.state = 667;
                            this.typeSpecifier();
                        }
                        break;
                    case 5:
                        {
                            _localctx = new NotExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 669;
                            this.match(cqlParser.T__52);
                            this.state = 670;
                            this.expression(13);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new ExistenceExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 671;
                            this.match(cqlParser.T__58);
                            this.state = 672;
                            this.expression(12);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new DurationBetweenExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 675;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === cqlParser.T__62) {
                                {
                                    this.state = 673;
                                    this.match(cqlParser.T__62);
                                    this.state = 674;
                                    this.match(cqlParser.T__38);
                                }
                            }
                            this.state = 677;
                            this.pluralDateTimePrecision();
                            this.state = 678;
                            this.match(cqlParser.T__60);
                            this.state = 679;
                            this.expressionTerm(0);
                            this.state = 680;
                            this.match(cqlParser.T__61);
                            this.state = 681;
                            this.expressionTerm(0);
                        }
                        break;
                    case 8:
                        {
                            _localctx = new DifferenceBetweenExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 683;
                            this.match(cqlParser.T__63);
                            this.state = 684;
                            this.match(cqlParser.T__38);
                            this.state = 685;
                            this.pluralDateTimePrecision();
                            this.state = 686;
                            this.match(cqlParser.T__60);
                            this.state = 687;
                            this.expressionTerm(0);
                            this.state = 688;
                            this.match(cqlParser.T__61);
                            this.state = 689;
                            this.expressionTerm(0);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 741;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 739;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new InequalityExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
                                        this.state = 693;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 694;
                                        _la = this._input.LA(1);
                                        if (!(_la === cqlParser.T__21 || _la === cqlParser.T__22 || _la === cqlParser.T__64 || _la === cqlParser.T__65)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 695;
                                        this.expression(9);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new TimingExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
                                        this.state = 696;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 697;
                                        this.intervalOperatorPhrase();
                                        this.state = 698;
                                        this.expression(8);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
                                        this.state = 700;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 701;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (cqlParser.T__66 - 67)) | (1 << (cqlParser.T__67 - 67)) | (1 << (cqlParser.T__68 - 67)) | (1 << (cqlParser.T__69 - 67)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 702;
                                        this.expression(7);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new MembershipExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
                                        this.state = 703;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 704;
                                        _la = this._input.LA(1);
                                        if (!(_la === cqlParser.T__38 || _la === cqlParser.T__70)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 706;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 705;
                                                    this.dateTimePrecisionSpecifier();
                                                }
                                                break;
                                        }
                                        this.state = 708;
                                        this.expression(6);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
                                        this.state = 709;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 710;
                                        this.match(cqlParser.T__61);
                                        this.state = 711;
                                        this.expression(5);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
                                        this.state = 712;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 713;
                                        _la = this._input.LA(1);
                                        if (!(_la === cqlParser.T__71 || _la === cqlParser.T__72)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 714;
                                        this.expression(4);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ImpliesExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
                                        this.state = 715;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 716;
                                        this.match(cqlParser.T__73);
                                        this.state = 717;
                                        this.expression(3);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new InFixSetExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
                                        this.state = 718;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 719;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (cqlParser.T__74 - 75)) | (1 << (cqlParser.T__75 - 75)) | (1 << (cqlParser.T__76 - 75)) | (1 << (cqlParser.T__77 - 75)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 720;
                                        this.expression(2);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new BooleanExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
                                        this.state = 721;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 722;
                                        this.match(cqlParser.T__51);
                                        this.state = 724;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === cqlParser.T__52) {
                                            {
                                                this.state = 723;
                                                this.match(cqlParser.T__52);
                                            }
                                        }
                                        this.state = 726;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (cqlParser.T__53 - 54)) | (1 << (cqlParser.T__54 - 54)) | (1 << (cqlParser.T__55 - 54)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new TypeExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
                                        this.state = 727;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 728;
                                        _la = this._input.LA(1);
                                        if (!(_la === cqlParser.T__51 || _la === cqlParser.T__56)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 729;
                                        this.typeSpecifier();
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new BetweenExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
                                        this.state = 730;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 732;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === cqlParser.T__59) {
                                            {
                                                this.state = 731;
                                                this.match(cqlParser.T__59);
                                            }
                                        }
                                        this.state = 734;
                                        this.match(cqlParser.T__60);
                                        this.state = 735;
                                        this.expressionTerm(0);
                                        this.state = 736;
                                        this.match(cqlParser.T__61);
                                        this.state = 737;
                                        this.expressionTerm(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 743;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dateTimePrecision() {
        let _localctx = new DateTimePrecisionContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, cqlParser.RULE_dateTimePrecision);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 744;
                _la = this._input.LA(1);
                if (!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (cqlParser.T__78 - 79)) | (1 << (cqlParser.T__79 - 79)) | (1 << (cqlParser.T__80 - 79)) | (1 << (cqlParser.T__81 - 79)) | (1 << (cqlParser.T__82 - 79)) | (1 << (cqlParser.T__83 - 79)) | (1 << (cqlParser.T__84 - 79)) | (1 << (cqlParser.T__85 - 79)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dateTimeComponent() {
        let _localctx = new DateTimeComponentContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, cqlParser.RULE_dateTimeComponent);
        try {
            this.state = 750;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case cqlParser.T__78:
                case cqlParser.T__79:
                case cqlParser.T__80:
                case cqlParser.T__81:
                case cqlParser.T__82:
                case cqlParser.T__83:
                case cqlParser.T__84:
                case cqlParser.T__85:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 746;
                        this.dateTimePrecision();
                    }
                    break;
                case cqlParser.T__86:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 747;
                        this.match(cqlParser.T__86);
                    }
                    break;
                case cqlParser.T__87:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 748;
                        this.match(cqlParser.T__87);
                    }
                    break;
                case cqlParser.T__88:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 749;
                        this.match(cqlParser.T__88);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pluralDateTimePrecision() {
        let _localctx = new PluralDateTimePrecisionContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, cqlParser.RULE_pluralDateTimePrecision);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 752;
                _la = this._input.LA(1);
                if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (cqlParser.T__89 - 90)) | (1 << (cqlParser.T__90 - 90)) | (1 << (cqlParser.T__91 - 90)) | (1 << (cqlParser.T__92 - 90)) | (1 << (cqlParser.T__93 - 90)) | (1 << (cqlParser.T__94 - 90)) | (1 << (cqlParser.T__95 - 90)) | (1 << (cqlParser.T__96 - 90)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expressionTerm(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionTermContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 124;
        this.enterRecursionRule(_localctx, 124, cqlParser.RULE_expressionTerm, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 832;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
                    case 1:
                        {
                            _localctx = new TermExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 755;
                            this.term();
                        }
                        break;
                    case 2:
                        {
                            _localctx = new ConversionExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 756;
                            this.match(cqlParser.T__97);
                            this.state = 757;
                            this.expression(0);
                            this.state = 758;
                            this.match(cqlParser.T__98);
                            this.state = 761;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case cqlParser.T__0:
                                case cqlParser.T__1:
                                case cqlParser.T__2:
                                case cqlParser.T__3:
                                case cqlParser.T__4:
                                case cqlParser.T__5:
                                case cqlParser.T__6:
                                case cqlParser.T__7:
                                case cqlParser.T__8:
                                case cqlParser.T__9:
                                case cqlParser.T__11:
                                case cqlParser.T__12:
                                case cqlParser.T__17:
                                case cqlParser.T__19:
                                case cqlParser.T__20:
                                case cqlParser.T__23:
                                case cqlParser.T__24:
                                case cqlParser.T__25:
                                case cqlParser.T__26:
                                case cqlParser.T__27:
                                case cqlParser.T__28:
                                case cqlParser.T__41:
                                case cqlParser.T__46:
                                case cqlParser.T__47:
                                case cqlParser.T__48:
                                case cqlParser.T__49:
                                case cqlParser.T__50:
                                case cqlParser.T__70:
                                case cqlParser.T__72:
                                case cqlParser.T__73:
                                case cqlParser.T__75:
                                case cqlParser.T__76:
                                case cqlParser.T__77:
                                case cqlParser.T__86:
                                case cqlParser.T__87:
                                case cqlParser.T__88:
                                case cqlParser.T__101:
                                case cqlParser.T__102:
                                case cqlParser.T__104:
                                case cqlParser.T__105:
                                case cqlParser.T__106:
                                case cqlParser.T__114:
                                case cqlParser.T__115:
                                case cqlParser.T__126:
                                case cqlParser.T__127:
                                case cqlParser.T__128:
                                case cqlParser.T__129:
                                case cqlParser.T__136:
                                case cqlParser.T__137:
                                case cqlParser.T__140:
                                case cqlParser.T__144:
                                case cqlParser.T__145:
                                case cqlParser.T__149:
                                case cqlParser.T__150:
                                case cqlParser.T__151:
                                case cqlParser.QUOTEDIDENTIFIER:
                                case cqlParser.IDENTIFIER:
                                case cqlParser.DELIMITEDIDENTIFIER:
                                    {
                                        this.state = 759;
                                        this.typeSpecifier();
                                    }
                                    break;
                                case cqlParser.T__78:
                                case cqlParser.T__79:
                                case cqlParser.T__80:
                                case cqlParser.T__81:
                                case cqlParser.T__82:
                                case cqlParser.T__83:
                                case cqlParser.T__84:
                                case cqlParser.T__85:
                                case cqlParser.T__89:
                                case cqlParser.T__90:
                                case cqlParser.T__91:
                                case cqlParser.T__92:
                                case cqlParser.T__93:
                                case cqlParser.T__94:
                                case cqlParser.T__95:
                                case cqlParser.T__96:
                                case cqlParser.STRING:
                                    {
                                        this.state = 760;
                                        this.unit();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        break;
                    case 3:
                        {
                            _localctx = new PolarityExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 763;
                            _la = this._input.LA(1);
                            if (!(_la === cqlParser.T__99 || _la === cqlParser.T__100)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 764;
                            this.expressionTerm(18);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new TimeBoundaryExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 765;
                            _la = this._input.LA(1);
                            if (!(_la === cqlParser.T__101 || _la === cqlParser.T__102)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 766;
                            this.match(cqlParser.T__103);
                            this.state = 767;
                            this.expressionTerm(17);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new TimeUnitExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 768;
                            this.dateTimeComponent();
                            this.state = 769;
                            this.match(cqlParser.T__18);
                            this.state = 770;
                            this.expressionTerm(16);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new DurationExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 772;
                            this.match(cqlParser.T__62);
                            this.state = 773;
                            this.match(cqlParser.T__38);
                            this.state = 774;
                            this.pluralDateTimePrecision();
                            this.state = 775;
                            this.match(cqlParser.T__103);
                            this.state = 776;
                            this.expressionTerm(15);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new DifferenceExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 778;
                            this.match(cqlParser.T__63);
                            this.state = 779;
                            this.match(cqlParser.T__38);
                            this.state = 780;
                            this.pluralDateTimePrecision();
                            this.state = 781;
                            this.match(cqlParser.T__103);
                            this.state = 782;
                            this.expressionTerm(14);
                        }
                        break;
                    case 8:
                        {
                            _localctx = new WidthExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 784;
                            this.match(cqlParser.T__104);
                            this.state = 785;
                            this.match(cqlParser.T__103);
                            this.state = 786;
                            this.expressionTerm(13);
                        }
                        break;
                    case 9:
                        {
                            _localctx = new SuccessorExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 787;
                            this.match(cqlParser.T__105);
                            this.state = 788;
                            this.match(cqlParser.T__103);
                            this.state = 789;
                            this.expressionTerm(12);
                        }
                        break;
                    case 10:
                        {
                            _localctx = new PredecessorExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 790;
                            this.match(cqlParser.T__106);
                            this.state = 791;
                            this.match(cqlParser.T__103);
                            this.state = 792;
                            this.expressionTerm(11);
                        }
                        break;
                    case 11:
                        {
                            _localctx = new ElementExtractorExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 793;
                            this.match(cqlParser.T__107);
                            this.state = 794;
                            this.match(cqlParser.T__18);
                            this.state = 795;
                            this.expressionTerm(10);
                        }
                        break;
                    case 12:
                        {
                            _localctx = new PointExtractorExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 796;
                            this.match(cqlParser.T__108);
                            this.state = 797;
                            this.match(cqlParser.T__18);
                            this.state = 798;
                            this.expressionTerm(9);
                        }
                        break;
                    case 13:
                        {
                            _localctx = new TypeExtentExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 799;
                            _la = this._input.LA(1);
                            if (!(_la === cqlParser.T__109 || _la === cqlParser.T__110)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 800;
                            this.namedTypeSpecifier();
                        }
                        break;
                    case 14:
                        {
                            _localctx = new IfThenElseExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 801;
                            this.match(cqlParser.T__117);
                            this.state = 802;
                            this.expression(0);
                            this.state = 803;
                            this.match(cqlParser.T__118);
                            this.state = 804;
                            this.expression(0);
                            this.state = 805;
                            this.match(cqlParser.T__119);
                            this.state = 806;
                            this.expression(0);
                        }
                        break;
                    case 15:
                        {
                            _localctx = new CaseExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 808;
                            this.match(cqlParser.T__120);
                            this.state = 810;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (cqlParser.T__36 - 37)) | (1 << (cqlParser.T__41 - 37)) | (1 << (cqlParser.T__44 - 37)) | (1 << (cqlParser.T__46 - 37)) | (1 << (cqlParser.T__47 - 37)) | (1 << (cqlParser.T__48 - 37)) | (1 << (cqlParser.T__49 - 37)) | (1 << (cqlParser.T__50 - 37)) | (1 << (cqlParser.T__52 - 37)) | (1 << (cqlParser.T__53 - 37)) | (1 << (cqlParser.T__54 - 37)) | (1 << (cqlParser.T__55 - 37)) | (1 << (cqlParser.T__57 - 37)) | (1 << (cqlParser.T__58 - 37)) | (1 << (cqlParser.T__62 - 37)) | (1 << (cqlParser.T__63 - 37)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (cqlParser.T__70 - 71)) | (1 << (cqlParser.T__72 - 71)) | (1 << (cqlParser.T__73 - 71)) | (1 << (cqlParser.T__75 - 71)) | (1 << (cqlParser.T__76 - 71)) | (1 << (cqlParser.T__77 - 71)) | (1 << (cqlParser.T__78 - 71)) | (1 << (cqlParser.T__79 - 71)) | (1 << (cqlParser.T__80 - 71)) | (1 << (cqlParser.T__81 - 71)) | (1 << (cqlParser.T__82 - 71)) | (1 << (cqlParser.T__83 - 71)) | (1 << (cqlParser.T__84 - 71)) | (1 << (cqlParser.T__85 - 71)) | (1 << (cqlParser.T__86 - 71)) | (1 << (cqlParser.T__87 - 71)) | (1 << (cqlParser.T__88 - 71)) | (1 << (cqlParser.T__89 - 71)) | (1 << (cqlParser.T__90 - 71)) | (1 << (cqlParser.T__91 - 71)) | (1 << (cqlParser.T__92 - 71)) | (1 << (cqlParser.T__93 - 71)) | (1 << (cqlParser.T__94 - 71)) | (1 << (cqlParser.T__95 - 71)) | (1 << (cqlParser.T__96 - 71)) | (1 << (cqlParser.T__97 - 71)) | (1 << (cqlParser.T__99 - 71)) | (1 << (cqlParser.T__100 - 71)) | (1 << (cqlParser.T__101 - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (cqlParser.T__102 - 103)) | (1 << (cqlParser.T__104 - 103)) | (1 << (cqlParser.T__105 - 103)) | (1 << (cqlParser.T__106 - 103)) | (1 << (cqlParser.T__107 - 103)) | (1 << (cqlParser.T__108 - 103)) | (1 << (cqlParser.T__109 - 103)) | (1 << (cqlParser.T__110 - 103)) | (1 << (cqlParser.T__114 - 103)) | (1 << (cqlParser.T__115 - 103)) | (1 << (cqlParser.T__117 - 103)) | (1 << (cqlParser.T__120 - 103)) | (1 << (cqlParser.T__121 - 103)) | (1 << (cqlParser.T__122 - 103)) | (1 << (cqlParser.T__123 - 103)) | (1 << (cqlParser.T__126 - 103)) | (1 << (cqlParser.T__127 - 103)) | (1 << (cqlParser.T__128 - 103)) | (1 << (cqlParser.T__129 - 103)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__140 - 137)) | (1 << (cqlParser.T__144 - 137)) | (1 << (cqlParser.T__145 - 137)) | (1 << (cqlParser.T__146 - 137)) | (1 << (cqlParser.T__147 - 137)) | (1 << (cqlParser.T__148 - 137)) | (1 << (cqlParser.T__149 - 137)) | (1 << (cqlParser.T__150 - 137)) | (1 << (cqlParser.T__151 - 137)) | (1 << (cqlParser.T__152 - 137)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 137)) | (1 << (cqlParser.DATETIME - 137)) | (1 << (cqlParser.TIME - 137)) | (1 << (cqlParser.IDENTIFIER - 137)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 137)) | (1 << (cqlParser.STRING - 137)) | (1 << (cqlParser.NUMBER - 137)))) !== 0)) {
                                {
                                    this.state = 809;
                                    this.expression(0);
                                }
                            }
                            this.state = 813;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 812;
                                        this.caseExpressionItem();
                                    }
                                }
                                this.state = 815;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === cqlParser.T__125);
                            this.state = 817;
                            this.match(cqlParser.T__119);
                            this.state = 818;
                            this.expression(0);
                            this.state = 819;
                            this.match(cqlParser.T__102);
                        }
                        break;
                    case 16:
                        {
                            _localctx = new AggregateExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 821;
                            _la = this._input.LA(1);
                            if (!(_la === cqlParser.T__44 || _la === cqlParser.T__121)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 822;
                            this.expression(0);
                        }
                        break;
                    case 17:
                        {
                            _localctx = new SetAggregateExpressionTermContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 823;
                            _la = this._input.LA(1);
                            if (!(_la === cqlParser.T__122 || _la === cqlParser.T__123)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 824;
                            this.expression(0);
                            this.state = 830;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 825;
                                        this.match(cqlParser.T__124);
                                        this.state = 828;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 826;
                                                    this.dateTimePrecision();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 827;
                                                    this.expression(0);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 853;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 851;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new PowerExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
                                        this.state = 834;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 835;
                                        this.match(cqlParser.T__111);
                                        this.state = 836;
                                        this.expressionTerm(8);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new MultiplicationExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
                                        this.state = 837;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 838;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (cqlParser.T__112 - 113)) | (1 << (cqlParser.T__113 - 113)) | (1 << (cqlParser.T__114 - 113)) | (1 << (cqlParser.T__115 - 113)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 839;
                                        this.expressionTerm(7);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new AdditionExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
                                        this.state = 840;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 841;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (cqlParser.T__99 - 100)) | (1 << (cqlParser.T__100 - 100)) | (1 << (cqlParser.T__116 - 100)))) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 842;
                                        this.expressionTerm(6);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new InvocationExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
                                        this.state = 843;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 844;
                                        this.match(cqlParser.T__16);
                                        this.state = 845;
                                        this.qualifiedInvocation();
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new IndexedExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
                                        this.state = 846;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 847;
                                        this.match(cqlParser.T__36);
                                        this.state = 848;
                                        this.expression(0);
                                        this.state = 849;
                                        this.match(cqlParser.T__39);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 855;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    caseExpressionItem() {
        let _localctx = new CaseExpressionItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, cqlParser.RULE_caseExpressionItem);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 856;
                this.match(cqlParser.T__125);
                this.state = 857;
                this.expression(0);
                this.state = 858;
                this.match(cqlParser.T__118);
                this.state = 859;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dateTimePrecisionSpecifier() {
        let _localctx = new DateTimePrecisionSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, cqlParser.RULE_dateTimePrecisionSpecifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 861;
                this.dateTimePrecision();
                this.state = 862;
                this.match(cqlParser.T__103);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    relativeQualifier() {
        let _localctx = new RelativeQualifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, cqlParser.RULE_relativeQualifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 864;
                _la = this._input.LA(1);
                if (!(_la === cqlParser.T__126 || _la === cqlParser.T__127)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    offsetRelativeQualifier() {
        let _localctx = new OffsetRelativeQualifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, cqlParser.RULE_offsetRelativeQualifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 866;
                _la = this._input.LA(1);
                if (!(_la === cqlParser.T__128 || _la === cqlParser.T__129)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exclusiveRelativeQualifier() {
        let _localctx = new ExclusiveRelativeQualifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, cqlParser.RULE_exclusiveRelativeQualifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 868;
                _la = this._input.LA(1);
                if (!(_la === cqlParser.T__130 || _la === cqlParser.T__131)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quantityOffset() {
        let _localctx = new QuantityOffsetContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, cqlParser.RULE_quantityOffset);
        let _la;
        try {
            this.state = 877;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case cqlParser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 870;
                            this.quantity();
                            this.state = 872;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === cqlParser.T__128 || _la === cqlParser.T__129) {
                                {
                                    this.state = 871;
                                    this.offsetRelativeQualifier();
                                }
                            }
                        }
                    }
                    break;
                case cqlParser.T__130:
                case cqlParser.T__131:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 874;
                            this.exclusiveRelativeQualifier();
                            this.state = 875;
                            this.quantity();
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    temporalRelationship() {
        let _localctx = new TemporalRelationshipContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, cqlParser.RULE_temporalRelationship);
        let _la;
        try {
            this.state = 887;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 880;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === cqlParser.T__132) {
                                {
                                    this.state = 879;
                                    this.match(cqlParser.T__132);
                                }
                            }
                            this.state = 882;
                            _la = this._input.LA(1);
                            if (!(_la === cqlParser.T__133 || _la === cqlParser.T__134)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 883;
                            _la = this._input.LA(1);
                            if (!(_la === cqlParser.T__133 || _la === cqlParser.T__134)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 885;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === cqlParser.T__135) {
                                {
                                    this.state = 884;
                                    this.match(cqlParser.T__135);
                                }
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    intervalOperatorPhrase() {
        let _localctx = new IntervalOperatorPhraseContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, cqlParser.RULE_intervalOperatorPhrase);
        let _la;
        try {
            this.state = 970;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                case 1:
                    _localctx = new ConcurrentWithIntervalOperatorPhraseContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 890;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0)) {
                            {
                                this.state = 889;
                                _la = this._input.LA(1);
                                if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 892;
                        this.match(cqlParser.T__139);
                        this.state = 894;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (cqlParser.T__78 - 79)) | (1 << (cqlParser.T__79 - 79)) | (1 << (cqlParser.T__80 - 79)) | (1 << (cqlParser.T__81 - 79)) | (1 << (cqlParser.T__82 - 79)) | (1 << (cqlParser.T__83 - 79)) | (1 << (cqlParser.T__84 - 79)) | (1 << (cqlParser.T__85 - 79)))) !== 0)) {
                            {
                                this.state = 893;
                                this.dateTimePrecision();
                            }
                        }
                        this.state = 898;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case cqlParser.T__126:
                            case cqlParser.T__127:
                                {
                                    this.state = 896;
                                    this.relativeQualifier();
                                }
                                break;
                            case cqlParser.T__56:
                                {
                                    this.state = 897;
                                    this.match(cqlParser.T__56);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 901;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                            case 1:
                                {
                                    this.state = 900;
                                    _la = this._input.LA(1);
                                    if (!(_la === cqlParser.T__101 || _la === cqlParser.T__102)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    _localctx = new IncludesIntervalOperatorPhraseContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 904;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === cqlParser.T__59) {
                            {
                                this.state = 903;
                                this.match(cqlParser.T__59);
                            }
                        }
                        this.state = 906;
                        this.match(cqlParser.T__140);
                        this.state = 908;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
                            case 1:
                                {
                                    this.state = 907;
                                    this.dateTimePrecisionSpecifier();
                                }
                                break;
                        }
                        this.state = 911;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                            case 1:
                                {
                                    this.state = 910;
                                    _la = this._input.LA(1);
                                    if (!(_la === cqlParser.T__101 || _la === cqlParser.T__102)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    _localctx = new IncludedInIntervalOperatorPhraseContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 914;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0)) {
                            {
                                this.state = 913;
                                _la = this._input.LA(1);
                                if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 917;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === cqlParser.T__59) {
                            {
                                this.state = 916;
                                this.match(cqlParser.T__59);
                            }
                        }
                        this.state = 919;
                        _la = this._input.LA(1);
                        if (!(_la === cqlParser.T__141 || _la === cqlParser.T__142)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 921;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                            case 1:
                                {
                                    this.state = 920;
                                    this.dateTimePrecisionSpecifier();
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    _localctx = new BeforeOrAfterIntervalOperatorPhraseContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 924;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0)) {
                            {
                                this.state = 923;
                                _la = this._input.LA(1);
                                if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 927;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (cqlParser.T__130 - 131)) | (1 << (cqlParser.T__131 - 131)) | (1 << (cqlParser.NUMBER - 131)))) !== 0)) {
                            {
                                this.state = 926;
                                this.quantityOffset();
                            }
                        }
                        this.state = 929;
                        this.temporalRelationship();
                        this.state = 931;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                            case 1:
                                {
                                    this.state = 930;
                                    this.dateTimePrecisionSpecifier();
                                }
                                break;
                        }
                        this.state = 934;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                            case 1:
                                {
                                    this.state = 933;
                                    _la = this._input.LA(1);
                                    if (!(_la === cqlParser.T__101 || _la === cqlParser.T__102)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                                break;
                        }
                    }
                    break;
                case 5:
                    _localctx = new WithinIntervalOperatorPhraseContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 937;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0)) {
                            {
                                this.state = 936;
                                _la = this._input.LA(1);
                                if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 940;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === cqlParser.T__59) {
                            {
                                this.state = 939;
                                this.match(cqlParser.T__59);
                            }
                        }
                        this.state = 942;
                        this.match(cqlParser.T__143);
                        this.state = 943;
                        this.quantity();
                        this.state = 944;
                        this.match(cqlParser.T__103);
                        this.state = 946;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                            case 1:
                                {
                                    this.state = 945;
                                    _la = this._input.LA(1);
                                    if (!(_la === cqlParser.T__101 || _la === cqlParser.T__102)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                                break;
                        }
                    }
                    break;
                case 6:
                    _localctx = new MeetsIntervalOperatorPhraseContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 948;
                        this.match(cqlParser.T__144);
                        this.state = 950;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === cqlParser.T__133 || _la === cqlParser.T__134) {
                            {
                                this.state = 949;
                                _la = this._input.LA(1);
                                if (!(_la === cqlParser.T__133 || _la === cqlParser.T__134)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 953;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                            case 1:
                                {
                                    this.state = 952;
                                    this.dateTimePrecisionSpecifier();
                                }
                                break;
                        }
                    }
                    break;
                case 7:
                    _localctx = new OverlapsIntervalOperatorPhraseContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 955;
                        this.match(cqlParser.T__145);
                        this.state = 957;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === cqlParser.T__133 || _la === cqlParser.T__134) {
                            {
                                this.state = 956;
                                _la = this._input.LA(1);
                                if (!(_la === cqlParser.T__133 || _la === cqlParser.T__134)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 960;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                            case 1:
                                {
                                    this.state = 959;
                                    this.dateTimePrecisionSpecifier();
                                }
                                break;
                        }
                    }
                    break;
                case 8:
                    _localctx = new StartsIntervalOperatorPhraseContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 962;
                        this.match(cqlParser.T__136);
                        this.state = 964;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                            case 1:
                                {
                                    this.state = 963;
                                    this.dateTimePrecisionSpecifier();
                                }
                                break;
                        }
                    }
                    break;
                case 9:
                    _localctx = new EndsIntervalOperatorPhraseContext(_localctx);
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 966;
                        this.match(cqlParser.T__137);
                        this.state = 968;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                            case 1:
                                {
                                    this.state = 967;
                                    this.dateTimePrecisionSpecifier();
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    term() {
        let _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, cqlParser.RULE_term);
        try {
            this.state = 985;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                case 1:
                    _localctx = new InvocationTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 972;
                        this.invocation();
                    }
                    break;
                case 2:
                    _localctx = new LiteralTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 973;
                        this.literal();
                    }
                    break;
                case 3:
                    _localctx = new ExternalConstantTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 974;
                        this.externalConstant();
                    }
                    break;
                case 4:
                    _localctx = new IntervalSelectorTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 975;
                        this.intervalSelector();
                    }
                    break;
                case 5:
                    _localctx = new TupleSelectorTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 976;
                        this.tupleSelector();
                    }
                    break;
                case 6:
                    _localctx = new InstanceSelectorTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 977;
                        this.instanceSelector();
                    }
                    break;
                case 7:
                    _localctx = new ListSelectorTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 978;
                        this.listSelector();
                    }
                    break;
                case 8:
                    _localctx = new CodeSelectorTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 979;
                        this.codeSelector();
                    }
                    break;
                case 9:
                    _localctx = new ConceptSelectorTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 980;
                        this.conceptSelector();
                    }
                    break;
                case 10:
                    _localctx = new ParenthesizedTermContext(_localctx);
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 981;
                        this.match(cqlParser.T__29);
                        this.state = 982;
                        this.expression(0);
                        this.state = 983;
                        this.match(cqlParser.T__30);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualifiedInvocation() {
        let _localctx = new QualifiedInvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, cqlParser.RULE_qualifiedInvocation);
        try {
            this.state = 989;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                case 1:
                    _localctx = new QualifiedMemberInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 987;
                        this.referentialIdentifier();
                    }
                    break;
                case 2:
                    _localctx = new QualifiedFunctionInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 988;
                        this.qualifiedFunction();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualifiedFunction() {
        let _localctx = new QualifiedFunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, cqlParser.RULE_qualifiedFunction);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 991;
                this.identifierOrFunctionIdentifier();
                this.state = 992;
                this.match(cqlParser.T__29);
                this.state = 994;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (cqlParser.T__36 - 37)) | (1 << (cqlParser.T__41 - 37)) | (1 << (cqlParser.T__44 - 37)) | (1 << (cqlParser.T__46 - 37)) | (1 << (cqlParser.T__47 - 37)) | (1 << (cqlParser.T__48 - 37)) | (1 << (cqlParser.T__49 - 37)) | (1 << (cqlParser.T__50 - 37)) | (1 << (cqlParser.T__52 - 37)) | (1 << (cqlParser.T__53 - 37)) | (1 << (cqlParser.T__54 - 37)) | (1 << (cqlParser.T__55 - 37)) | (1 << (cqlParser.T__57 - 37)) | (1 << (cqlParser.T__58 - 37)) | (1 << (cqlParser.T__62 - 37)) | (1 << (cqlParser.T__63 - 37)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (cqlParser.T__70 - 71)) | (1 << (cqlParser.T__72 - 71)) | (1 << (cqlParser.T__73 - 71)) | (1 << (cqlParser.T__75 - 71)) | (1 << (cqlParser.T__76 - 71)) | (1 << (cqlParser.T__77 - 71)) | (1 << (cqlParser.T__78 - 71)) | (1 << (cqlParser.T__79 - 71)) | (1 << (cqlParser.T__80 - 71)) | (1 << (cqlParser.T__81 - 71)) | (1 << (cqlParser.T__82 - 71)) | (1 << (cqlParser.T__83 - 71)) | (1 << (cqlParser.T__84 - 71)) | (1 << (cqlParser.T__85 - 71)) | (1 << (cqlParser.T__86 - 71)) | (1 << (cqlParser.T__87 - 71)) | (1 << (cqlParser.T__88 - 71)) | (1 << (cqlParser.T__89 - 71)) | (1 << (cqlParser.T__90 - 71)) | (1 << (cqlParser.T__91 - 71)) | (1 << (cqlParser.T__92 - 71)) | (1 << (cqlParser.T__93 - 71)) | (1 << (cqlParser.T__94 - 71)) | (1 << (cqlParser.T__95 - 71)) | (1 << (cqlParser.T__96 - 71)) | (1 << (cqlParser.T__97 - 71)) | (1 << (cqlParser.T__99 - 71)) | (1 << (cqlParser.T__100 - 71)) | (1 << (cqlParser.T__101 - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (cqlParser.T__102 - 103)) | (1 << (cqlParser.T__104 - 103)) | (1 << (cqlParser.T__105 - 103)) | (1 << (cqlParser.T__106 - 103)) | (1 << (cqlParser.T__107 - 103)) | (1 << (cqlParser.T__108 - 103)) | (1 << (cqlParser.T__109 - 103)) | (1 << (cqlParser.T__110 - 103)) | (1 << (cqlParser.T__114 - 103)) | (1 << (cqlParser.T__115 - 103)) | (1 << (cqlParser.T__117 - 103)) | (1 << (cqlParser.T__120 - 103)) | (1 << (cqlParser.T__121 - 103)) | (1 << (cqlParser.T__122 - 103)) | (1 << (cqlParser.T__123 - 103)) | (1 << (cqlParser.T__126 - 103)) | (1 << (cqlParser.T__127 - 103)) | (1 << (cqlParser.T__128 - 103)) | (1 << (cqlParser.T__129 - 103)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__140 - 137)) | (1 << (cqlParser.T__144 - 137)) | (1 << (cqlParser.T__145 - 137)) | (1 << (cqlParser.T__146 - 137)) | (1 << (cqlParser.T__147 - 137)) | (1 << (cqlParser.T__148 - 137)) | (1 << (cqlParser.T__149 - 137)) | (1 << (cqlParser.T__150 - 137)) | (1 << (cqlParser.T__151 - 137)) | (1 << (cqlParser.T__152 - 137)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 137)) | (1 << (cqlParser.DATETIME - 137)) | (1 << (cqlParser.TIME - 137)) | (1 << (cqlParser.IDENTIFIER - 137)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 137)) | (1 << (cqlParser.STRING - 137)) | (1 << (cqlParser.NUMBER - 137)))) !== 0)) {
                    {
                        this.state = 993;
                        this.paramList();
                    }
                }
                this.state = 996;
                this.match(cqlParser.T__30);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    invocation() {
        let _localctx = new InvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, cqlParser.RULE_invocation);
        try {
            this.state = 1003;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                case 1:
                    _localctx = new MemberInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 998;
                        this.referentialIdentifier();
                    }
                    break;
                case 2:
                    _localctx = new FunctionInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 999;
                        this.c_function();
                    }
                    break;
                case 3:
                    _localctx = new ThisInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1000;
                        this.match(cqlParser.T__146);
                    }
                    break;
                case 4:
                    _localctx = new IndexInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1001;
                        this.match(cqlParser.T__147);
                    }
                    break;
                case 5:
                    _localctx = new TotalInvocationContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1002;
                        this.match(cqlParser.T__148);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    c_function() {
        let _localctx = new C_functionContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, cqlParser.RULE_c_function);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1005;
                this.referentialIdentifier();
                this.state = 1006;
                this.match(cqlParser.T__29);
                this.state = 1008;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (cqlParser.T__36 - 37)) | (1 << (cqlParser.T__41 - 37)) | (1 << (cqlParser.T__44 - 37)) | (1 << (cqlParser.T__46 - 37)) | (1 << (cqlParser.T__47 - 37)) | (1 << (cqlParser.T__48 - 37)) | (1 << (cqlParser.T__49 - 37)) | (1 << (cqlParser.T__50 - 37)) | (1 << (cqlParser.T__52 - 37)) | (1 << (cqlParser.T__53 - 37)) | (1 << (cqlParser.T__54 - 37)) | (1 << (cqlParser.T__55 - 37)) | (1 << (cqlParser.T__57 - 37)) | (1 << (cqlParser.T__58 - 37)) | (1 << (cqlParser.T__62 - 37)) | (1 << (cqlParser.T__63 - 37)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (cqlParser.T__70 - 71)) | (1 << (cqlParser.T__72 - 71)) | (1 << (cqlParser.T__73 - 71)) | (1 << (cqlParser.T__75 - 71)) | (1 << (cqlParser.T__76 - 71)) | (1 << (cqlParser.T__77 - 71)) | (1 << (cqlParser.T__78 - 71)) | (1 << (cqlParser.T__79 - 71)) | (1 << (cqlParser.T__80 - 71)) | (1 << (cqlParser.T__81 - 71)) | (1 << (cqlParser.T__82 - 71)) | (1 << (cqlParser.T__83 - 71)) | (1 << (cqlParser.T__84 - 71)) | (1 << (cqlParser.T__85 - 71)) | (1 << (cqlParser.T__86 - 71)) | (1 << (cqlParser.T__87 - 71)) | (1 << (cqlParser.T__88 - 71)) | (1 << (cqlParser.T__89 - 71)) | (1 << (cqlParser.T__90 - 71)) | (1 << (cqlParser.T__91 - 71)) | (1 << (cqlParser.T__92 - 71)) | (1 << (cqlParser.T__93 - 71)) | (1 << (cqlParser.T__94 - 71)) | (1 << (cqlParser.T__95 - 71)) | (1 << (cqlParser.T__96 - 71)) | (1 << (cqlParser.T__97 - 71)) | (1 << (cqlParser.T__99 - 71)) | (1 << (cqlParser.T__100 - 71)) | (1 << (cqlParser.T__101 - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (cqlParser.T__102 - 103)) | (1 << (cqlParser.T__104 - 103)) | (1 << (cqlParser.T__105 - 103)) | (1 << (cqlParser.T__106 - 103)) | (1 << (cqlParser.T__107 - 103)) | (1 << (cqlParser.T__108 - 103)) | (1 << (cqlParser.T__109 - 103)) | (1 << (cqlParser.T__110 - 103)) | (1 << (cqlParser.T__114 - 103)) | (1 << (cqlParser.T__115 - 103)) | (1 << (cqlParser.T__117 - 103)) | (1 << (cqlParser.T__120 - 103)) | (1 << (cqlParser.T__121 - 103)) | (1 << (cqlParser.T__122 - 103)) | (1 << (cqlParser.T__123 - 103)) | (1 << (cqlParser.T__126 - 103)) | (1 << (cqlParser.T__127 - 103)) | (1 << (cqlParser.T__128 - 103)) | (1 << (cqlParser.T__129 - 103)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__140 - 137)) | (1 << (cqlParser.T__144 - 137)) | (1 << (cqlParser.T__145 - 137)) | (1 << (cqlParser.T__146 - 137)) | (1 << (cqlParser.T__147 - 137)) | (1 << (cqlParser.T__148 - 137)) | (1 << (cqlParser.T__149 - 137)) | (1 << (cqlParser.T__150 - 137)) | (1 << (cqlParser.T__151 - 137)) | (1 << (cqlParser.T__152 - 137)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 137)) | (1 << (cqlParser.DATETIME - 137)) | (1 << (cqlParser.TIME - 137)) | (1 << (cqlParser.IDENTIFIER - 137)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 137)) | (1 << (cqlParser.STRING - 137)) | (1 << (cqlParser.NUMBER - 137)))) !== 0)) {
                    {
                        this.state = 1007;
                        this.paramList();
                    }
                }
                this.state = 1010;
                this.match(cqlParser.T__30);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ratio() {
        let _localctx = new RatioContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, cqlParser.RULE_ratio);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1012;
                this.quantity();
                this.state = 1013;
                this.match(cqlParser.T__10);
                this.state = 1014;
                this.quantity();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, cqlParser.RULE_literal);
        let _la;
        try {
            this.state = 1024;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                case 1:
                    _localctx = new BooleanLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1016;
                        _la = this._input.LA(1);
                        if (!(_la === cqlParser.T__54 || _la === cqlParser.T__55)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case 2:
                    _localctx = new NullLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1017;
                        this.match(cqlParser.T__53);
                    }
                    break;
                case 3:
                    _localctx = new StringLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1018;
                        this.match(cqlParser.STRING);
                    }
                    break;
                case 4:
                    _localctx = new NumberLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1019;
                        this.match(cqlParser.NUMBER);
                    }
                    break;
                case 5:
                    _localctx = new DateTimeLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1020;
                        this.match(cqlParser.DATETIME);
                    }
                    break;
                case 6:
                    _localctx = new TimeLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1021;
                        this.match(cqlParser.TIME);
                    }
                    break;
                case 7:
                    _localctx = new QuantityLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1022;
                        this.quantity();
                    }
                    break;
                case 8:
                    _localctx = new RatioLiteralContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1023;
                        this.ratio();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    intervalSelector() {
        let _localctx = new IntervalSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, cqlParser.RULE_intervalSelector);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1026;
                this.match(cqlParser.T__23);
                this.state = 1027;
                _la = this._input.LA(1);
                if (!(_la === cqlParser.T__29 || _la === cqlParser.T__36)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1028;
                this.expression(0);
                this.state = 1029;
                this.match(cqlParser.T__14);
                this.state = 1030;
                this.expression(0);
                this.state = 1031;
                _la = this._input.LA(1);
                if (!(_la === cqlParser.T__30 || _la === cqlParser.T__39)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tupleSelector() {
        let _localctx = new TupleSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, cqlParser.RULE_tupleSelector);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1034;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__24) {
                    {
                        this.state = 1033;
                        this.match(cqlParser.T__24);
                    }
                }
                this.state = 1036;
                this.match(cqlParser.T__13);
                this.state = 1046;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case cqlParser.T__10:
                        {
                            this.state = 1037;
                            this.match(cqlParser.T__10);
                        }
                        break;
                    case cqlParser.T__0:
                    case cqlParser.T__1:
                    case cqlParser.T__2:
                    case cqlParser.T__3:
                    case cqlParser.T__4:
                    case cqlParser.T__5:
                    case cqlParser.T__6:
                    case cqlParser.T__7:
                    case cqlParser.T__8:
                    case cqlParser.T__9:
                    case cqlParser.T__11:
                    case cqlParser.T__12:
                    case cqlParser.T__17:
                    case cqlParser.T__19:
                    case cqlParser.T__26:
                    case cqlParser.T__27:
                    case cqlParser.T__28:
                    case cqlParser.T__41:
                    case cqlParser.T__46:
                    case cqlParser.T__47:
                    case cqlParser.T__48:
                    case cqlParser.T__49:
                    case cqlParser.T__50:
                    case cqlParser.T__70:
                    case cqlParser.T__72:
                    case cqlParser.T__73:
                    case cqlParser.T__75:
                    case cqlParser.T__76:
                    case cqlParser.T__77:
                    case cqlParser.T__86:
                    case cqlParser.T__87:
                    case cqlParser.T__88:
                    case cqlParser.T__101:
                    case cqlParser.T__102:
                    case cqlParser.T__104:
                    case cqlParser.T__105:
                    case cqlParser.T__106:
                    case cqlParser.T__114:
                    case cqlParser.T__115:
                    case cqlParser.T__126:
                    case cqlParser.T__127:
                    case cqlParser.T__128:
                    case cqlParser.T__129:
                    case cqlParser.T__136:
                    case cqlParser.T__137:
                    case cqlParser.T__140:
                    case cqlParser.T__144:
                    case cqlParser.T__145:
                    case cqlParser.T__149:
                    case cqlParser.QUOTEDIDENTIFIER:
                    case cqlParser.IDENTIFIER:
                    case cqlParser.DELIMITEDIDENTIFIER:
                        {
                            {
                                this.state = 1038;
                                this.tupleElementSelector();
                                this.state = 1043;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === cqlParser.T__14) {
                                    {
                                        {
                                            this.state = 1039;
                                            this.match(cqlParser.T__14);
                                            this.state = 1040;
                                            this.tupleElementSelector();
                                        }
                                    }
                                    this.state = 1045;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1048;
                this.match(cqlParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tupleElementSelector() {
        let _localctx = new TupleElementSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, cqlParser.RULE_tupleElementSelector);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1050;
                this.referentialIdentifier();
                this.state = 1051;
                this.match(cqlParser.T__10);
                this.state = 1052;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    instanceSelector() {
        let _localctx = new InstanceSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, cqlParser.RULE_instanceSelector);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1054;
                this.namedTypeSpecifier();
                this.state = 1055;
                this.match(cqlParser.T__13);
                this.state = 1065;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case cqlParser.T__10:
                        {
                            this.state = 1056;
                            this.match(cqlParser.T__10);
                        }
                        break;
                    case cqlParser.T__0:
                    case cqlParser.T__1:
                    case cqlParser.T__2:
                    case cqlParser.T__3:
                    case cqlParser.T__4:
                    case cqlParser.T__5:
                    case cqlParser.T__6:
                    case cqlParser.T__7:
                    case cqlParser.T__8:
                    case cqlParser.T__9:
                    case cqlParser.T__11:
                    case cqlParser.T__12:
                    case cqlParser.T__17:
                    case cqlParser.T__19:
                    case cqlParser.T__26:
                    case cqlParser.T__27:
                    case cqlParser.T__28:
                    case cqlParser.T__41:
                    case cqlParser.T__46:
                    case cqlParser.T__47:
                    case cqlParser.T__48:
                    case cqlParser.T__49:
                    case cqlParser.T__50:
                    case cqlParser.T__70:
                    case cqlParser.T__72:
                    case cqlParser.T__73:
                    case cqlParser.T__75:
                    case cqlParser.T__76:
                    case cqlParser.T__77:
                    case cqlParser.T__86:
                    case cqlParser.T__87:
                    case cqlParser.T__88:
                    case cqlParser.T__101:
                    case cqlParser.T__102:
                    case cqlParser.T__104:
                    case cqlParser.T__105:
                    case cqlParser.T__106:
                    case cqlParser.T__114:
                    case cqlParser.T__115:
                    case cqlParser.T__126:
                    case cqlParser.T__127:
                    case cqlParser.T__128:
                    case cqlParser.T__129:
                    case cqlParser.T__136:
                    case cqlParser.T__137:
                    case cqlParser.T__140:
                    case cqlParser.T__144:
                    case cqlParser.T__145:
                    case cqlParser.T__149:
                    case cqlParser.QUOTEDIDENTIFIER:
                    case cqlParser.IDENTIFIER:
                    case cqlParser.DELIMITEDIDENTIFIER:
                        {
                            {
                                this.state = 1057;
                                this.instanceElementSelector();
                                this.state = 1062;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === cqlParser.T__14) {
                                    {
                                        {
                                            this.state = 1058;
                                            this.match(cqlParser.T__14);
                                            this.state = 1059;
                                            this.instanceElementSelector();
                                        }
                                    }
                                    this.state = 1064;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1067;
                this.match(cqlParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    instanceElementSelector() {
        let _localctx = new InstanceElementSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, cqlParser.RULE_instanceElementSelector);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1069;
                this.referentialIdentifier();
                this.state = 1070;
                this.match(cqlParser.T__10);
                this.state = 1071;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    listSelector() {
        let _localctx = new ListSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, cqlParser.RULE_listSelector);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1080;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === cqlParser.T__20) {
                    {
                        this.state = 1073;
                        this.match(cqlParser.T__20);
                        this.state = 1078;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === cqlParser.T__21) {
                            {
                                this.state = 1074;
                                this.match(cqlParser.T__21);
                                this.state = 1075;
                                this.typeSpecifier();
                                this.state = 1076;
                                this.match(cqlParser.T__22);
                            }
                        }
                    }
                }
                this.state = 1082;
                this.match(cqlParser.T__13);
                this.state = 1091;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (cqlParser.T__36 - 37)) | (1 << (cqlParser.T__41 - 37)) | (1 << (cqlParser.T__44 - 37)) | (1 << (cqlParser.T__46 - 37)) | (1 << (cqlParser.T__47 - 37)) | (1 << (cqlParser.T__48 - 37)) | (1 << (cqlParser.T__49 - 37)) | (1 << (cqlParser.T__50 - 37)) | (1 << (cqlParser.T__52 - 37)) | (1 << (cqlParser.T__53 - 37)) | (1 << (cqlParser.T__54 - 37)) | (1 << (cqlParser.T__55 - 37)) | (1 << (cqlParser.T__57 - 37)) | (1 << (cqlParser.T__58 - 37)) | (1 << (cqlParser.T__62 - 37)) | (1 << (cqlParser.T__63 - 37)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (cqlParser.T__70 - 71)) | (1 << (cqlParser.T__72 - 71)) | (1 << (cqlParser.T__73 - 71)) | (1 << (cqlParser.T__75 - 71)) | (1 << (cqlParser.T__76 - 71)) | (1 << (cqlParser.T__77 - 71)) | (1 << (cqlParser.T__78 - 71)) | (1 << (cqlParser.T__79 - 71)) | (1 << (cqlParser.T__80 - 71)) | (1 << (cqlParser.T__81 - 71)) | (1 << (cqlParser.T__82 - 71)) | (1 << (cqlParser.T__83 - 71)) | (1 << (cqlParser.T__84 - 71)) | (1 << (cqlParser.T__85 - 71)) | (1 << (cqlParser.T__86 - 71)) | (1 << (cqlParser.T__87 - 71)) | (1 << (cqlParser.T__88 - 71)) | (1 << (cqlParser.T__89 - 71)) | (1 << (cqlParser.T__90 - 71)) | (1 << (cqlParser.T__91 - 71)) | (1 << (cqlParser.T__92 - 71)) | (1 << (cqlParser.T__93 - 71)) | (1 << (cqlParser.T__94 - 71)) | (1 << (cqlParser.T__95 - 71)) | (1 << (cqlParser.T__96 - 71)) | (1 << (cqlParser.T__97 - 71)) | (1 << (cqlParser.T__99 - 71)) | (1 << (cqlParser.T__100 - 71)) | (1 << (cqlParser.T__101 - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (cqlParser.T__102 - 103)) | (1 << (cqlParser.T__104 - 103)) | (1 << (cqlParser.T__105 - 103)) | (1 << (cqlParser.T__106 - 103)) | (1 << (cqlParser.T__107 - 103)) | (1 << (cqlParser.T__108 - 103)) | (1 << (cqlParser.T__109 - 103)) | (1 << (cqlParser.T__110 - 103)) | (1 << (cqlParser.T__114 - 103)) | (1 << (cqlParser.T__115 - 103)) | (1 << (cqlParser.T__117 - 103)) | (1 << (cqlParser.T__120 - 103)) | (1 << (cqlParser.T__121 - 103)) | (1 << (cqlParser.T__122 - 103)) | (1 << (cqlParser.T__123 - 103)) | (1 << (cqlParser.T__126 - 103)) | (1 << (cqlParser.T__127 - 103)) | (1 << (cqlParser.T__128 - 103)) | (1 << (cqlParser.T__129 - 103)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__140 - 137)) | (1 << (cqlParser.T__144 - 137)) | (1 << (cqlParser.T__145 - 137)) | (1 << (cqlParser.T__146 - 137)) | (1 << (cqlParser.T__147 - 137)) | (1 << (cqlParser.T__148 - 137)) | (1 << (cqlParser.T__149 - 137)) | (1 << (cqlParser.T__150 - 137)) | (1 << (cqlParser.T__151 - 137)) | (1 << (cqlParser.T__152 - 137)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 137)) | (1 << (cqlParser.DATETIME - 137)) | (1 << (cqlParser.TIME - 137)) | (1 << (cqlParser.IDENTIFIER - 137)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 137)) | (1 << (cqlParser.STRING - 137)) | (1 << (cqlParser.NUMBER - 137)))) !== 0)) {
                    {
                        this.state = 1083;
                        this.expression(0);
                        this.state = 1088;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === cqlParser.T__14) {
                            {
                                {
                                    this.state = 1084;
                                    this.match(cqlParser.T__14);
                                    this.state = 1085;
                                    this.expression(0);
                                }
                            }
                            this.state = 1090;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 1093;
                this.match(cqlParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    displayClause() {
        let _localctx = new DisplayClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, cqlParser.RULE_displayClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1095;
                this.match(cqlParser.T__149);
                this.state = 1096;
                this.match(cqlParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    codeSelector() {
        let _localctx = new CodeSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, cqlParser.RULE_codeSelector);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1098;
                this.match(cqlParser.T__150);
                this.state = 1099;
                this.match(cqlParser.STRING);
                this.state = 1100;
                this.match(cqlParser.T__18);
                this.state = 1101;
                this.codesystemIdentifier();
                this.state = 1103;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                    case 1:
                        {
                            this.state = 1102;
                            this.displayClause();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    conceptSelector() {
        let _localctx = new ConceptSelectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, cqlParser.RULE_conceptSelector);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1105;
                this.match(cqlParser.T__151);
                this.state = 1106;
                this.match(cqlParser.T__13);
                this.state = 1107;
                this.codeSelector();
                this.state = 1112;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cqlParser.T__14) {
                    {
                        {
                            this.state = 1108;
                            this.match(cqlParser.T__14);
                            this.state = 1109;
                            this.codeSelector();
                        }
                    }
                    this.state = 1114;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1115;
                this.match(cqlParser.T__15);
                this.state = 1117;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                    case 1:
                        {
                            this.state = 1116;
                            this.displayClause();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    keyword() {
        let _localctx = new KeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, cqlParser.RULE_keyword);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1119;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (cqlParser.T__33 - 34)) | (1 << (cqlParser.T__34 - 34)) | (1 << (cqlParser.T__35 - 34)) | (1 << (cqlParser.T__38 - 34)) | (1 << (cqlParser.T__40 - 34)) | (1 << (cqlParser.T__41 - 34)) | (1 << (cqlParser.T__42 - 34)) | (1 << (cqlParser.T__43 - 34)) | (1 << (cqlParser.T__44 - 34)) | (1 << (cqlParser.T__45 - 34)) | (1 << (cqlParser.T__46 - 34)) | (1 << (cqlParser.T__47 - 34)) | (1 << (cqlParser.T__48 - 34)) | (1 << (cqlParser.T__49 - 34)) | (1 << (cqlParser.T__50 - 34)) | (1 << (cqlParser.T__51 - 34)) | (1 << (cqlParser.T__52 - 34)) | (1 << (cqlParser.T__53 - 34)) | (1 << (cqlParser.T__54 - 34)) | (1 << (cqlParser.T__55 - 34)) | (1 << (cqlParser.T__56 - 34)) | (1 << (cqlParser.T__57 - 34)) | (1 << (cqlParser.T__58 - 34)) | (1 << (cqlParser.T__59 - 34)) | (1 << (cqlParser.T__60 - 34)) | (1 << (cqlParser.T__61 - 34)) | (1 << (cqlParser.T__62 - 34)) | (1 << (cqlParser.T__63 - 34)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (cqlParser.T__70 - 71)) | (1 << (cqlParser.T__71 - 71)) | (1 << (cqlParser.T__72 - 71)) | (1 << (cqlParser.T__73 - 71)) | (1 << (cqlParser.T__75 - 71)) | (1 << (cqlParser.T__76 - 71)) | (1 << (cqlParser.T__77 - 71)) | (1 << (cqlParser.T__78 - 71)) | (1 << (cqlParser.T__79 - 71)) | (1 << (cqlParser.T__80 - 71)) | (1 << (cqlParser.T__81 - 71)) | (1 << (cqlParser.T__82 - 71)) | (1 << (cqlParser.T__83 - 71)) | (1 << (cqlParser.T__84 - 71)) | (1 << (cqlParser.T__85 - 71)) | (1 << (cqlParser.T__86 - 71)) | (1 << (cqlParser.T__87 - 71)) | (1 << (cqlParser.T__88 - 71)) | (1 << (cqlParser.T__89 - 71)) | (1 << (cqlParser.T__90 - 71)) | (1 << (cqlParser.T__91 - 71)) | (1 << (cqlParser.T__92 - 71)) | (1 << (cqlParser.T__93 - 71)) | (1 << (cqlParser.T__94 - 71)) | (1 << (cqlParser.T__95 - 71)) | (1 << (cqlParser.T__96 - 71)) | (1 << (cqlParser.T__97 - 71)) | (1 << (cqlParser.T__98 - 71)) | (1 << (cqlParser.T__101 - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (cqlParser.T__102 - 103)) | (1 << (cqlParser.T__103 - 103)) | (1 << (cqlParser.T__104 - 103)) | (1 << (cqlParser.T__105 - 103)) | (1 << (cqlParser.T__106 - 103)) | (1 << (cqlParser.T__107 - 103)) | (1 << (cqlParser.T__109 - 103)) | (1 << (cqlParser.T__110 - 103)) | (1 << (cqlParser.T__114 - 103)) | (1 << (cqlParser.T__115 - 103)) | (1 << (cqlParser.T__117 - 103)) | (1 << (cqlParser.T__118 - 103)) | (1 << (cqlParser.T__119 - 103)) | (1 << (cqlParser.T__120 - 103)) | (1 << (cqlParser.T__121 - 103)) | (1 << (cqlParser.T__122 - 103)) | (1 << (cqlParser.T__123 - 103)) | (1 << (cqlParser.T__124 - 103)) | (1 << (cqlParser.T__125 - 103)) | (1 << (cqlParser.T__126 - 103)) | (1 << (cqlParser.T__127 - 103)) | (1 << (cqlParser.T__128 - 103)) | (1 << (cqlParser.T__129 - 103)) | (1 << (cqlParser.T__132 - 103)) | (1 << (cqlParser.T__133 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (cqlParser.T__134 - 135)) | (1 << (cqlParser.T__135 - 135)) | (1 << (cqlParser.T__136 - 135)) | (1 << (cqlParser.T__137 - 135)) | (1 << (cqlParser.T__138 - 135)) | (1 << (cqlParser.T__139 - 135)) | (1 << (cqlParser.T__140 - 135)) | (1 << (cqlParser.T__141 - 135)) | (1 << (cqlParser.T__142 - 135)) | (1 << (cqlParser.T__143 - 135)) | (1 << (cqlParser.T__144 - 135)) | (1 << (cqlParser.T__145 - 135)) | (1 << (cqlParser.T__149 - 135)) | (1 << (cqlParser.T__150 - 135)) | (1 << (cqlParser.T__151 - 135)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    reservedWord() {
        let _localctx = new ReservedWordContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, cqlParser.RULE_reservedWord);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1121;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__18) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (cqlParser.T__33 - 34)) | (1 << (cqlParser.T__34 - 34)) | (1 << (cqlParser.T__35 - 34)) | (1 << (cqlParser.T__38 - 34)) | (1 << (cqlParser.T__40 - 34)) | (1 << (cqlParser.T__42 - 34)) | (1 << (cqlParser.T__43 - 34)) | (1 << (cqlParser.T__44 - 34)) | (1 << (cqlParser.T__45 - 34)) | (1 << (cqlParser.T__51 - 34)) | (1 << (cqlParser.T__52 - 34)) | (1 << (cqlParser.T__53 - 34)) | (1 << (cqlParser.T__54 - 34)) | (1 << (cqlParser.T__55 - 34)) | (1 << (cqlParser.T__56 - 34)) | (1 << (cqlParser.T__57 - 34)) | (1 << (cqlParser.T__58 - 34)) | (1 << (cqlParser.T__59 - 34)) | (1 << (cqlParser.T__60 - 34)) | (1 << (cqlParser.T__61 - 34)) | (1 << (cqlParser.T__62 - 34)) | (1 << (cqlParser.T__63 - 34)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (cqlParser.T__71 - 72)) | (1 << (cqlParser.T__78 - 72)) | (1 << (cqlParser.T__79 - 72)) | (1 << (cqlParser.T__80 - 72)) | (1 << (cqlParser.T__81 - 72)) | (1 << (cqlParser.T__82 - 72)) | (1 << (cqlParser.T__83 - 72)) | (1 << (cqlParser.T__84 - 72)) | (1 << (cqlParser.T__85 - 72)) | (1 << (cqlParser.T__89 - 72)) | (1 << (cqlParser.T__90 - 72)) | (1 << (cqlParser.T__91 - 72)) | (1 << (cqlParser.T__92 - 72)) | (1 << (cqlParser.T__93 - 72)) | (1 << (cqlParser.T__94 - 72)) | (1 << (cqlParser.T__95 - 72)) | (1 << (cqlParser.T__96 - 72)) | (1 << (cqlParser.T__97 - 72)) | (1 << (cqlParser.T__98 - 72)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (cqlParser.T__103 - 104)) | (1 << (cqlParser.T__107 - 104)) | (1 << (cqlParser.T__109 - 104)) | (1 << (cqlParser.T__110 - 104)) | (1 << (cqlParser.T__117 - 104)) | (1 << (cqlParser.T__118 - 104)) | (1 << (cqlParser.T__119 - 104)) | (1 << (cqlParser.T__120 - 104)) | (1 << (cqlParser.T__121 - 104)) | (1 << (cqlParser.T__122 - 104)) | (1 << (cqlParser.T__123 - 104)) | (1 << (cqlParser.T__124 - 104)) | (1 << (cqlParser.T__125 - 104)) | (1 << (cqlParser.T__132 - 104)) | (1 << (cqlParser.T__133 - 104)) | (1 << (cqlParser.T__134 - 104)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (cqlParser.T__135 - 136)) | (1 << (cqlParser.T__138 - 136)) | (1 << (cqlParser.T__139 - 136)) | (1 << (cqlParser.T__141 - 136)) | (1 << (cqlParser.T__142 - 136)) | (1 << (cqlParser.T__143 - 136)) | (1 << (cqlParser.T__150 - 136)) | (1 << (cqlParser.T__151 - 136)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    keywordIdentifier() {
        let _localctx = new KeywordIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, cqlParser.RULE_keywordIdentifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1123;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__17) | (1 << cqlParser.T__19) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (cqlParser.T__41 - 42)) | (1 << (cqlParser.T__46 - 42)) | (1 << (cqlParser.T__47 - 42)) | (1 << (cqlParser.T__48 - 42)) | (1 << (cqlParser.T__49 - 42)) | (1 << (cqlParser.T__50 - 42)) | (1 << (cqlParser.T__70 - 42)) | (1 << (cqlParser.T__72 - 42)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (cqlParser.T__73 - 74)) | (1 << (cqlParser.T__75 - 74)) | (1 << (cqlParser.T__76 - 74)) | (1 << (cqlParser.T__77 - 74)) | (1 << (cqlParser.T__86 - 74)) | (1 << (cqlParser.T__87 - 74)) | (1 << (cqlParser.T__88 - 74)) | (1 << (cqlParser.T__101 - 74)) | (1 << (cqlParser.T__102 - 74)) | (1 << (cqlParser.T__104 - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (cqlParser.T__105 - 106)) | (1 << (cqlParser.T__106 - 106)) | (1 << (cqlParser.T__114 - 106)) | (1 << (cqlParser.T__115 - 106)) | (1 << (cqlParser.T__126 - 106)) | (1 << (cqlParser.T__127 - 106)) | (1 << (cqlParser.T__128 - 106)) | (1 << (cqlParser.T__129 - 106)) | (1 << (cqlParser.T__136 - 106)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (cqlParser.T__137 - 138)) | (1 << (cqlParser.T__140 - 138)) | (1 << (cqlParser.T__144 - 138)) | (1 << (cqlParser.T__145 - 138)) | (1 << (cqlParser.T__149 - 138)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    obsoleteIdentifier() {
        let _localctx = new ObsoleteIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, cqlParser.RULE_obsoleteIdentifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1125;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__1) | (1 << cqlParser.T__17) | (1 << cqlParser.T__19))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (cqlParser.T__41 - 42)) | (1 << (cqlParser.T__43 - 42)) | (1 << (cqlParser.T__44 - 42)) | (1 << (cqlParser.T__52 - 42)) | (1 << (cqlParser.T__58 - 42)) | (1 << (cqlParser.T__70 - 42)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (cqlParser.T__86 - 87)) | (1 << (cqlParser.T__87 - 87)) | (1 << (cqlParser.T__88 - 87)) | (1 << (cqlParser.T__101 - 87)) | (1 << (cqlParser.T__102 - 87)))) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & ((1 << (cqlParser.T__149 - 150)) | (1 << (cqlParser.T__150 - 150)) | (1 << (cqlParser.T__151 - 150)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionIdentifier() {
        let _localctx = new FunctionIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, cqlParser.RULE_functionIdentifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1127;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (cqlParser.T__33 - 34)) | (1 << (cqlParser.T__34 - 34)) | (1 << (cqlParser.T__35 - 34)) | (1 << (cqlParser.T__38 - 34)) | (1 << (cqlParser.T__40 - 34)) | (1 << (cqlParser.T__41 - 34)) | (1 << (cqlParser.T__42 - 34)) | (1 << (cqlParser.T__43 - 34)) | (1 << (cqlParser.T__44 - 34)) | (1 << (cqlParser.T__45 - 34)) | (1 << (cqlParser.T__46 - 34)) | (1 << (cqlParser.T__47 - 34)) | (1 << (cqlParser.T__48 - 34)) | (1 << (cqlParser.T__49 - 34)) | (1 << (cqlParser.T__50 - 34)) | (1 << (cqlParser.T__51 - 34)) | (1 << (cqlParser.T__52 - 34)) | (1 << (cqlParser.T__53 - 34)) | (1 << (cqlParser.T__54 - 34)) | (1 << (cqlParser.T__55 - 34)) | (1 << (cqlParser.T__56 - 34)) | (1 << (cqlParser.T__57 - 34)) | (1 << (cqlParser.T__58 - 34)) | (1 << (cqlParser.T__59 - 34)) | (1 << (cqlParser.T__60 - 34)) | (1 << (cqlParser.T__61 - 34)) | (1 << (cqlParser.T__62 - 34)) | (1 << (cqlParser.T__63 - 34)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (cqlParser.T__70 - 71)) | (1 << (cqlParser.T__71 - 71)) | (1 << (cqlParser.T__72 - 71)) | (1 << (cqlParser.T__73 - 71)) | (1 << (cqlParser.T__75 - 71)) | (1 << (cqlParser.T__76 - 71)) | (1 << (cqlParser.T__77 - 71)) | (1 << (cqlParser.T__78 - 71)) | (1 << (cqlParser.T__79 - 71)) | (1 << (cqlParser.T__80 - 71)) | (1 << (cqlParser.T__81 - 71)) | (1 << (cqlParser.T__82 - 71)) | (1 << (cqlParser.T__83 - 71)) | (1 << (cqlParser.T__84 - 71)) | (1 << (cqlParser.T__85 - 71)) | (1 << (cqlParser.T__86 - 71)) | (1 << (cqlParser.T__87 - 71)) | (1 << (cqlParser.T__88 - 71)) | (1 << (cqlParser.T__89 - 71)) | (1 << (cqlParser.T__90 - 71)) | (1 << (cqlParser.T__91 - 71)) | (1 << (cqlParser.T__92 - 71)) | (1 << (cqlParser.T__93 - 71)) | (1 << (cqlParser.T__94 - 71)) | (1 << (cqlParser.T__95 - 71)) | (1 << (cqlParser.T__96 - 71)) | (1 << (cqlParser.T__97 - 71)) | (1 << (cqlParser.T__98 - 71)) | (1 << (cqlParser.T__101 - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (cqlParser.T__102 - 103)) | (1 << (cqlParser.T__103 - 103)) | (1 << (cqlParser.T__104 - 103)) | (1 << (cqlParser.T__105 - 103)) | (1 << (cqlParser.T__106 - 103)) | (1 << (cqlParser.T__107 - 103)) | (1 << (cqlParser.T__109 - 103)) | (1 << (cqlParser.T__110 - 103)) | (1 << (cqlParser.T__114 - 103)) | (1 << (cqlParser.T__115 - 103)) | (1 << (cqlParser.T__117 - 103)) | (1 << (cqlParser.T__118 - 103)) | (1 << (cqlParser.T__119 - 103)) | (1 << (cqlParser.T__120 - 103)) | (1 << (cqlParser.T__121 - 103)) | (1 << (cqlParser.T__122 - 103)) | (1 << (cqlParser.T__123 - 103)) | (1 << (cqlParser.T__124 - 103)) | (1 << (cqlParser.T__125 - 103)) | (1 << (cqlParser.T__126 - 103)) | (1 << (cqlParser.T__127 - 103)) | (1 << (cqlParser.T__128 - 103)) | (1 << (cqlParser.T__129 - 103)) | (1 << (cqlParser.T__133 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (cqlParser.T__134 - 135)) | (1 << (cqlParser.T__136 - 135)) | (1 << (cqlParser.T__137 - 135)) | (1 << (cqlParser.T__138 - 135)) | (1 << (cqlParser.T__139 - 135)) | (1 << (cqlParser.T__140 - 135)) | (1 << (cqlParser.T__141 - 135)) | (1 << (cqlParser.T__142 - 135)) | (1 << (cqlParser.T__143 - 135)) | (1 << (cqlParser.T__144 - 135)) | (1 << (cqlParser.T__145 - 135)) | (1 << (cqlParser.T__149 - 135)) | (1 << (cqlParser.T__150 - 135)) | (1 << (cqlParser.T__151 - 135)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeNameIdentifier() {
        let _localctx = new TypeNameIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, cqlParser.RULE_typeNameIdentifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1129;
                _la = this._input.LA(1);
                if (!(_la === cqlParser.T__86 || _la === cqlParser.T__87 || _la === cqlParser.T__150 || _la === cqlParser.T__151)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    referentialIdentifier() {
        let _localctx = new ReferentialIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, cqlParser.RULE_referentialIdentifier);
        try {
            this.state = 1133;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case cqlParser.QUOTEDIDENTIFIER:
                case cqlParser.IDENTIFIER:
                case cqlParser.DELIMITEDIDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1131;
                        this.identifier();
                    }
                    break;
                case cqlParser.T__0:
                case cqlParser.T__1:
                case cqlParser.T__2:
                case cqlParser.T__3:
                case cqlParser.T__4:
                case cqlParser.T__5:
                case cqlParser.T__6:
                case cqlParser.T__7:
                case cqlParser.T__8:
                case cqlParser.T__9:
                case cqlParser.T__11:
                case cqlParser.T__12:
                case cqlParser.T__17:
                case cqlParser.T__19:
                case cqlParser.T__26:
                case cqlParser.T__27:
                case cqlParser.T__28:
                case cqlParser.T__41:
                case cqlParser.T__46:
                case cqlParser.T__47:
                case cqlParser.T__48:
                case cqlParser.T__49:
                case cqlParser.T__50:
                case cqlParser.T__70:
                case cqlParser.T__72:
                case cqlParser.T__73:
                case cqlParser.T__75:
                case cqlParser.T__76:
                case cqlParser.T__77:
                case cqlParser.T__86:
                case cqlParser.T__87:
                case cqlParser.T__88:
                case cqlParser.T__101:
                case cqlParser.T__102:
                case cqlParser.T__104:
                case cqlParser.T__105:
                case cqlParser.T__106:
                case cqlParser.T__114:
                case cqlParser.T__115:
                case cqlParser.T__126:
                case cqlParser.T__127:
                case cqlParser.T__128:
                case cqlParser.T__129:
                case cqlParser.T__136:
                case cqlParser.T__137:
                case cqlParser.T__140:
                case cqlParser.T__144:
                case cqlParser.T__145:
                case cqlParser.T__149:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1132;
                        this.keywordIdentifier();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    referentialOrTypeNameIdentifier() {
        let _localctx = new ReferentialOrTypeNameIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, cqlParser.RULE_referentialOrTypeNameIdentifier);
        try {
            this.state = 1137;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1135;
                        this.referentialIdentifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1136;
                        this.typeNameIdentifier();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifierOrFunctionIdentifier() {
        let _localctx = new IdentifierOrFunctionIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, cqlParser.RULE_identifierOrFunctionIdentifier);
        try {
            this.state = 1141;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case cqlParser.QUOTEDIDENTIFIER:
                case cqlParser.IDENTIFIER:
                case cqlParser.DELIMITEDIDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1139;
                        this.identifier();
                    }
                    break;
                case cqlParser.T__0:
                case cqlParser.T__1:
                case cqlParser.T__2:
                case cqlParser.T__3:
                case cqlParser.T__4:
                case cqlParser.T__5:
                case cqlParser.T__6:
                case cqlParser.T__7:
                case cqlParser.T__8:
                case cqlParser.T__9:
                case cqlParser.T__11:
                case cqlParser.T__12:
                case cqlParser.T__17:
                case cqlParser.T__18:
                case cqlParser.T__19:
                case cqlParser.T__20:
                case cqlParser.T__23:
                case cqlParser.T__24:
                case cqlParser.T__26:
                case cqlParser.T__27:
                case cqlParser.T__28:
                case cqlParser.T__33:
                case cqlParser.T__34:
                case cqlParser.T__35:
                case cqlParser.T__38:
                case cqlParser.T__40:
                case cqlParser.T__41:
                case cqlParser.T__42:
                case cqlParser.T__43:
                case cqlParser.T__44:
                case cqlParser.T__45:
                case cqlParser.T__46:
                case cqlParser.T__47:
                case cqlParser.T__48:
                case cqlParser.T__49:
                case cqlParser.T__50:
                case cqlParser.T__51:
                case cqlParser.T__52:
                case cqlParser.T__53:
                case cqlParser.T__54:
                case cqlParser.T__55:
                case cqlParser.T__56:
                case cqlParser.T__57:
                case cqlParser.T__58:
                case cqlParser.T__59:
                case cqlParser.T__60:
                case cqlParser.T__61:
                case cqlParser.T__62:
                case cqlParser.T__63:
                case cqlParser.T__70:
                case cqlParser.T__71:
                case cqlParser.T__72:
                case cqlParser.T__73:
                case cqlParser.T__75:
                case cqlParser.T__76:
                case cqlParser.T__77:
                case cqlParser.T__78:
                case cqlParser.T__79:
                case cqlParser.T__80:
                case cqlParser.T__81:
                case cqlParser.T__82:
                case cqlParser.T__83:
                case cqlParser.T__84:
                case cqlParser.T__85:
                case cqlParser.T__86:
                case cqlParser.T__87:
                case cqlParser.T__88:
                case cqlParser.T__89:
                case cqlParser.T__90:
                case cqlParser.T__91:
                case cqlParser.T__92:
                case cqlParser.T__93:
                case cqlParser.T__94:
                case cqlParser.T__95:
                case cqlParser.T__96:
                case cqlParser.T__97:
                case cqlParser.T__98:
                case cqlParser.T__101:
                case cqlParser.T__102:
                case cqlParser.T__103:
                case cqlParser.T__104:
                case cqlParser.T__105:
                case cqlParser.T__106:
                case cqlParser.T__107:
                case cqlParser.T__109:
                case cqlParser.T__110:
                case cqlParser.T__114:
                case cqlParser.T__115:
                case cqlParser.T__117:
                case cqlParser.T__118:
                case cqlParser.T__119:
                case cqlParser.T__120:
                case cqlParser.T__121:
                case cqlParser.T__122:
                case cqlParser.T__123:
                case cqlParser.T__124:
                case cqlParser.T__125:
                case cqlParser.T__126:
                case cqlParser.T__127:
                case cqlParser.T__128:
                case cqlParser.T__129:
                case cqlParser.T__133:
                case cqlParser.T__134:
                case cqlParser.T__136:
                case cqlParser.T__137:
                case cqlParser.T__138:
                case cqlParser.T__139:
                case cqlParser.T__140:
                case cqlParser.T__141:
                case cqlParser.T__142:
                case cqlParser.T__143:
                case cqlParser.T__144:
                case cqlParser.T__145:
                case cqlParser.T__149:
                case cqlParser.T__150:
                case cqlParser.T__151:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1140;
                        this.functionIdentifier();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, cqlParser.RULE_identifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1143;
                _la = this._input.LA(1);
                if (!(((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & ((1 << (cqlParser.QUOTEDIDENTIFIER - 154)) | (1 << (cqlParser.IDENTIFIER - 154)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 154)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    externalConstant() {
        let _localctx = new ExternalConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, cqlParser.RULE_externalConstant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1145;
                this.match(cqlParser.T__152);
                this.state = 1148;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case cqlParser.QUOTEDIDENTIFIER:
                    case cqlParser.IDENTIFIER:
                    case cqlParser.DELIMITEDIDENTIFIER:
                        {
                            this.state = 1146;
                            this.identifier();
                        }
                        break;
                    case cqlParser.STRING:
                        {
                            this.state = 1147;
                            this.match(cqlParser.STRING);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    paramList() {
        let _localctx = new ParamListContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, cqlParser.RULE_paramList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1150;
                this.expression(0);
                this.state = 1155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === cqlParser.T__14) {
                    {
                        {
                            this.state = 1151;
                            this.match(cqlParser.T__14);
                            this.state = 1152;
                            this.expression(0);
                        }
                    }
                    this.state = 1157;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quantity() {
        let _localctx = new QuantityContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, cqlParser.RULE_quantity);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1158;
                this.match(cqlParser.NUMBER);
                this.state = 1160;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                    case 1:
                        {
                            this.state = 1159;
                            this.unit();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unit() {
        let _localctx = new UnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, cqlParser.RULE_unit);
        try {
            this.state = 1165;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case cqlParser.T__78:
                case cqlParser.T__79:
                case cqlParser.T__80:
                case cqlParser.T__81:
                case cqlParser.T__82:
                case cqlParser.T__83:
                case cqlParser.T__84:
                case cqlParser.T__85:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1162;
                        this.dateTimePrecision();
                    }
                    break;
                case cqlParser.T__89:
                case cqlParser.T__90:
                case cqlParser.T__91:
                case cqlParser.T__92:
                case cqlParser.T__93:
                case cqlParser.T__94:
                case cqlParser.T__95:
                case cqlParser.T__96:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1163;
                        this.pluralDateTimePrecision();
                    }
                    break;
                case cqlParser.STRING:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1164;
                        this.match(cqlParser.STRING);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 56:
                return this.simplePath_sempred(_localctx, predIndex);
            case 58:
                return this.expression_sempred(_localctx, predIndex);
            case 62:
                return this.expressionTerm_sempred(_localctx, predIndex);
        }
        return true;
    }
    simplePath_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 2);
            case 1:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 8);
            case 3:
                return this.precpred(this._ctx, 7);
            case 4:
                return this.precpred(this._ctx, 6);
            case 5:
                return this.precpred(this._ctx, 5);
            case 6:
                return this.precpred(this._ctx, 4);
            case 7:
                return this.precpred(this._ctx, 3);
            case 8:
                return this.precpred(this._ctx, 2);
            case 9:
                return this.precpred(this._ctx, 1);
            case 10:
                return this.precpred(this._ctx, 16);
            case 11:
                return this.precpred(this._ctx, 15);
            case 12:
                return this.precpred(this._ctx, 11);
        }
        return true;
    }
    expressionTerm_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 13:
                return this.precpred(this._ctx, 7);
            case 14:
                return this.precpred(this._ctx, 6);
            case 15:
                return this.precpred(this._ctx, 5);
            case 16:
                return this.precpred(this._ctx, 21);
            case 17:
                return this.precpred(this._ctx, 20);
        }
        return true;
    }
    static get _ATN() {
        if (!cqlParser.__ATN) {
            cqlParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(cqlParser._serializedATN));
        }
        return cqlParser.__ATN;
    }
}
exports.cqlParser = cqlParser;
cqlParser.T__0 = 1;
cqlParser.T__1 = 2;
cqlParser.T__2 = 3;
cqlParser.T__3 = 4;
cqlParser.T__4 = 5;
cqlParser.T__5 = 6;
cqlParser.T__6 = 7;
cqlParser.T__7 = 8;
cqlParser.T__8 = 9;
cqlParser.T__9 = 10;
cqlParser.T__10 = 11;
cqlParser.T__11 = 12;
cqlParser.T__12 = 13;
cqlParser.T__13 = 14;
cqlParser.T__14 = 15;
cqlParser.T__15 = 16;
cqlParser.T__16 = 17;
cqlParser.T__17 = 18;
cqlParser.T__18 = 19;
cqlParser.T__19 = 20;
cqlParser.T__20 = 21;
cqlParser.T__21 = 22;
cqlParser.T__22 = 23;
cqlParser.T__23 = 24;
cqlParser.T__24 = 25;
cqlParser.T__25 = 26;
cqlParser.T__26 = 27;
cqlParser.T__27 = 28;
cqlParser.T__28 = 29;
cqlParser.T__29 = 30;
cqlParser.T__30 = 31;
cqlParser.T__31 = 32;
cqlParser.T__32 = 33;
cqlParser.T__33 = 34;
cqlParser.T__34 = 35;
cqlParser.T__35 = 36;
cqlParser.T__36 = 37;
cqlParser.T__37 = 38;
cqlParser.T__38 = 39;
cqlParser.T__39 = 40;
cqlParser.T__40 = 41;
cqlParser.T__41 = 42;
cqlParser.T__42 = 43;
cqlParser.T__43 = 44;
cqlParser.T__44 = 45;
cqlParser.T__45 = 46;
cqlParser.T__46 = 47;
cqlParser.T__47 = 48;
cqlParser.T__48 = 49;
cqlParser.T__49 = 50;
cqlParser.T__50 = 51;
cqlParser.T__51 = 52;
cqlParser.T__52 = 53;
cqlParser.T__53 = 54;
cqlParser.T__54 = 55;
cqlParser.T__55 = 56;
cqlParser.T__56 = 57;
cqlParser.T__57 = 58;
cqlParser.T__58 = 59;
cqlParser.T__59 = 60;
cqlParser.T__60 = 61;
cqlParser.T__61 = 62;
cqlParser.T__62 = 63;
cqlParser.T__63 = 64;
cqlParser.T__64 = 65;
cqlParser.T__65 = 66;
cqlParser.T__66 = 67;
cqlParser.T__67 = 68;
cqlParser.T__68 = 69;
cqlParser.T__69 = 70;
cqlParser.T__70 = 71;
cqlParser.T__71 = 72;
cqlParser.T__72 = 73;
cqlParser.T__73 = 74;
cqlParser.T__74 = 75;
cqlParser.T__75 = 76;
cqlParser.T__76 = 77;
cqlParser.T__77 = 78;
cqlParser.T__78 = 79;
cqlParser.T__79 = 80;
cqlParser.T__80 = 81;
cqlParser.T__81 = 82;
cqlParser.T__82 = 83;
cqlParser.T__83 = 84;
cqlParser.T__84 = 85;
cqlParser.T__85 = 86;
cqlParser.T__86 = 87;
cqlParser.T__87 = 88;
cqlParser.T__88 = 89;
cqlParser.T__89 = 90;
cqlParser.T__90 = 91;
cqlParser.T__91 = 92;
cqlParser.T__92 = 93;
cqlParser.T__93 = 94;
cqlParser.T__94 = 95;
cqlParser.T__95 = 96;
cqlParser.T__96 = 97;
cqlParser.T__97 = 98;
cqlParser.T__98 = 99;
cqlParser.T__99 = 100;
cqlParser.T__100 = 101;
cqlParser.T__101 = 102;
cqlParser.T__102 = 103;
cqlParser.T__103 = 104;
cqlParser.T__104 = 105;
cqlParser.T__105 = 106;
cqlParser.T__106 = 107;
cqlParser.T__107 = 108;
cqlParser.T__108 = 109;
cqlParser.T__109 = 110;
cqlParser.T__110 = 111;
cqlParser.T__111 = 112;
cqlParser.T__112 = 113;
cqlParser.T__113 = 114;
cqlParser.T__114 = 115;
cqlParser.T__115 = 116;
cqlParser.T__116 = 117;
cqlParser.T__117 = 118;
cqlParser.T__118 = 119;
cqlParser.T__119 = 120;
cqlParser.T__120 = 121;
cqlParser.T__121 = 122;
cqlParser.T__122 = 123;
cqlParser.T__123 = 124;
cqlParser.T__124 = 125;
cqlParser.T__125 = 126;
cqlParser.T__126 = 127;
cqlParser.T__127 = 128;
cqlParser.T__128 = 129;
cqlParser.T__129 = 130;
cqlParser.T__130 = 131;
cqlParser.T__131 = 132;
cqlParser.T__132 = 133;
cqlParser.T__133 = 134;
cqlParser.T__134 = 135;
cqlParser.T__135 = 136;
cqlParser.T__136 = 137;
cqlParser.T__137 = 138;
cqlParser.T__138 = 139;
cqlParser.T__139 = 140;
cqlParser.T__140 = 141;
cqlParser.T__141 = 142;
cqlParser.T__142 = 143;
cqlParser.T__143 = 144;
cqlParser.T__144 = 145;
cqlParser.T__145 = 146;
cqlParser.T__146 = 147;
cqlParser.T__147 = 148;
cqlParser.T__148 = 149;
cqlParser.T__149 = 150;
cqlParser.T__150 = 151;
cqlParser.T__151 = 152;
cqlParser.T__152 = 153;
cqlParser.QUOTEDIDENTIFIER = 154;
cqlParser.DATETIME = 155;
cqlParser.TIME = 156;
cqlParser.IDENTIFIER = 157;
cqlParser.DELIMITEDIDENTIFIER = 158;
cqlParser.STRING = 159;
cqlParser.NUMBER = 160;
cqlParser.WS = 161;
cqlParser.COMMENT = 162;
cqlParser.LINE_COMMENT = 163;
cqlParser.RULE_library = 0;
cqlParser.RULE_libraryDefinition = 1;
cqlParser.RULE_usingDefinition = 2;
cqlParser.RULE_includeDefinition = 3;
cqlParser.RULE_localIdentifier = 4;
cqlParser.RULE_accessModifier = 5;
cqlParser.RULE_parameterDefinition = 6;
cqlParser.RULE_codesystemDefinition = 7;
cqlParser.RULE_valuesetDefinition = 8;
cqlParser.RULE_codesystems = 9;
cqlParser.RULE_codesystemIdentifier = 10;
cqlParser.RULE_libraryIdentifier = 11;
cqlParser.RULE_codeDefinition = 12;
cqlParser.RULE_conceptDefinition = 13;
cqlParser.RULE_codeIdentifier = 14;
cqlParser.RULE_codesystemId = 15;
cqlParser.RULE_valuesetId = 16;
cqlParser.RULE_versionSpecifier = 17;
cqlParser.RULE_codeId = 18;
cqlParser.RULE_typeSpecifier = 19;
cqlParser.RULE_namedTypeSpecifier = 20;
cqlParser.RULE_modelIdentifier = 21;
cqlParser.RULE_listTypeSpecifier = 22;
cqlParser.RULE_intervalTypeSpecifier = 23;
cqlParser.RULE_tupleTypeSpecifier = 24;
cqlParser.RULE_tupleElementDefinition = 25;
cqlParser.RULE_choiceTypeSpecifier = 26;
cqlParser.RULE_statement = 27;
cqlParser.RULE_expressionDefinition = 28;
cqlParser.RULE_contextDefinition = 29;
cqlParser.RULE_functionDefinition = 30;
cqlParser.RULE_operandDefinition = 31;
cqlParser.RULE_functionBody = 32;
cqlParser.RULE_querySource = 33;
cqlParser.RULE_aliasedQuerySource = 34;
cqlParser.RULE_alias = 35;
cqlParser.RULE_queryInclusionClause = 36;
cqlParser.RULE_withClause = 37;
cqlParser.RULE_withoutClause = 38;
cqlParser.RULE_retrieve = 39;
cqlParser.RULE_contextIdentifier = 40;
cqlParser.RULE_codePath = 41;
cqlParser.RULE_terminology = 42;
cqlParser.RULE_qualifier = 43;
cqlParser.RULE_query = 44;
cqlParser.RULE_sourceClause = 45;
cqlParser.RULE_letClause = 46;
cqlParser.RULE_letClauseItem = 47;
cqlParser.RULE_whereClause = 48;
cqlParser.RULE_returnClause = 49;
cqlParser.RULE_sortClause = 50;
cqlParser.RULE_sortDirection = 51;
cqlParser.RULE_sortByItem = 52;
cqlParser.RULE_qualifiedIdentifier = 53;
cqlParser.RULE_qualifiedIdentifierExpression = 54;
cqlParser.RULE_qualifierExpression = 55;
cqlParser.RULE_simplePath = 56;
cqlParser.RULE_simpleLiteral = 57;
cqlParser.RULE_expression = 58;
cqlParser.RULE_dateTimePrecision = 59;
cqlParser.RULE_dateTimeComponent = 60;
cqlParser.RULE_pluralDateTimePrecision = 61;
cqlParser.RULE_expressionTerm = 62;
cqlParser.RULE_caseExpressionItem = 63;
cqlParser.RULE_dateTimePrecisionSpecifier = 64;
cqlParser.RULE_relativeQualifier = 65;
cqlParser.RULE_offsetRelativeQualifier = 66;
cqlParser.RULE_exclusiveRelativeQualifier = 67;
cqlParser.RULE_quantityOffset = 68;
cqlParser.RULE_temporalRelationship = 69;
cqlParser.RULE_intervalOperatorPhrase = 70;
cqlParser.RULE_term = 71;
cqlParser.RULE_qualifiedInvocation = 72;
cqlParser.RULE_qualifiedFunction = 73;
cqlParser.RULE_invocation = 74;
cqlParser.RULE_c_function = 75;
cqlParser.RULE_ratio = 76;
cqlParser.RULE_literal = 77;
cqlParser.RULE_intervalSelector = 78;
cqlParser.RULE_tupleSelector = 79;
cqlParser.RULE_tupleElementSelector = 80;
cqlParser.RULE_instanceSelector = 81;
cqlParser.RULE_instanceElementSelector = 82;
cqlParser.RULE_listSelector = 83;
cqlParser.RULE_displayClause = 84;
cqlParser.RULE_codeSelector = 85;
cqlParser.RULE_conceptSelector = 86;
cqlParser.RULE_keyword = 87;
cqlParser.RULE_reservedWord = 88;
cqlParser.RULE_keywordIdentifier = 89;
cqlParser.RULE_obsoleteIdentifier = 90;
cqlParser.RULE_functionIdentifier = 91;
cqlParser.RULE_typeNameIdentifier = 92;
cqlParser.RULE_referentialIdentifier = 93;
cqlParser.RULE_referentialOrTypeNameIdentifier = 94;
cqlParser.RULE_identifierOrFunctionIdentifier = 95;
cqlParser.RULE_identifier = 96;
cqlParser.RULE_externalConstant = 97;
cqlParser.RULE_paramList = 98;
cqlParser.RULE_quantity = 99;
cqlParser.RULE_unit = 100;
// tslint:disable:no-trailing-whitespace
cqlParser.ruleNames = [
    "library", "libraryDefinition", "usingDefinition", "includeDefinition",
    "localIdentifier", "accessModifier", "parameterDefinition", "codesystemDefinition",
    "valuesetDefinition", "codesystems", "codesystemIdentifier", "libraryIdentifier",
    "codeDefinition", "conceptDefinition", "codeIdentifier", "codesystemId",
    "valuesetId", "versionSpecifier", "codeId", "typeSpecifier", "namedTypeSpecifier",
    "modelIdentifier", "listTypeSpecifier", "intervalTypeSpecifier", "tupleTypeSpecifier",
    "tupleElementDefinition", "choiceTypeSpecifier", "statement", "expressionDefinition",
    "contextDefinition", "functionDefinition", "operandDefinition", "functionBody",
    "querySource", "aliasedQuerySource", "alias", "queryInclusionClause",
    "withClause", "withoutClause", "retrieve", "contextIdentifier", "codePath",
    "terminology", "qualifier", "query", "sourceClause", "letClause", "letClauseItem",
    "whereClause", "returnClause", "sortClause", "sortDirection", "sortByItem",
    "qualifiedIdentifier", "qualifiedIdentifierExpression", "qualifierExpression",
    "simplePath", "simpleLiteral", "expression", "dateTimePrecision", "dateTimeComponent",
    "pluralDateTimePrecision", "expressionTerm", "caseExpressionItem", "dateTimePrecisionSpecifier",
    "relativeQualifier", "offsetRelativeQualifier", "exclusiveRelativeQualifier",
    "quantityOffset", "temporalRelationship", "intervalOperatorPhrase", "term",
    "qualifiedInvocation", "qualifiedFunction", "invocation", "c_function",
    "ratio", "literal", "intervalSelector", "tupleSelector", "tupleElementSelector",
    "instanceSelector", "instanceElementSelector", "listSelector", "displayClause",
    "codeSelector", "conceptSelector", "keyword", "reservedWord", "keywordIdentifier",
    "obsoleteIdentifier", "functionIdentifier", "typeNameIdentifier", "referentialIdentifier",
    "referentialOrTypeNameIdentifier", "identifierOrFunctionIdentifier", "identifier",
    "externalConstant", "paramList", "quantity", "unit",
];
cqlParser._LITERAL_NAMES = [
    undefined, "'library'", "'version'", "'using'", "'include'", "'called'",
    "'public'", "'private'", "'parameter'", "'default'", "'codesystem'", "':'",
    "'valueset'", "'codesystems'", "'{'", "','", "'}'", "'.'", "'code'", "'from'",
    "'concept'", "'List'", "'<'", "'>'", "'Interval'", "'Tuple'", "'Choice'",
    "'define'", "'context'", "'function'", "'('", "')'", "'returns'", "'external'",
    "'with'", "'such that'", "'without'", "'['", "'->'", "'in'", "']'", "'let'",
    "'where'", "'return'", "'all'", "'distinct'", "'sort'", "'by'", "'asc'",
    "'ascending'", "'desc'", "'descending'", "'is'", "'not'", "'null'", "'true'",
    "'false'", "'as'", "'cast'", "'exists'", "'properly'", "'between'", "'and'",
    "'duration'", "'difference'", "'<='", "'>='", "'='", "'!='", "'~'", "'!~'",
    "'contains'", "'or'", "'xor'", "'implies'", "'|'", "'union'", "'intersect'",
    "'except'", "'year'", "'month'", "'week'", "'day'", "'hour'", "'minute'",
    "'second'", "'millisecond'", "'date'", "'time'", "'timezoneoffset'", "'years'",
    "'months'", "'weeks'", "'days'", "'hours'", "'minutes'", "'seconds'",
    "'milliseconds'", "'convert'", "'to'", "'+'", "'-'", "'start'", "'end'",
    "'of'", "'width'", "'successor'", "'predecessor'", "'singleton'", "'point'",
    "'minimum'", "'maximum'", "'^'", "'*'", "'/'", "'div'", "'mod'", "'&'",
    "'if'", "'then'", "'else'", "'case'", "'flatten'", "'expand'", "'collapse'",
    "'per'", "'when'", "'or before'", "'or after'", "'or more'", "'or less'",
    "'less than'", "'more than'", "'on or'", "'before'", "'after'", "'or on'",
    "'starts'", "'ends'", "'occurs'", "'same'", "'includes'", "'during'",
    "'included in'", "'within'", "'meets'", "'overlaps'", "'$this'", "'$index'",
    "'$total'", "'display'", "'Code'", "'Concept'", "'%'",
];
cqlParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "QUOTEDIDENTIFIER", "DATETIME", "TIME", "IDENTIFIER", "DELIMITEDIDENTIFIER",
    "STRING", "NUMBER", "WS", "COMMENT", "LINE_COMMENT",
];
cqlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(cqlParser._LITERAL_NAMES, cqlParser._SYMBOLIC_NAMES, []);
cqlParser._serializedATNSegments = 3;
cqlParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA5\u0492\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
    "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
    "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
    "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
    "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
    "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x03\x02\x05\x02\xCE" +
    "\n\x02\x03\x02\x07\x02\xD1\n\x02\f\x02\x0E\x02\xD4\v\x02\x03\x02\x07\x02" +
    "\xD7\n\x02\f\x02\x0E\x02\xDA\v\x02\x03\x02\x07\x02\xDD\n\x02\f\x02\x0E" +
    "\x02\xE0\v\x02\x03\x02\x07\x02\xE3\n\x02\f\x02\x0E\x02\xE6\v\x02\x03\x02" +
    "\x07\x02\xE9\n\x02\f\x02\x0E\x02\xEC\v\x02\x03\x02\x07\x02\xEF\n\x02\f" +
    "\x02\x0E\x02\xF2\v\x02\x03\x02\x07\x02\xF5\n\x02\f\x02\x0E\x02\xF8\v\x02" +
    "\x03\x02\x07\x02\xFB\n\x02\f\x02\x0E\x02\xFE\v\x02\x03\x02\x03\x02\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0106\n\x03\x03\x04\x03\x04\x03\x04" +
    "\x03\x04\x05\x04\u010C\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0112" +
    "\n\x05\x03\x05\x03\x05\x05\x05\u0116\n\x05\x03\x06\x03\x06\x03\x07\x03" +
    "\x07\x03\b\x05\b\u011D\n\b\x03\b\x03\b\x03\b\x05\b\u0122\n\b\x03\b\x03" +
    "\b\x05\b\u0126\n\b\x03\t\x05\t\u0129\n\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
    "\x03\t\x05\t\u0131\n\t\x03\n\x05\n\u0134\n\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x05\n\u013C\n\n\x03\n\x05\n\u013F\n\n\x03\v\x03\v\x03\v\x03\v" +
    "\x03\v\x07\v\u0146\n\v\f\v\x0E\v\u0149\v\v\x03\v\x03\v\x03\f\x03\f\x03" +
    "\f\x05\f\u0150\n\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x05\x0E\u0157\n\x0E" +
    "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0160" +
    "\n\x0E\x03\x0F\x05\x0F\u0163\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x0F\x07\x0F\u016C\n\x0F\f\x0F\x0E\x0F\u016F\v\x0F\x03" +
    "\x0F\x03\x0F\x05\x0F\u0173\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0178" +
    "\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
    "\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0189" +
    "\n\x15\x03\x16\x03\x16\x03\x16\x07\x16\u018E\n\x16\f\x16\x0E\x16\u0191" +
    "\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
    "\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
    "\x03\x1A\x03\x1A\x07\x1A\u01A6\n\x1A\f\x1A\x0E\x1A\u01A9\v\x1A\x03\x1A" +
    "\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
    "\x07\x1C\u01B5\n\x1C\f\x1C\x0E\x1C\u01B8\v\x1C\x03\x1C\x03\x1C\x03\x1D" +
    "\x03\x1D\x03\x1D\x05\x1D\u01BF\n\x1D\x03\x1E\x03\x1E\x05\x1E\u01C3\n\x1E" +
    "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F" +
    "\u01CD\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x05 \u01D3\n \x03 \x03 \x03 \x03" +
    " \x03 \x03 \x07 \u01DB\n \f \x0E \u01DE\v \x05 \u01E0\n \x03 \x03 \x03" +
    " \x05 \u01E5\n \x03 \x03 \x03 \x05 \u01EA\n \x03!\x03!\x03!\x03\"\x03" +
    "\"\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u01F7\n#\x03$\x03$\x03$\x03%\x03" +
    "%\x03&\x03&\x05&\u0200\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03" +
    "(\x03(\x03(\x03)\x03)\x03)\x03)\x05)\u0210\n)\x03)\x03)\x03)\x03)\x03" +
    ")\x05)\u0217\n)\x03)\x05)\u021A\n)\x03)\x03)\x03*\x03*\x03+\x03+\x03," +
    "\x03,\x05,\u0224\n,\x03-\x03-\x03.\x03.\x05.\u022A\n.\x03.\x07.\u022D" +
    "\n.\f.\x0E.\u0230\v.\x03.\x05.\u0233\n.\x03.\x05.\u0236\n.\x03.\x05.\u0239" +
    "\n.\x03/\x05/\u023C\n/\x03/\x03/\x03/\x07/\u0241\n/\f/\x0E/\u0244\v/\x03" +
    "0\x030\x030\x030\x070\u024A\n0\f0\x0E0\u024D\v0\x031\x031\x031\x031\x03" +
    "2\x032\x032\x033\x033\x053\u0258\n3\x033\x033\x034\x034\x034\x034\x03" +
    "4\x034\x074\u0262\n4\f4\x0E4\u0265\v4\x054\u0267\n4\x035\x035\x036\x03" +
    "6\x056\u026D\n6\x037\x037\x037\x077\u0272\n7\f7\x0E7\u0275\v7\x037\x03" +
    "7\x038\x038\x038\x078\u027C\n8\f8\x0E8\u027F\v8\x038\x038\x039\x039\x03" +
    ":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u0290\n:\f:\x0E" +
    ":\u0293\v:\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
    "<\x03<\x03<\x03<\x03<\x03<\x05<\u02A6\n<\x03<\x03<\x03<\x03<\x03<\x03" +
    "<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u02B6\n<\x03<\x03<\x03" +
    "<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u02C5\n<\x03" +
    "<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
    "<\x03<\x05<\u02D7\n<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u02DF\n<\x03<" +
    "\x03<\x03<\x03<\x03<\x07<\u02E6\n<\f<\x0E<\u02E9\v<\x03=\x03=\x03>\x03" +
    ">\x03>\x03>\x05>\u02F1\n>\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
    "@\x05@\u02FC\n@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
    "@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
    "@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
    "@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u032D\n@\x03@\x06@\u0330" +
    "\n@\r@\x0E@\u0331\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
    "@\x05@\u033F\n@\x05@\u0341\n@\x05@\u0343\n@\x03@\x03@\x03@\x03@\x03@\x03" +
    "@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x07@\u0356\n" +
    "@\f@\x0E@\u0359\v@\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03" +
    "D\x03D\x03E\x03E\x03F\x03F\x05F\u036B\nF\x03F\x03F\x03F\x05F\u0370\nF" +
    "\x03G\x05G\u0373\nG\x03G\x03G\x03G\x05G\u0378\nG\x05G\u037A\nG\x03H\x05" +
    "H\u037D\nH\x03H\x03H\x05H\u0381\nH\x03H\x03H\x05H\u0385\nH\x03H\x05H\u0388" +
    "\nH\x03H\x05H\u038B\nH\x03H\x03H\x05H\u038F\nH\x03H\x05H\u0392\nH\x03" +
    "H\x05H\u0395\nH\x03H\x05H\u0398\nH\x03H\x03H\x05H\u039C\nH\x03H\x05H\u039F" +
    "\nH\x03H\x05H\u03A2\nH\x03H\x03H\x05H\u03A6\nH\x03H\x05H\u03A9\nH\x03" +
    "H\x05H\u03AC\nH\x03H\x05H\u03AF\nH\x03H\x03H\x03H\x03H\x05H\u03B5\nH\x03" +
    "H\x03H\x05H\u03B9\nH\x03H\x05H\u03BC\nH\x03H\x03H\x05H\u03C0\nH\x03H\x05" +
    "H\u03C3\nH\x03H\x03H\x05H\u03C7\nH\x03H\x03H\x05H\u03CB\nH\x05H\u03CD" +
    "\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05" +
    "I\u03DC\nI\x03J\x03J\x05J\u03E0\nJ\x03K\x03K\x03K\x05K\u03E5\nK\x03K\x03" +
    "K\x03L\x03L\x03L\x03L\x03L\x05L\u03EE\nL\x03M\x03M\x03M\x05M\u03F3\nM" +
    "\x03M\x03M\x03N\x03N\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
    "O\x05O\u0403\nO\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03Q\x05Q\u040D\nQ" +
    "\x03Q\x03Q\x03Q\x03Q\x03Q\x07Q\u0414\nQ\fQ\x0EQ\u0417\vQ\x05Q\u0419\n" +
    "Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x07S\u0427" +
    "\nS\fS\x0ES\u042A\vS\x05S\u042C\nS\x03S\x03S\x03T\x03T\x03T\x03T\x03U" +
    "\x03U\x03U\x03U\x03U\x05U\u0439\nU\x05U\u043B\nU\x03U\x03U\x03U\x03U\x07" +
    "U\u0441\nU\fU\x0EU\u0444\vU\x05U\u0446\nU\x03U\x03U\x03V\x03V\x03V\x03" +
    "W\x03W\x03W\x03W\x03W\x05W\u0452\nW\x03X\x03X\x03X\x03X\x03X\x07X\u0459" +
    "\nX\fX\x0EX\u045C\vX\x03X\x03X\x05X\u0460\nX\x03Y\x03Y\x03Z\x03Z\x03[" +
    "\x03[\x03\\\x03\\\x03]\x03]\x03^\x03^\x03_\x03_\x05_\u0470\n_\x03`\x03" +
    "`\x05`\u0474\n`\x03a\x03a\x05a\u0478\na\x03b\x03b\x03c\x03c\x03c\x05c" +
    "\u047F\nc\x03d\x03d\x03d\x07d\u0484\nd\fd\x0Ed\u0487\vd\x03e\x03e\x05" +
    "e\u048B\ne\x03f\x03f\x03f\x05f\u0490\nf\x03f\x02\x02\x05rv~g\x02\x02\x04" +
    "\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
    "\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
    "\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
    "J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
    "f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
    "\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
    "\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
    "\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
    "\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8" +
    "\x02\xCA\x02\x02&\x03\x02\b\t\x03\x02./\x03\x0225\x03\x02\xA1\xA2\x04" +
    "\x02\x18\x19CD\x03\x02EH\x04\x02))II\x03\x02JK\x03\x02MP\x03\x028:\x04" +
    "\x0266;;\x03\x02QX\x03\x02\\c\x03\x02fg\x03\x02hi\x03\x02pq\x04\x02//" +
    "||\x03\x02}~\x03\x02sv\x04\x02fgww\x03\x02\x81\x82\x03\x02\x83\x84\x03" +
    "\x02\x85\x86\x03\x02\x88\x89\x03\x02\x8B\x8D\x03\x02\x90\x91\x03\x029" +
    ":\x04\x02  \'\'\x04\x02!!**\x12\x02\x03\f\x0E\x0F\x14\x17\x1A\x1B\x1D" +
    "\x1F$&))+BILNehnpquvx\x84\x87\x94\x98\x9A\x15\x02\x15\x15\x17\x17\x1A" +
    "\x1B$&))++-06BJJQX\\ejjnnpqx\x80\x87\x8A\x8D\x8E\x90\x92\x99\x9A\x15\x02" +
    "\x03\f\x0E\x0F\x14\x14\x16\x16\x1D\x1F,,15IIKLNPY[hikmuv\x81\x84\x8B\x8C" +
    "\x8F\x8F\x93\x94\x98\x98\r\x02\x04\x04\x14\x14\x16\x16,,./77==IIY[hi\x98" +
    "\x9A\x13\x02\x03\f\x0E\x0F\x14\x17\x1A\x1B\x1D\x1F$&))+BILNehnpquvx\x84" +
    "\x88\x89\x8B\x94\x98\x9A\x04\x02YZ\x99\x9A\x04\x02\x9C\x9C\x9F\xA0\x02" +
    "\u04F2\x02\xCD\x03\x02\x02\x02\x04\u0101\x03\x02\x02\x02\x06\u0107\x03" +
    "\x02\x02\x02\b\u010D\x03\x02\x02\x02\n\u0117\x03\x02\x02\x02\f\u0119\x03" +
    "\x02\x02\x02\x0E\u011C\x03\x02\x02\x02\x10\u0128\x03\x02\x02\x02\x12\u0133" +
    "\x03\x02\x02\x02\x14\u0140\x03\x02\x02\x02\x16\u014F\x03\x02\x02\x02\x18" +
    "\u0153\x03\x02\x02\x02\x1A\u0156\x03\x02\x02\x02\x1C\u0162\x03\x02\x02" +
    "\x02\x1E\u0177\x03\x02\x02\x02 \u017B\x03\x02\x02\x02\"\u017D\x03\x02" +
    "\x02\x02$\u017F\x03\x02\x02\x02&\u0181\x03\x02\x02\x02(\u0188\x03\x02" +
    "\x02\x02*\u018F\x03\x02\x02\x02,\u0194\x03\x02\x02\x02.\u0196\x03\x02" +
    "\x02\x020\u019B\x03\x02\x02\x022\u01A0\x03\x02\x02\x024\u01AC\x03\x02" +
    "\x02\x026\u01AF\x03\x02\x02\x028\u01BE\x03\x02\x02\x02:\u01C0\x03\x02" +
    "\x02\x02<\u01C8\x03\x02\x02\x02>\u01D0\x03\x02\x02\x02@\u01EB\x03\x02" +
    "\x02\x02B\u01EE\x03\x02\x02\x02D\u01F6\x03\x02\x02\x02F\u01F8\x03\x02" +
    "\x02\x02H\u01FB\x03\x02\x02\x02J\u01FF\x03\x02\x02\x02L\u0201\x03\x02" +
    "\x02\x02N\u0206\x03\x02\x02\x02P\u020B\x03\x02\x02\x02R\u021D\x03\x02" +
    "\x02\x02T\u021F\x03\x02\x02\x02V\u0223\x03\x02\x02\x02X\u0225\x03\x02" +
    "\x02\x02Z\u0227\x03\x02\x02\x02\\\u023B\x03\x02\x02\x02^\u0245\x03\x02" +
    "\x02\x02`\u024E\x03\x02\x02\x02b\u0252\x03\x02\x02\x02d\u0255\x03\x02" +
    "\x02\x02f\u025B\x03\x02\x02\x02h\u0268\x03\x02\x02\x02j\u026A\x03\x02" +
    "\x02\x02l\u0273\x03\x02\x02\x02n\u027D\x03\x02\x02\x02p\u0282\x03\x02" +
    "\x02\x02r\u0284\x03\x02\x02\x02t\u0294\x03\x02\x02\x02v\u02B5\x03\x02" +
    "\x02\x02x\u02EA\x03\x02\x02\x02z\u02F0\x03\x02\x02\x02|\u02F2\x03\x02" +
    "\x02\x02~\u0342\x03\x02\x02\x02\x80\u035A\x03\x02\x02\x02\x82\u035F\x03" +
    "\x02\x02\x02\x84\u0362\x03\x02\x02\x02\x86\u0364\x03\x02\x02\x02\x88\u0366" +
    "\x03\x02\x02\x02\x8A\u036F\x03\x02\x02\x02\x8C\u0379\x03\x02\x02\x02\x8E" +
    "\u03CC\x03\x02\x02\x02\x90\u03DB\x03\x02\x02\x02\x92\u03DF\x03\x02\x02" +
    "\x02\x94\u03E1\x03\x02\x02\x02\x96\u03ED\x03\x02\x02\x02\x98\u03EF\x03" +
    "\x02\x02\x02\x9A\u03F6\x03\x02\x02\x02\x9C\u0402\x03\x02\x02\x02\x9E\u0404" +
    "\x03\x02\x02\x02\xA0\u040C\x03\x02\x02\x02\xA2\u041C\x03\x02\x02\x02\xA4" +
    "\u0420\x03\x02\x02\x02\xA6\u042F\x03\x02\x02\x02\xA8\u043A\x03\x02\x02" +
    "\x02\xAA\u0449\x03\x02\x02\x02\xAC\u044C\x03\x02\x02\x02\xAE\u0453\x03" +
    "\x02\x02\x02\xB0\u0461\x03\x02\x02\x02\xB2\u0463\x03\x02\x02\x02\xB4\u0465" +
    "\x03\x02\x02\x02\xB6\u0467\x03\x02\x02\x02\xB8\u0469\x03\x02\x02\x02\xBA" +
    "\u046B\x03\x02\x02\x02\xBC\u046F\x03\x02\x02\x02\xBE\u0473\x03\x02\x02" +
    "\x02\xC0\u0477\x03\x02\x02\x02\xC2\u0479\x03\x02\x02\x02\xC4\u047B\x03" +
    "\x02\x02\x02\xC6\u0480\x03\x02\x02\x02\xC8\u0488\x03\x02\x02\x02\xCA\u048F" +
    "\x03\x02\x02\x02\xCC\xCE\x05\x04\x03\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE" +
    "\x03\x02\x02\x02\xCE\xD2\x03\x02\x02\x02\xCF\xD1\x05\x06\x04\x02\xD0\xCF" +
    "\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3" +
    "\x03\x02\x02\x02\xD3\xD8\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD7" +
    "\x05\b\x05\x02\xD6\xD5\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6" +
    "\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDE\x03\x02\x02\x02\xDA\xD8" +
    "\x03\x02\x02\x02\xDB\xDD\x05\x10\t\x02\xDC\xDB\x03\x02\x02\x02\xDD\xE0" +
    "\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE4" +
    "\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE3\x05\x12\n\x02\xE2\xE1" +
    "\x03\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5" +
    "\x03\x02\x02\x02\xE5\xEA\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xE9" +
    "\x05\x1A\x0E\x02\xE8\xE7\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8" +
    "\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xF0\x03\x02\x02\x02\xEC\xEA" +
    "\x03\x02\x02\x02\xED\xEF\x05\x1C\x0F\x02\xEE\xED\x03\x02\x02\x02\xEF\xF2" +
    "\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF6" +
    "\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF5\x05\x0E\b\x02\xF4\xF3" +
    "\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7" +
    "\x03\x02\x02\x02\xF7\xFC\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFB" +
    "\x058\x1D\x02\xFA\xF9\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA" +
    "\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\xFC" +
    "\x03\x02\x02\x02\xFF\u0100\x07\x02\x02\x03\u0100\x03\x03\x02\x02\x02\u0101" +
    "\u0102\x07\x03\x02\x02\u0102\u0105\x05l7\x02\u0103\u0104\x07\x04\x02\x02" +
    "\u0104\u0106\x05$\x13\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106\x03" +
    "\x02\x02\x02\u0106\x05\x03\x02\x02\x02\u0107\u0108\x07\x05\x02\x02\u0108" +
    "\u010B\x05,\x17\x02\u0109\u010A\x07\x04\x02\x02\u010A\u010C\x05$\x13\x02" +
    "\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\x07\x03" +
    "\x02\x02\x02\u010D\u010E\x07\x06\x02\x02\u010E\u0111\x05l7\x02\u010F\u0110" +
    "\x07\x04\x02\x02\u0110\u0112\x05$\x13\x02\u0111\u010F\x03\x02\x02\x02" +
    "\u0111\u0112\x03\x02\x02\x02\u0112\u0115\x03\x02\x02\x02\u0113\u0114\x07" +
    "\x07\x02\x02\u0114\u0116\x05\n\x06\x02\u0115\u0113\x03\x02\x02\x02\u0115" +
    "\u0116\x03\x02\x02\x02\u0116\t\x03\x02\x02\x02\u0117\u0118\x05\xC2b\x02" +
    "\u0118\v\x03\x02\x02\x02\u0119\u011A\t\x02\x02\x02\u011A\r\x03\x02\x02" +
    "\x02\u011B\u011D\x05\f\x07\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D" +
    "\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x07\n\x02\x02" +
    "\u011F\u0121\x05\xC2b\x02\u0120\u0122\x05(\x15\x02\u0121\u0120\x03\x02" +
    "\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0125\x03\x02\x02\x02\u0123" +
    "\u0124\x07\v\x02\x02\u0124\u0126\x05v<\x02\u0125\u0123\x03\x02\x02\x02" +
    "\u0125\u0126\x03\x02\x02\x02\u0126\x0F\x03\x02\x02\x02\u0127\u0129\x05" +
    "\f\x07\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129" +
    "\u012A\x03\x02\x02\x02\u012A\u012B\x07\f\x02\x02\u012B\u012C\x05\xC2b" +
    "\x02\u012C\u012D\x07\r\x02\x02\u012D\u0130\x05 \x11\x02\u012E\u012F\x07" +
    "\x04\x02\x02\u012F\u0131\x05$\x13\x02\u0130\u012E\x03\x02\x02\x02\u0130" +
    "\u0131\x03\x02\x02\x02\u0131\x11\x03\x02\x02\x02\u0132\u0134\x05\f\x07" +
    "\x02\u0133\u0132\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135" +
    "\x03\x02\x02\x02\u0135\u0136\x07\x0E\x02\x02\u0136\u0137\x05\xC2b\x02" +
    "\u0137\u0138\x07\r\x02\x02\u0138\u013B\x05\"\x12\x02\u0139\u013A\x07\x04" +
    "\x02\x02\u013A\u013C\x05$\x13\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C" +
    "\x03\x02\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D\u013F\x05\x14\v\x02" +
    "\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\x13\x03" +
    "\x02\x02\x02\u0140\u0141\x07\x0F\x02\x02\u0141\u0142\x07\x10\x02\x02\u0142" +
    "\u0147\x05\x16\f\x02\u0143\u0144\x07\x11\x02\x02\u0144\u0146\x05\x16\f" +
    "\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02\u0147\u0145" +
    "\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A\x03\x02\x02\x02" +
    "\u0149\u0147\x03\x02\x02\x02\u014A\u014B\x07\x12\x02\x02\u014B\x15\x03" +
    "\x02\x02\x02\u014C\u014D\x05\x18\r\x02\u014D\u014E\x07\x13\x02\x02\u014E" +
    "\u0150\x03\x02\x02\x02\u014F\u014C\x03\x02\x02\x02\u014F\u0150\x03\x02" +
    "\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0152\x05\xC2b\x02\u0152\x17" +
    "\x03\x02\x02\x02\u0153\u0154\x05\xC2b\x02\u0154\x19\x03\x02\x02\x02\u0155" +
    "\u0157\x05\f\x07\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03\x02\x02" +
    "\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159\x07\x14\x02\x02\u0159\u015A" +
    "\x05\xC2b\x02\u015A\u015B\x07\r\x02\x02\u015B\u015C\x05&\x14\x02\u015C" +
    "\u015D\x07\x15\x02\x02\u015D\u015F\x05\x16\f\x02\u015E\u0160\x05\xAAV" +
    "\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\x1B" +
    "\x03\x02\x02\x02\u0161\u0163\x05\f\x07\x02\u0162\u0161\x03\x02\x02\x02" +
    "\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x07" +
    "\x16\x02\x02\u0165\u0166\x05\xC2b\x02\u0166\u0167\x07\r\x02\x02\u0167" +
    "\u0168\x07\x10\x02\x02\u0168\u016D\x05\x1E\x10\x02\u0169\u016A\x07\x11" +
    "\x02\x02\u016A\u016C\x05\x1E\x10\x02\u016B\u0169\x03\x02\x02\x02\u016C" +
    "\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02" +
    "\x02\x02\u016E\u0170\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170" +
    "\u0172\x07\x12\x02\x02\u0171\u0173\x05\xAAV\x02\u0172\u0171\x03\x02\x02" +
    "\x02\u0172\u0173\x03\x02\x02\x02\u0173\x1D\x03\x02\x02\x02\u0174\u0175" +
    "\x05\x18\r\x02\u0175\u0176\x07\x13\x02\x02\u0176\u0178\x03\x02\x02\x02" +
    "\u0177\u0174\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x03" +
    "\x02\x02\x02\u0179\u017A\x05\xC2b\x02\u017A\x1F\x03\x02\x02\x02\u017B" +
    "\u017C\x07\xA1\x02\x02\u017C!\x03\x02\x02\x02\u017D\u017E\x07\xA1\x02" +
    "\x02\u017E#\x03\x02\x02\x02\u017F\u0180\x07\xA1\x02\x02\u0180%\x03\x02" +
    "\x02\x02\u0181\u0182\x07\xA1\x02\x02\u0182\'\x03\x02\x02\x02\u0183\u0189" +
    "\x05*\x16\x02\u0184\u0189\x05.\x18\x02\u0185\u0189\x050\x19\x02\u0186" +
    "\u0189\x052\x1A\x02\u0187\u0189\x056\x1C\x02\u0188\u0183\x03\x02\x02\x02" +
    "\u0188\u0184\x03\x02\x02\x02\u0188\u0185\x03\x02\x02\x02\u0188\u0186\x03" +
    "\x02\x02\x02\u0188\u0187\x03\x02\x02\x02\u0189)\x03\x02\x02\x02\u018A" +
    "\u018B\x05X-\x02\u018B\u018C\x07\x13\x02\x02\u018C\u018E\x03\x02\x02\x02" +
    "\u018D\u018A";
cqlParser._serializedATNSegment1 = "\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02" +
    "\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03\x02\x02\x02\u0191\u018F\x03" +
    "\x02\x02\x02\u0192\u0193\x05\xBE`\x02\u0193+\x03\x02\x02\x02\u0194\u0195" +
    "\x05\xC2b\x02\u0195-\x03\x02\x02\x02\u0196\u0197\x07\x17\x02\x02\u0197" +
    "\u0198\x07\x18\x02\x02\u0198\u0199\x05(\x15\x02\u0199\u019A\x07\x19\x02" +
    "\x02\u019A/\x03\x02\x02\x02\u019B\u019C\x07\x1A\x02\x02\u019C\u019D\x07" +
    "\x18\x02\x02\u019D\u019E\x05(\x15\x02\u019E\u019F\x07\x19\x02\x02\u019F" +
    "1\x03\x02\x02\x02\u01A0\u01A1\x07\x1B\x02\x02\u01A1\u01A2\x07\x10\x02" +
    "\x02\u01A2\u01A7\x054\x1B\x02\u01A3\u01A4\x07\x11\x02\x02\u01A4\u01A6" +
    "\x054\x1B\x02\u01A5\u01A3\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02" +
    "\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AA\x03" +
    "\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AB\x07\x12\x02\x02\u01AB" +
    "3\x03\x02\x02\x02\u01AC\u01AD\x05\xBC_\x02\u01AD\u01AE\x05(\x15\x02\u01AE" +
    "5\x03\x02\x02\x02\u01AF\u01B0\x07\x1C\x02\x02\u01B0\u01B1\x07\x18\x02" +
    "\x02\u01B1\u01B6\x05(\x15\x02\u01B2\u01B3\x07\x11\x02\x02\u01B3\u01B5" +
    "\x05(\x15\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02" +
    "\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B9\x03" +
    "\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B9\u01BA\x07\x19\x02\x02\u01BA" +
    "7\x03\x02\x02\x02\u01BB\u01BF\x05:\x1E\x02\u01BC\u01BF\x05<\x1F\x02\u01BD" +
    "\u01BF\x05> \x02\u01BE\u01BB\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02" +
    "\u01BE\u01BD\x03\x02\x02\x02\u01BF9\x03\x02\x02\x02\u01C0\u01C2\x07\x1D" +
    "\x02\x02\u01C1\u01C3\x05\f\x07\x02\u01C2\u01C1\x03\x02\x02\x02\u01C2\u01C3" +
    "\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5\x05\xC2b\x02" +
    "\u01C5\u01C6\x07\r\x02\x02\u01C6\u01C7\x05v<\x02\u01C7;\x03\x02\x02\x02" +
    "\u01C8\u01CC\x07\x1E\x02\x02\u01C9\u01CA\x05,\x17\x02\u01CA\u01CB\x07" +
    "\x13\x02\x02\u01CB\u01CD\x03\x02\x02\x02\u01CC\u01C9\x03\x02\x02\x02\u01CC" +
    "\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x05\xC2" +
    "b\x02\u01CF=\x03\x02\x02\x02\u01D0\u01D2\x07\x1D\x02\x02\u01D1\u01D3\x05" +
    "\f\x07\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3" +
    "\u01D4\x03\x02\x02\x02\u01D4\u01D5\x07\x1F\x02\x02\u01D5\u01D6\x05\xC0" +
    "a\x02\u01D6\u01DF\x07 \x02\x02\u01D7\u01DC\x05@!\x02\u01D8\u01D9\x07\x11" +
    "\x02\x02\u01D9\u01DB\x05@!\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DE" +
    "\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02" +
    "\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01D7\x03" +
    "\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1" +
    "\u01E4\x07!\x02\x02\u01E2\u01E3\x07\"\x02\x02\u01E3\u01E5\x05(\x15\x02" +
    "\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E6\x03" +
    "\x02\x02\x02\u01E6\u01E9\x07\r\x02\x02\u01E7\u01EA\x05B\"\x02\u01E8\u01EA" +
    "\x07#\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02" +
    "\u01EA?\x03\x02\x02\x02\u01EB\u01EC\x05\xBC_\x02\u01EC\u01ED\x05(\x15" +
    "\x02\u01EDA\x03\x02\x02\x02\u01EE\u01EF\x05v<\x02\u01EFC\x03\x02\x02\x02" +
    "\u01F0\u01F7\x05P)\x02\u01F1\u01F7\x05n8\x02\u01F2\u01F3\x07 \x02\x02" +
    "\u01F3\u01F4\x05v<\x02\u01F4\u01F5\x07!\x02\x02\u01F5\u01F7\x03\x02\x02" +
    "\x02\u01F6\u01F0\x03\x02\x02\x02\u01F6\u01F1\x03\x02\x02\x02\u01F6\u01F2" +
    "\x03\x02\x02\x02\u01F7E\x03\x02\x02\x02\u01F8\u01F9\x05D#\x02\u01F9\u01FA" +
    "\x05H%\x02\u01FAG\x03\x02\x02\x02\u01FB\u01FC\x05\xC2b\x02\u01FCI\x03" +
    "\x02\x02\x02\u01FD\u0200\x05L\'\x02\u01FE\u0200\x05N(\x02\u01FF\u01FD" +
    "\x03\x02\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u0200K\x03\x02\x02\x02\u0201" +
    "\u0202\x07$\x02\x02\u0202\u0203\x05F$\x02\u0203\u0204\x07%\x02\x02\u0204" +
    "\u0205\x05v<\x02\u0205M\x03\x02\x02\x02\u0206\u0207\x07&\x02\x02\u0207" +
    "\u0208\x05F$\x02\u0208\u0209\x07%\x02\x02\u0209\u020A\x05v<\x02\u020A" +
    "O\x03\x02\x02\x02\u020B\u020F\x07\'\x02\x02\u020C\u020D\x05R*\x02\u020D" +
    "\u020E\x07(\x02\x02\u020E\u0210\x03\x02\x02\x02\u020F\u020C\x03\x02\x02" +
    "\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0219" +
    "\x05*\x16\x02\u0212\u0216\x07\r\x02\x02\u0213\u0214\x05T+\x02\u0214\u0215" +
    "\x07)\x02\x02\u0215\u0217\x03\x02\x02\x02\u0216\u0213\x03\x02\x02\x02" +
    "\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u021A\x05" +
    "V,\x02\u0219\u0212\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B" +
    "\x03\x02\x02\x02\u021B\u021C\x07*\x02\x02\u021CQ\x03\x02\x02\x02\u021D" +
    "\u021E\x05n8\x02\u021ES\x03\x02\x02\x02\u021F\u0220\x05r:\x02\u0220U\x03" +
    "\x02\x02\x02\u0221\u0224\x05n8\x02\u0222\u0224\x05v<\x02\u0223\u0221\x03" +
    "\x02\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224W\x03\x02\x02\x02\u0225" +
    "\u0226\x05\xC2b\x02\u0226Y\x03\x02\x02\x02\u0227\u0229\x05\\/\x02\u0228" +
    "\u022A\x05^0\x02\u0229\u0228\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02" +
    "\u022A\u022E\x03\x02\x02\x02\u022B\u022D\x05J&\x02\u022C\u022B\x03\x02" +
    "\x02\x02\u022D\u0230\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E" +
    "\u022F\x03\x02\x02\x02\u022F\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02" +
    "\x02\x02\u0231\u0233\x05b2\x02\u0232\u0231\x03\x02\x02\x02\u0232\u0233" +
    "\x03\x02\x02\x02\u0233\u0235\x03\x02\x02\x02\u0234\u0236\x05d3\x02\u0235" +
    "\u0234\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0238\x03\x02" +
    "\x02\x02\u0237\u0239\x05f4\x02\u0238\u0237\x03\x02\x02\x02\u0238\u0239" +
    "\x03\x02\x02\x02\u0239[\x03\x02\x02\x02\u023A\u023C\x07\x15\x02\x02\u023B" +
    "\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023D\x03\x02" +
    "\x02\x02\u023D\u0242\x05F$\x02\u023E\u023F\x07\x11\x02\x02\u023F\u0241" +
    "\x05F$\x02\u0240\u023E\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242" +
    "\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243]\x03\x02\x02" +
    "\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0246\x07+\x02\x02\u0246\u024B" +
    "\x05`1\x02\u0247\u0248\x07\x11\x02\x02\u0248\u024A\x05`1\x02\u0249\u0247" +
    "\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02" +
    "\u024B\u024C\x03\x02\x02\x02\u024C_\x03\x02\x02\x02\u024D\u024B\x03\x02" +
    "\x02\x02\u024E\u024F\x05\xC2b\x02\u024F\u0250\x07\r\x02\x02\u0250\u0251" +
    "\x05v<\x02\u0251a\x03\x02\x02\x02\u0252\u0253\x07,\x02\x02\u0253\u0254" +
    "\x05v<\x02\u0254c\x03\x02\x02\x02\u0255\u0257\x07-\x02\x02\u0256\u0258" +
    "\t\x03\x02\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02" +
    "\u0258\u0259\x03\x02\x02\x02\u0259\u025A\x05v<\x02\u025Ae\x03\x02\x02" +
    "\x02\u025B\u0266\x070\x02\x02\u025C\u0267\x05h5\x02\u025D\u025E\x071\x02" +
    "\x02\u025E\u0263\x05j6\x02\u025F\u0260\x07\x11\x02\x02\u0260\u0262\x05" +
    "j6\x02\u0261\u025F\x03\x02\x02\x02\u0262\u0265\x03\x02\x02\x02\u0263\u0261" +
    "\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0267\x03\x02\x02\x02" +
    "\u0265\u0263\x03\x02\x02\x02\u0266\u025C\x03\x02\x02\x02\u0266\u025D\x03" +
    "\x02\x02\x02\u0267g\x03\x02\x02\x02\u0268\u0269\t\x04\x02\x02\u0269i\x03" +
    "\x02\x02\x02\u026A\u026C\x05~@\x02\u026B\u026D\x05h5\x02\u026C\u026B\x03" +
    "\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026Dk\x03\x02\x02\x02\u026E" +
    "\u026F\x05X-\x02\u026F\u0270\x07\x13\x02\x02\u0270\u0272\x03\x02\x02\x02" +
    "\u0271\u026E\x03\x02\x02\x02\u0272\u0275\x03\x02\x02\x02\u0273\u0271\x03" +
    "\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0276\x03\x02\x02\x02\u0275" +
    "\u0273\x03\x02\x02\x02\u0276\u0277\x05\xC2b\x02\u0277m\x03\x02\x02\x02" +
    "\u0278\u0279\x05p9\x02\u0279\u027A\x07\x13\x02\x02\u027A\u027C\x03\x02" +
    "\x02\x02\u027B\u0278\x03\x02\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D" +
    "\u027B\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u0280\x03\x02" +
    "\x02\x02\u027F\u027D\x03\x02\x02\x02\u0280\u0281\x05\xBC_\x02\u0281o\x03" +
    "\x02\x02\x02\u0282\u0283\x05\xBC_\x02\u0283q\x03\x02\x02\x02\u0284\u0285" +
    "\b:\x01\x02\u0285\u0286\x05\xBC_\x02\u0286\u0291\x03\x02\x02\x02\u0287" +
    "\u0288\f\x04\x02\x02\u0288\u0289\x07\x13\x02\x02\u0289\u0290\x05\xBC_" +
    "\x02\u028A\u028B\f\x03\x02\x02\u028B\u028C\x07\'\x02\x02\u028C\u028D\x05" +
    "t;\x02\u028D\u028E\x07*\x02\x02\u028E\u0290\x03\x02\x02\x02\u028F\u0287" +
    "\x03\x02\x02\x02\u028F\u028A\x03\x02\x02\x02\u0290\u0293\x03\x02\x02\x02" +
    "\u0291\u028F\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292s\x03\x02" +
    "\x02\x02\u0293\u0291\x03\x02\x02\x02\u0294\u0295\t\x05\x02\x02\u0295u" +
    "\x03\x02\x02\x02\u0296\u0297\b<\x01\x02\u0297\u02B6\x05~@\x02\u0298\u02B6" +
    "\x05P)\x02\u0299\u02B6\x05Z.\x02\u029A\u029B\x07<\x02\x02\u029B\u029C" +
    "\x05v<\x02\u029C\u029D\x07;\x02\x02\u029D\u029E\x05(\x15\x02\u029E\u02B6" +
    "\x03\x02\x02\x02\u029F\u02A0\x077\x02\x02\u02A0\u02B6\x05v<\x0F\u02A1" +
    "\u02A2\x07=\x02\x02\u02A2\u02B6\x05v<\x0E\u02A3\u02A4\x07A\x02\x02\u02A4" +
    "\u02A6\x07)\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02" +
    "\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A8\x05|?\x02\u02A8\u02A9\x07" +
    "?\x02\x02\u02A9\u02AA\x05~@\x02\u02AA\u02AB\x07@\x02\x02\u02AB\u02AC\x05" +
    "~@\x02\u02AC\u02B6\x03\x02\x02\x02\u02AD\u02AE\x07B\x02\x02\u02AE\u02AF" +
    "\x07)\x02\x02\u02AF\u02B0\x05|?\x02\u02B0\u02B1\x07?\x02\x02\u02B1\u02B2" +
    "\x05~@\x02\u02B2\u02B3\x07@\x02\x02\u02B3\u02B4\x05~@\x02\u02B4\u02B6" +
    "\x03\x02\x02\x02\u02B5\u0296\x03\x02\x02\x02\u02B5\u0298\x03\x02\x02\x02" +
    "\u02B5\u0299\x03\x02\x02\x02\u02B5\u029A\x03\x02\x02\x02\u02B5\u029F\x03" +
    "\x02\x02\x02\u02B5\u02A1\x03\x02\x02\x02\u02B5\u02A5\x03\x02\x02\x02\u02B5" +
    "\u02AD\x03\x02\x02\x02\u02B6\u02E7\x03\x02\x02\x02\u02B7\u02B8\f\n\x02" +
    "\x02\u02B8\u02B9\t\x06\x02\x02\u02B9\u02E6\x05v<\v\u02BA\u02BB\f\t\x02" +
    "\x02\u02BB\u02BC\x05\x8EH\x02\u02BC\u02BD\x05v<\n\u02BD\u02E6\x03\x02" +
    "\x02\x02\u02BE\u02BF\f\b\x02\x02\u02BF\u02C0\t\x07\x02\x02\u02C0\u02E6" +
    "\x05v<\t\u02C1\u02C2\f\x07\x02\x02\u02C2\u02C4\t\b\x02\x02\u02C3\u02C5" +
    "\x05\x82B\x02\u02C4\u02C3\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02" +
    "\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02E6\x05v<\b\u02C7\u02C8\f\x06\x02" +
    "\x02\u02C8\u02C9\x07@\x02\x02\u02C9\u02E6\x05v<\x07\u02CA\u02CB\f\x05" +
    "\x02\x02\u02CB\u02CC\t\t\x02\x02\u02CC\u02E6\x05v<\x06\u02CD\u02CE\f\x04" +
    "\x02\x02\u02CE\u02CF\x07L\x02\x02\u02CF\u02E6\x05v<\x05\u02D0\u02D1\f" +
    "\x03\x02\x02\u02D1\u02D2\t\n\x02\x02\u02D2\u02E6\x05v<\x04\u02D3\u02D4" +
    "\f\x12\x02\x02\u02D4\u02D6\x076\x02\x02\u02D5\u02D7\x077\x02\x02\u02D6" +
    "\u02D5\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02" +
    "\x02\x02\u02D8\u02E6\t\v\x02\x02\u02D9\u02DA\f\x11\x02\x02\u02DA\u02DB" +
    "\t\f\x02\x02\u02DB\u02E6\x05(\x15\x02\u02DC\u02DE\f\r\x02\x02\u02DD\u02DF" +
    "\x07>\x02\x02\u02DE\u02DD\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02" +
    "\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E1\x07?\x02\x02\u02E1\u02E2\x05" +
    "~@\x02\u02E2\u02E3\x07@\x02\x02\u02E3\u02E4\x05~@\x02\u02E4\u02E6\x03" +
    "\x02\x02\x02\u02E5\u02B7\x03\x02\x02\x02\u02E5\u02BA\x03\x02\x02\x02\u02E5" +
    "\u02BE\x03\x02\x02\x02\u02E5\u02C1\x03\x02\x02\x02\u02E5\u02C7\x03\x02" +
    "\x02\x02\u02E5\u02CA\x03\x02\x02\x02\u02E5\u02CD\x03\x02\x02\x02\u02E5" +
    "\u02D0\x03\x02\x02\x02\u02E5\u02D3\x03\x02\x02\x02\u02E5\u02D9\x03\x02" +
    "\x02\x02\u02E5\u02DC\x03\x02\x02\x02\u02E6\u02E9\x03\x02\x02\x02\u02E7" +
    "\u02E5\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8w\x03\x02\x02" +
    "\x02\u02E9\u02E7\x03\x02\x02\x02\u02EA\u02EB\t\r\x02\x02\u02EBy\x03\x02" +
    "\x02\x02\u02EC\u02F1\x05x=\x02\u02ED\u02F1\x07Y\x02\x02\u02EE\u02F1\x07" +
    "Z\x02\x02\u02EF\u02F1\x07[\x02\x02\u02F0\u02EC\x03\x02\x02\x02\u02F0\u02ED" +
    "\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F0\u02EF\x03\x02\x02\x02" +
    "\u02F1{\x03\x02\x02\x02\u02F2\u02F3\t\x0E\x02\x02\u02F3}\x03\x02\x02\x02" +
    "\u02F4\u02F5\b@\x01\x02\u02F5\u0343\x05\x90I\x02\u02F6\u02F7\x07d\x02" +
    "\x02\u02F7\u02F8\x05v<\x02\u02F8\u02FB\x07e\x02\x02\u02F9\u02FC\x05(\x15" +
    "\x02\u02FA\u02FC\x05\xCAf\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB\u02FA" +
    "\x03\x02\x02\x02\u02FC\u0343\x03\x02\x02\x02\u02FD\u02FE\t\x0F\x02\x02" +
    "\u02FE\u0343\x05~@\x14\u02FF\u0300\t\x10\x02\x02\u0300\u0301\x07j\x02" +
    "\x02\u0301\u0343\x05~@\x13\u0302\u0303\x05z>\x02\u0303\u0304\x07\x15\x02" +
    "\x02\u0304\u0305\x05~@\x12\u0305\u0343\x03\x02\x02\x02\u0306\u0307\x07" +
    "A\x02\x02\u0307\u0308\x07)\x02\x02\u0308\u0309\x05|?\x02\u0309\u030A\x07" +
    "j\x02\x02\u030A\u030B\x05~@\x11\u030B\u0343\x03\x02\x02\x02\u030C\u030D" +
    "\x07B\x02\x02\u030D\u030E\x07)\x02\x02\u030E\u030F\x05|?\x02\u030F\u0310" +
    "\x07j\x02\x02\u0310\u0311\x05~@\x10\u0311\u0343\x03\x02\x02\x02\u0312" +
    "\u0313\x07k\x02\x02\u0313\u0314\x07j\x02\x02\u0314\u0343\x05~@\x0F\u0315" +
    "\u0316\x07l\x02\x02\u0316\u0317\x07j\x02\x02\u0317\u0343\x05~@\x0E\u0318" +
    "\u0319\x07m\x02\x02\u0319\u031A\x07j\x02\x02\u031A\u0343\x05~@\r\u031B" +
    "\u031C\x07n\x02\x02\u031C\u031D\x07\x15\x02\x02\u031D\u0343\x05~@\f\u031E" +
    "\u031F\x07o\x02\x02\u031F\u0320\x07\x15\x02\x02\u0320\u0343\x05~@\v\u0321" +
    "\u0322\t\x11\x02\x02\u0322\u0343\x05*\x16\x02\u0323\u0324\x07x\x02\x02" +
    "\u0324\u0325\x05v<\x02\u0325\u0326\x07y\x02\x02\u0326\u0327\x05v<\x02" +
    "\u0327\u0328\x07z\x02\x02\u0328\u0329\x05v<\x02\u0329\u0343\x03\x02\x02" +
    "\x02\u032A\u032C\x07{\x02\x02\u032B\u032D\x05v<\x02\u032C\u032B\x03\x02" +
    "\x02\x02\u032C\u032D\x03\x02\x02\x02\u032D\u032F\x03\x02\x02\x02\u032E" +
    "\u0330\x05\x80A\x02\u032F\u032E\x03\x02\x02\x02\u0330\u0331\x03\x02\x02" +
    "\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0333" +
    "\x03\x02\x02\x02\u0333\u0334\x07z\x02\x02\u0334\u0335\x05v<\x02\u0335" +
    "\u0336\x07i\x02\x02\u0336\u0343\x03\x02\x02\x02\u0337\u0338\t\x12\x02" +
    "\x02\u0338\u0343\x05v<\x02\u0339\u033A\t\x13\x02\x02\u033A\u0340\x05v" +
    "<\x02\u033B\u033E\x07\x7F\x02\x02\u033C\u033F\x05x=\x02\u033D\u033F\x05" +
    "v<\x02\u033E\u033C\x03\x02\x02\x02\u033E\u033D\x03\x02\x02\x02\u033F\u0341" +
    "\x03\x02\x02\x02\u0340\u033B\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02" +
    "\u0341\u0343\x03\x02\x02\x02\u0342\u02F4\x03\x02\x02\x02\u0342\u02F6\x03" +
    "\x02\x02\x02\u0342\u02FD\x03\x02\x02\x02\u0342\u02FF\x03\x02\x02\x02\u0342" +
    "\u0302\x03\x02\x02\x02\u0342\u0306\x03\x02\x02\x02\u0342\u030C\x03\x02" +
    "\x02\x02\u0342\u0312\x03\x02\x02\x02\u0342\u0315\x03\x02\x02\x02\u0342" +
    "\u0318\x03\x02\x02\x02\u0342\u031B\x03\x02\x02\x02\u0342\u031E\x03\x02" +
    "\x02\x02\u0342\u0321\x03\x02\x02\x02\u0342\u0323\x03\x02\x02\x02\u0342" +
    "\u032A\x03\x02\x02\x02\u0342\u0337\x03\x02\x02\x02\u0342\u0339\x03\x02" +
    "\x02\x02\u0343\u0357\x03\x02\x02\x02\u0344\u0345\f\t\x02\x02\u0345\u0346" +
    "\x07r\x02\x02\u0346\u0356\x05~@\n\u0347\u0348\f\b\x02\x02\u0348\u0349" +
    "\t\x14\x02\x02\u0349\u0356\x05~@\t\u034A\u034B\f\x07\x02\x02\u034B\u034C" +
    "\t\x15\x02\x02\u034C\u0356\x05~@\b\u034D\u034E\f\x17\x02\x02\u034E\u034F" +
    "\x07\x13\x02\x02\u034F\u0356\x05\x92J\x02\u0350\u0351\f\x16\x02\x02\u0351" +
    "\u0352\x07\'\x02\x02\u0352\u0353\x05v<\x02\u0353\u0354\x07*\x02\x02\u0354" +
    "\u0356\x03\x02\x02\x02\u0355\u0344\x03\x02\x02\x02\u0355\u0347\x03\x02" +
    "\x02\x02\u0355\u034A\x03\x02\x02\x02\u0355\u034D\x03\x02\x02\x02\u0355" +
    "\u0350\x03\x02\x02\x02\u0356\u0359\x03\x02\x02\x02\u0357\u0355\x03\x02" +
    "\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\x7F\x03\x02\x02\x02\u0359\u0357" +
    "\x03\x02\x02\x02\u035A\u035B\x07\x80\x02\x02\u035B\u035C\x05v<\x02\u035C" +
    "\u035D\x07y\x02\x02\u035D\u035E\x05v<\x02\u035E\x81\x03\x02\x02\x02\u035F" +
    "\u0360\x05x=\x02\u0360\u0361\x07j\x02\x02\u0361\x83\x03\x02\x02\x02\u0362" +
    "\u0363\t\x16\x02\x02\u0363\x85\x03\x02\x02\x02\u0364\u0365\t\x17\x02\x02" +
    "\u0365\x87\x03\x02\x02\x02\u0366\u0367\t\x18\x02\x02\u0367\x89\x03\x02" +
    "\x02\x02\u0368\u036A\x05\xC8e\x02\u0369\u036B\x05\x86D\x02\u036A\u0369" +
    "\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B\u0370\x03\x02\x02\x02" +
    "\u036C\u036D\x05\x88E\x02\u036D\u036E\x05\xC8e\x02\u036E\u0370\x03\x02" +
    "\x02\x02\u036F\u0368\x03\x02\x02\x02\u036F\u036C\x03\x02\x02\x02\u0370" +
    "\x8B\x03\x02\x02\x02\u0371\u0373\x07\x87\x02\x02\u0372\u0371\x03\x02\x02" +
    "\x02\u0372\u0373\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u037A" +
    "\t\x19\x02\x02\u0375\u0377\t\x19\x02\x02\u0376\u0378\x07\x8A\x02\x02\u0377" +
    "\u0376\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u037A\x03\x02" +
    "\x02\x02\u0379\u0372\x03\x02\x02\x02\u0379\u0375\x03\x02\x02\x02\u037A" +
    "\x8D\x03\x02\x02\x02\u037B\u037D\t\x1A\x02\x02\u037C\u037B\x03\x02\x02" +
    "\x02\u037C\u037D\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u0380" +
    "\x07\x8E\x02\x02\u037F\u0381\x05x=\x02\u0380\u037F\x03\x02\x02\x02\u0380" +
    "\u0381\x03\x02\x02\x02\u0381\u0384\x03\x02\x02\x02\u0382\u0385\x05\x84" +
    "C\x02\u0383\u0385\x07;\x02\x02\u0384\u0382\x03\x02\x02\x02\u0384\u0383" +
    "\x03\x02\x02\x02\u0385\u0387\x03\x02\x02\x02\u0386\u0388\t\x10\x02\x02" +
    "\u0387\u0386\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u03CD\x03" +
    "\x02\x02\x02\u0389\u038B\x07>\x02\x02\u038A\u0389\x03\x02\x02\x02\u038A" +
    "\u038B\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u038E\x07\x8F" +
    "\x02\x02\u038D\u038F\x05\x82B\x02\u038E\u038D\x03\x02\x02\x02\u038E\u038F" +
    "\x03\x02\x02\x02\u038F\u0391\x03\x02\x02\x02\u0390\u0392\t\x10\x02\x02" +
    "\u0391\u0390\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u03CD\x03" +
    "\x02\x02\x02\u0393\u0395\t\x1A\x02\x02\u0394\u0393\x03\x02\x02\x02\u0394" +
    "\u0395\x03\x02\x02\x02\u0395\u0397\x03\x02\x02\x02\u0396\u0398\x07>\x02" +
    "\x02\u0397\u0396\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u0399" +
    "\x03\x02\x02\x02\u0399\u039B\t\x1B\x02\x02\u039A\u039C\x05\x82B\x02\u039B" +
    "\u039A\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u03CD\x03\x02" +
    "\x02\x02\u039D\u039F\t\x1A\x02\x02\u039E\u039D\x03\x02\x02\x02\u039E\u039F" +
    "\x03\x02\x02\x02\u039F\u03A1\x03\x02\x02\x02\u03A0\u03A2\x05\x8AF\x02" +
    "\u03A1\u03A0\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A3\x03" +
    "\x02\x02\x02\u03A3\u03A5\x05\x8CG\x02\u03A4\u03A6\x05\x82B\x02\u03A5\u03A4" +
    "\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03A8\x03\x02\x02\x02" +
    "\u03A7\u03A9\t\x10\x02\x02\u03A8\u03A7\x03\x02\x02\x02\u03A8\u03A9\x03" +
    "\x02\x02\x02\u03A9\u03CD\x03\x02\x02\x02\u03AA\u03AC\t\x1A\x02\x02\u03AB" +
    "\u03AA\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AE\x03\x02" +
    "\x02\x02\u03AD\u03AF\x07>\x02\x02\u03AE\u03AD\x03\x02\x02\x02\u03AE\u03AF" +
    "\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B1\x07\x92\x02\x02" +
    "\u03B1\u03B2\x05\xC8e\x02\u03B2\u03B4\x07j\x02\x02\u03B3\u03B5\t\x10\x02" +
    "\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03CD" +
    "\x03\x02\x02\x02\u03B6\u03B8\x07\x93\x02\x02\u03B7\u03B9\t\x19\x02\x02" +
    "\u03B8\u03B7\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BB\x03" +
    "\x02\x02\x02\u03BA\u03BC\x05\x82B\x02\u03BB\u03BA\x03\x02\x02\x02\u03BB" +
    "\u03BC\x03\x02\x02\x02\u03BC\u03CD\x03\x02\x02\x02\u03BD\u03BF\x07\x94" +
    "\x02\x02\u03BE\u03C0\t\x19\x02\x02\u03BF\u03BE\x03\x02\x02\x02\u03BF\u03C0" +
    "\x03\x02\x02\x02\u03C0\u03C2\x03\x02\x02\x02\u03C1\u03C3\x05\x82B\x02" +
    "\u03C2\u03C1\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03CD\x03" +
    "\x02\x02\x02\u03C4\u03C6\x07\x8B\x02\x02\u03C5\u03C7\x05\x82B\x02\u03C6" +
    "\u03C5\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03CD\x03\x02" +
    "\x02\x02\u03C8\u03CA\x07\x8C\x02\x02\u03C9\u03CB\x05\x82B\x02\u03CA\u03C9" +
    "\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03CD\x03\x02\x02\x02" +
    "\u03CC\u037C\x03\x02\x02\x02\u03CC\u038A\x03\x02\x02\x02\u03CC\u0394\x03" +
    "\x02\x02\x02\u03CC\u039E\x03\x02\x02\x02\u03CC\u03AB\x03\x02\x02\x02\u03CC" +
    "\u03B6\x03\x02\x02\x02\u03CC\u03BD\x03\x02\x02\x02\u03CC\u03C4\x03\x02" +
    "\x02\x02\u03CC\u03C8\x03\x02\x02\x02\u03CD\x8F\x03\x02\x02\x02\u03CE\u03DC" +
    "\x05\x96L\x02\u03CF\u03DC\x05\x9CO\x02\u03D0\u03DC\x05\xC4c\x02\u03D1" +
    "\u03DC\x05\x9EP\x02\u03D2\u03DC\x05\xA0Q\x02\u03D3\u03DC\x05\xA4S\x02" +
    "\u03D4\u03DC\x05\xA8U\x02\u03D5\u03DC\x05\xACW\x02\u03D6\u03DC\x05\xAE" +
    "X\x02\u03D7\u03D8\x07 \x02\x02\u03D8\u03D9\x05v<\x02\u03D9\u03DA\x07!" +
    "\x02\x02\u03DA\u03DC\x03\x02\x02\x02\u03DB\u03CE\x03\x02\x02\x02\u03DB" +
    "\u03CF\x03\x02\x02\x02\u03DB\u03D0\x03\x02\x02\x02\u03DB\u03D1\x03\x02" +
    "\x02\x02\u03DB\u03D2\x03\x02\x02\x02\u03DB\u03D3\x03\x02\x02\x02\u03DB" +
    "\u03D4\x03\x02\x02\x02\u03DB\u03D5\x03\x02\x02\x02\u03DB\u03D6\x03\x02" +
    "\x02\x02\u03DB\u03D7\x03\x02\x02\x02\u03DC\x91\x03\x02\x02\x02\u03DD\u03E0" +
    "\x05\xBC_\x02\u03DE\u03E0\x05\x94K\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF" +
    "\u03DE\x03\x02\x02\x02\u03E0\x93\x03\x02\x02\x02\u03E1\u03E2\x05\xC0a" +
    "\x02\u03E2\u03E4\x07 \x02\x02\u03E3\u03E5\x05\xC6d\x02\u03E4\u03E3\x03" +
    "\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6" +
    "\u03E7\x07!\x02\x02\u03E7\x95\x03\x02\x02\x02\u03E8\u03EE\x05\xBC_\x02" +
    "\u03E9\u03EE\x05\x98M\x02\u03EA\u03EE\x07\x95\x02\x02\u03EB\u03EE\x07" +
    "\x96\x02\x02\u03EC\u03EE\x07\x97\x02\x02\u03ED\u03E8\x03\x02\x02\x02\u03ED" +
    "\u03E9\x03\x02\x02\x02\u03ED\u03EA\x03\x02\x02\x02\u03ED\u03EB\x03\x02" +
    "\x02\x02\u03ED\u03EC\x03\x02\x02\x02\u03EE\x97\x03\x02\x02\x02\u03EF\u03F0" +
    "\x05\xBC_\x02\u03F0\u03F2\x07 \x02\x02\u03F1\u03F3\x05\xC6d\x02\u03F2" +
    "\u03F1\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3\u03F4\x03\x02" +
    "\x02\x02\u03F4\u03F5\x07!\x02\x02\u03F5\x99\x03\x02\x02\x02\u03F6\u03F7" +
    "\x05\xC8e\x02\u03F7\u03F8\x07\r\x02\x02\u03F8\u03F9\x05\xC8e\x02\u03F9" +
    "\x9B\x03\x02\x02\x02\u03FA\u0403\t\x1C\x02\x02\u03FB\u0403\x078\x02\x02" +
    "\u03FC\u0403\x07\xA1\x02\x02\u03FD\u0403\x07\xA2\x02\x02\u03FE\u0403\x07" +
    "\x9D\x02\x02\u03FF\u0403\x07\x9E\x02\x02\u0400\u0403\x05\xC8e\x02\u0401" +
    "\u0403\x05\x9AN\x02\u0402\u03FA\x03\x02\x02\x02\u0402\u03FB\x03\x02\x02" +
    "\x02\u0402\u03FC\x03\x02\x02\x02\u0402\u03FD\x03\x02\x02\x02\u0402\u03FE" +
    "\x03\x02\x02\x02\u0402\u03FF\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02" +
    "\u0402\u0401\x03\x02\x02\x02\u0403\x9D\x03\x02\x02\x02\u0404\u0405\x07" +
    "\x1A\x02\x02\u0405\u0406\t\x1D\x02\x02\u0406\u0407\x05v<\x02\u0407\u0408" +
    "\x07\x11\x02\x02\u0408\u0409\x05v<\x02\u0409\u040A\t\x1E\x02\x02\u040A" +
    "\x9F\x03\x02\x02\x02\u040B\u040D\x07\x1B\x02\x02\u040C\u040B\x03\x02\x02" +
    "\x02\u040C\u040D\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E\u0418" +
    "\x07\x10\x02\x02\u040F\u0419\x07\r\x02\x02\u0410\u0415\x05\xA2R\x02\u0411" +
    "\u0412\x07\x11\x02\x02\u0412\u0414\x05\xA2R\x02\u0413\u0411\x03\x02\x02" +
    "\x02\u0414\u0417\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02\u0415\u0416" +
    "\x03\x02\x02\x02\u0416\u0419\x03\x02\x02\x02\u0417\u0415\x03\x02\x02\x02" +
    "\u0418\u040F\x03\x02\x02\x02\u0418\u0410\x03\x02\x02\x02\u0419\u041A\x03" +
    "\x02\x02\x02\u041A\u041B\x07\x12\x02\x02\u041B\xA1\x03\x02\x02\x02\u041C" +
    "\u041D\x05\xBC_\x02\u041D\u041E\x07\r\x02\x02\u041E\u041F\x05v<\x02\u041F" +
    "\xA3\x03\x02\x02\x02\u0420\u0421\x05*\x16\x02\u0421\u042B\x07\x10\x02" +
    "\x02\u0422\u042C\x07\r\x02\x02\u0423\u0428\x05\xA6T\x02\u0424\u0425\x07" +
    "\x11\x02\x02\u0425\u0427\x05\xA6T\x02\u0426\u0424\x03\x02\x02\x02\u0427" +
    "\u042A\x03\x02\x02\x02\u0428\u0426\x03\x02\x02\x02\u0428\u0429\x03\x02" +
    "\x02\x02\u0429\u042C\x03\x02\x02\x02\u042A\u0428\x03\x02\x02\x02\u042B" +
    "\u0422\x03\x02\x02\x02\u042B\u0423\x03\x02\x02\x02\u042C\u042D\x03\x02" +
    "\x02\x02\u042D\u042E\x07\x12\x02\x02\u042E\xA5\x03\x02\x02\x02\u042F\u0430" +
    "\x05\xBC_\x02\u0430\u0431\x07\r\x02\x02\u0431\u0432\x05v<\x02\u0432\xA7" +
    "\x03\x02\x02\x02\u0433\u0438\x07\x17\x02\x02\u0434\u0435\x07\x18\x02\x02" +
    "\u0435\u0436\x05(\x15\x02\u0436\u0437\x07\x19\x02\x02\u0437\u0439\x03" +
    "\x02\x02\x02\u0438\u0434\x03\x02";
cqlParser._serializedATNSegment2 = "\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043B\x03\x02\x02\x02\u043A" +
    "\u0433\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\u043C\x03\x02" +
    "\x02\x02\u043C\u0445\x07\x10\x02\x02\u043D\u0442\x05v<\x02\u043E\u043F" +
    "\x07\x11\x02\x02\u043F\u0441\x05v<\x02\u0440\u043E\x03\x02\x02\x02\u0441" +
    "\u0444\x03\x02\x02\x02\u0442\u0440\x03\x02\x02\x02\u0442\u0443\x03\x02" +
    "\x02\x02\u0443\u0446\x03\x02\x02\x02\u0444\u0442\x03\x02\x02\x02\u0445" +
    "\u043D\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0447\x03\x02" +
    "\x02\x02\u0447\u0448\x07\x12\x02\x02\u0448\xA9\x03\x02\x02\x02\u0449\u044A" +
    "\x07\x98\x02\x02\u044A\u044B\x07\xA1\x02\x02\u044B\xAB\x03\x02\x02\x02" +
    "\u044C\u044D\x07\x99\x02\x02\u044D\u044E\x07\xA1\x02\x02\u044E\u044F\x07" +
    "\x15\x02\x02\u044F\u0451\x05\x16\f\x02\u0450\u0452\x05\xAAV\x02\u0451" +
    "\u0450\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452\xAD\x03\x02\x02" +
    "\x02\u0453\u0454\x07\x9A\x02\x02\u0454\u0455\x07\x10\x02\x02\u0455\u045A" +
    "\x05\xACW\x02\u0456\u0457\x07\x11\x02\x02\u0457\u0459\x05\xACW\x02\u0458" +
    "\u0456\x03\x02\x02\x02\u0459\u045C\x03\x02\x02\x02\u045A\u0458\x03\x02" +
    "\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B\u045D\x03\x02\x02\x02\u045C" +
    "\u045A\x03\x02\x02\x02\u045D\u045F\x07\x12\x02\x02\u045E\u0460\x05\xAA" +
    "V\x02\u045F\u045E\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460\xAF" +
    "\x03\x02\x02\x02\u0461\u0462\t\x1F\x02\x02\u0462\xB1\x03\x02\x02\x02\u0463" +
    "\u0464\t \x02\x02\u0464\xB3\x03\x02\x02\x02\u0465\u0466\t!\x02\x02\u0466" +
    "\xB5\x03\x02\x02\x02\u0467\u0468\t\"\x02\x02\u0468\xB7\x03\x02\x02\x02" +
    "\u0469\u046A\t#\x02\x02\u046A\xB9\x03\x02\x02\x02\u046B\u046C\t$\x02\x02" +
    "\u046C\xBB\x03\x02\x02\x02\u046D\u0470\x05\xC2b\x02\u046E\u0470\x05\xB4" +
    "[\x02\u046F\u046D\x03\x02\x02\x02\u046F\u046E\x03\x02\x02\x02\u0470\xBD" +
    "\x03\x02\x02\x02\u0471\u0474\x05\xBC_\x02\u0472\u0474\x05\xBA^\x02\u0473" +
    "\u0471\x03\x02\x02\x02\u0473\u0472\x03\x02\x02\x02\u0474\xBF\x03\x02\x02" +
    "\x02\u0475\u0478\x05\xC2b\x02\u0476\u0478\x05\xB8]\x02\u0477\u0475\x03" +
    "\x02\x02\x02\u0477\u0476\x03\x02\x02\x02\u0478\xC1\x03\x02\x02\x02\u0479" +
    "\u047A\t%\x02\x02\u047A\xC3\x03\x02\x02\x02\u047B\u047E\x07\x9B\x02\x02" +
    "\u047C\u047F\x05\xC2b\x02\u047D\u047F\x07\xA1\x02\x02\u047E\u047C\x03" +
    "\x02\x02\x02\u047E\u047D\x03\x02\x02\x02\u047F\xC5\x03\x02\x02\x02\u0480" +
    "\u0485\x05v<\x02\u0481\u0482\x07\x11\x02\x02\u0482\u0484\x05v<\x02\u0483" +
    "\u0481\x03\x02\x02\x02\u0484\u0487\x03\x02\x02\x02\u0485\u0483\x03\x02" +
    "\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486\xC7\x03\x02\x02\x02\u0487\u0485" +
    "\x03\x02\x02\x02\u0488\u048A\x07\xA2\x02\x02\u0489\u048B\x05\xCAf\x02" +
    "\u048A\u0489\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B\xC9\x03" +
    "\x02\x02\x02\u048C\u0490\x05x=\x02\u048D\u0490\x05|?\x02\u048E\u0490\x07" +
    "\xA1\x02\x02\u048F\u048C\x03\x02\x02\x02\u048F\u048D\x03\x02\x02\x02\u048F" +
    "\u048E\x03\x02\x02\x02\u0490\xCB\x03\x02\x02\x02\x87\xCD\xD2\xD8\xDE\xE4" +
    "\xEA\xF0\xF6\xFC\u0105\u010B\u0111\u0115\u011C\u0121\u0125\u0128\u0130" +
    "\u0133\u013B\u013E\u0147\u014F\u0156\u015F\u0162\u016D\u0172\u0177\u0188" +
    "\u018F\u01A7\u01B6\u01BE\u01C2\u01CC\u01D2\u01DC\u01DF\u01E4\u01E9\u01F6" +
    "\u01FF\u020F\u0216\u0219\u0223\u0229\u022E\u0232\u0235\u0238\u023B\u0242" +
    "\u024B\u0257\u0263\u0266\u026C\u0273\u027D\u028F\u0291\u02A5\u02B5\u02C4" +
    "\u02D6\u02DE\u02E5\u02E7\u02F0\u02FB\u032C\u0331\u033E\u0340\u0342\u0355" +
    "\u0357\u036A\u036F\u0372\u0377\u0379\u037C\u0380\u0384\u0387\u038A\u038E" +
    "\u0391\u0394\u0397\u039B\u039E\u03A1\u03A5\u03A8\u03AB\u03AE\u03B4\u03B8" +
    "\u03BB\u03BF\u03C2\u03C6\u03CA\u03CC\u03DB\u03DF\u03E4\u03ED\u03F2\u0402" +
    "\u040C\u0415\u0418\u0428\u042B\u0438\u043A\u0442\u0445\u0451\u045A\u045F" +
    "\u046F\u0473\u0477\u047E\u0485\u048A\u048F";
cqlParser._serializedATN = Utils.join([
    cqlParser._serializedATNSegment0,
    cqlParser._serializedATNSegment1,
    cqlParser._serializedATNSegment2,
], "");
class LibraryContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(cqlParser.EOF, 0); }
    libraryDefinition() {
        return this.tryGetRuleContext(0, LibraryDefinitionContext);
    }
    usingDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(UsingDefinitionContext);
        }
        else {
            return this.getRuleContext(i, UsingDefinitionContext);
        }
    }
    includeDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(IncludeDefinitionContext);
        }
        else {
            return this.getRuleContext(i, IncludeDefinitionContext);
        }
    }
    codesystemDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(CodesystemDefinitionContext);
        }
        else {
            return this.getRuleContext(i, CodesystemDefinitionContext);
        }
    }
    valuesetDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValuesetDefinitionContext);
        }
        else {
            return this.getRuleContext(i, ValuesetDefinitionContext);
        }
    }
    codeDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(CodeDefinitionContext);
        }
        else {
            return this.getRuleContext(i, CodeDefinitionContext);
        }
    }
    conceptDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConceptDefinitionContext);
        }
        else {
            return this.getRuleContext(i, ConceptDefinitionContext);
        }
    }
    parameterDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterDefinitionContext);
        }
        else {
            return this.getRuleContext(i, ParameterDefinitionContext);
        }
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_library; }
    // @Override
    enterRule(listener) {
        if (listener.enterLibrary) {
            listener.enterLibrary(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLibrary) {
            listener.exitLibrary(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLibrary) {
            return visitor.visitLibrary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LibraryContext = LibraryContext;
class LibraryDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    qualifiedIdentifier() {
        return this.getRuleContext(0, QualifiedIdentifierContext);
    }
    versionSpecifier() {
        return this.tryGetRuleContext(0, VersionSpecifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_libraryDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterLibraryDefinition) {
            listener.enterLibraryDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLibraryDefinition) {
            listener.exitLibraryDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLibraryDefinition) {
            return visitor.visitLibraryDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LibraryDefinitionContext = LibraryDefinitionContext;
class UsingDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    modelIdentifier() {
        return this.getRuleContext(0, ModelIdentifierContext);
    }
    versionSpecifier() {
        return this.tryGetRuleContext(0, VersionSpecifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_usingDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterUsingDefinition) {
            listener.enterUsingDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUsingDefinition) {
            listener.exitUsingDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUsingDefinition) {
            return visitor.visitUsingDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UsingDefinitionContext = UsingDefinitionContext;
class IncludeDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    qualifiedIdentifier() {
        return this.getRuleContext(0, QualifiedIdentifierContext);
    }
    versionSpecifier() {
        return this.tryGetRuleContext(0, VersionSpecifierContext);
    }
    localIdentifier() {
        return this.tryGetRuleContext(0, LocalIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_includeDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterIncludeDefinition) {
            listener.enterIncludeDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIncludeDefinition) {
            listener.exitIncludeDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIncludeDefinition) {
            return visitor.visitIncludeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IncludeDefinitionContext = IncludeDefinitionContext;
class LocalIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_localIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterLocalIdentifier) {
            listener.enterLocalIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLocalIdentifier) {
            listener.exitLocalIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLocalIdentifier) {
            return visitor.visitLocalIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LocalIdentifierContext = LocalIdentifierContext;
class AccessModifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_accessModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterAccessModifier) {
            listener.enterAccessModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAccessModifier) {
            listener.exitAccessModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAccessModifier) {
            return visitor.visitAccessModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AccessModifierContext = AccessModifierContext;
class ParameterDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    accessModifier() {
        return this.tryGetRuleContext(0, AccessModifierContext);
    }
    typeSpecifier() {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_parameterDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterParameterDefinition) {
            listener.enterParameterDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParameterDefinition) {
            listener.exitParameterDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterDefinition) {
            return visitor.visitParameterDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterDefinitionContext = ParameterDefinitionContext;
class CodesystemDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    codesystemId() {
        return this.getRuleContext(0, CodesystemIdContext);
    }
    accessModifier() {
        return this.tryGetRuleContext(0, AccessModifierContext);
    }
    versionSpecifier() {
        return this.tryGetRuleContext(0, VersionSpecifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_codesystemDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterCodesystemDefinition) {
            listener.enterCodesystemDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCodesystemDefinition) {
            listener.exitCodesystemDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCodesystemDefinition) {
            return visitor.visitCodesystemDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CodesystemDefinitionContext = CodesystemDefinitionContext;
class ValuesetDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    valuesetId() {
        return this.getRuleContext(0, ValuesetIdContext);
    }
    accessModifier() {
        return this.tryGetRuleContext(0, AccessModifierContext);
    }
    versionSpecifier() {
        return this.tryGetRuleContext(0, VersionSpecifierContext);
    }
    codesystems() {
        return this.tryGetRuleContext(0, CodesystemsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_valuesetDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterValuesetDefinition) {
            listener.enterValuesetDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValuesetDefinition) {
            listener.exitValuesetDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValuesetDefinition) {
            return visitor.visitValuesetDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValuesetDefinitionContext = ValuesetDefinitionContext;
class CodesystemsContext extends ParserRuleContext_1.ParserRuleContext {
    codesystemIdentifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(CodesystemIdentifierContext);
        }
        else {
            return this.getRuleContext(i, CodesystemIdentifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_codesystems; }
    // @Override
    enterRule(listener) {
        if (listener.enterCodesystems) {
            listener.enterCodesystems(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCodesystems) {
            listener.exitCodesystems(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCodesystems) {
            return visitor.visitCodesystems(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CodesystemsContext = CodesystemsContext;
class CodesystemIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    libraryIdentifier() {
        return this.tryGetRuleContext(0, LibraryIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_codesystemIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterCodesystemIdentifier) {
            listener.enterCodesystemIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCodesystemIdentifier) {
            listener.exitCodesystemIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCodesystemIdentifier) {
            return visitor.visitCodesystemIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CodesystemIdentifierContext = CodesystemIdentifierContext;
class LibraryIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_libraryIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterLibraryIdentifier) {
            listener.enterLibraryIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLibraryIdentifier) {
            listener.exitLibraryIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLibraryIdentifier) {
            return visitor.visitLibraryIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LibraryIdentifierContext = LibraryIdentifierContext;
class CodeDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    codeId() {
        return this.getRuleContext(0, CodeIdContext);
    }
    codesystemIdentifier() {
        return this.getRuleContext(0, CodesystemIdentifierContext);
    }
    accessModifier() {
        return this.tryGetRuleContext(0, AccessModifierContext);
    }
    displayClause() {
        return this.tryGetRuleContext(0, DisplayClauseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_codeDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterCodeDefinition) {
            listener.enterCodeDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCodeDefinition) {
            listener.exitCodeDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCodeDefinition) {
            return visitor.visitCodeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CodeDefinitionContext = CodeDefinitionContext;
class ConceptDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    codeIdentifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(CodeIdentifierContext);
        }
        else {
            return this.getRuleContext(i, CodeIdentifierContext);
        }
    }
    accessModifier() {
        return this.tryGetRuleContext(0, AccessModifierContext);
    }
    displayClause() {
        return this.tryGetRuleContext(0, DisplayClauseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_conceptDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterConceptDefinition) {
            listener.enterConceptDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConceptDefinition) {
            listener.exitConceptDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConceptDefinition) {
            return visitor.visitConceptDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConceptDefinitionContext = ConceptDefinitionContext;
class CodeIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    libraryIdentifier() {
        return this.tryGetRuleContext(0, LibraryIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_codeIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterCodeIdentifier) {
            listener.enterCodeIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCodeIdentifier) {
            listener.exitCodeIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCodeIdentifier) {
            return visitor.visitCodeIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CodeIdentifierContext = CodeIdentifierContext;
class CodesystemIdContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(cqlParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_codesystemId; }
    // @Override
    enterRule(listener) {
        if (listener.enterCodesystemId) {
            listener.enterCodesystemId(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCodesystemId) {
            listener.exitCodesystemId(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCodesystemId) {
            return visitor.visitCodesystemId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CodesystemIdContext = CodesystemIdContext;
class ValuesetIdContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(cqlParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_valuesetId; }
    // @Override
    enterRule(listener) {
        if (listener.enterValuesetId) {
            listener.enterValuesetId(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValuesetId) {
            listener.exitValuesetId(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValuesetId) {
            return visitor.visitValuesetId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValuesetIdContext = ValuesetIdContext;
class VersionSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(cqlParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_versionSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterVersionSpecifier) {
            listener.enterVersionSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVersionSpecifier) {
            listener.exitVersionSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVersionSpecifier) {
            return visitor.visitVersionSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VersionSpecifierContext = VersionSpecifierContext;
class CodeIdContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(cqlParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_codeId; }
    // @Override
    enterRule(listener) {
        if (listener.enterCodeId) {
            listener.enterCodeId(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCodeId) {
            listener.exitCodeId(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCodeId) {
            return visitor.visitCodeId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CodeIdContext = CodeIdContext;
class TypeSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    namedTypeSpecifier() {
        return this.tryGetRuleContext(0, NamedTypeSpecifierContext);
    }
    listTypeSpecifier() {
        return this.tryGetRuleContext(0, ListTypeSpecifierContext);
    }
    intervalTypeSpecifier() {
        return this.tryGetRuleContext(0, IntervalTypeSpecifierContext);
    }
    tupleTypeSpecifier() {
        return this.tryGetRuleContext(0, TupleTypeSpecifierContext);
    }
    choiceTypeSpecifier() {
        return this.tryGetRuleContext(0, ChoiceTypeSpecifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_typeSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeSpecifier) {
            listener.enterTypeSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeSpecifier) {
            listener.exitTypeSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeSpecifier) {
            return visitor.visitTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeSpecifierContext = TypeSpecifierContext;
class NamedTypeSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    referentialOrTypeNameIdentifier() {
        return this.getRuleContext(0, ReferentialOrTypeNameIdentifierContext);
    }
    qualifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifierContext);
        }
        else {
            return this.getRuleContext(i, QualifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_namedTypeSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterNamedTypeSpecifier) {
            listener.enterNamedTypeSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNamedTypeSpecifier) {
            listener.exitNamedTypeSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNamedTypeSpecifier) {
            return visitor.visitNamedTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NamedTypeSpecifierContext = NamedTypeSpecifierContext;
class ModelIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_modelIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterModelIdentifier) {
            listener.enterModelIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModelIdentifier) {
            listener.exitModelIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModelIdentifier) {
            return visitor.visitModelIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModelIdentifierContext = ModelIdentifierContext;
class ListTypeSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    typeSpecifier() {
        return this.getRuleContext(0, TypeSpecifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_listTypeSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterListTypeSpecifier) {
            listener.enterListTypeSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitListTypeSpecifier) {
            listener.exitListTypeSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitListTypeSpecifier) {
            return visitor.visitListTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ListTypeSpecifierContext = ListTypeSpecifierContext;
class IntervalTypeSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    typeSpecifier() {
        return this.getRuleContext(0, TypeSpecifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_intervalTypeSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterIntervalTypeSpecifier) {
            listener.enterIntervalTypeSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIntervalTypeSpecifier) {
            listener.exitIntervalTypeSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIntervalTypeSpecifier) {
            return visitor.visitIntervalTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntervalTypeSpecifierContext = IntervalTypeSpecifierContext;
class TupleTypeSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    tupleElementDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(TupleElementDefinitionContext);
        }
        else {
            return this.getRuleContext(i, TupleElementDefinitionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_tupleTypeSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterTupleTypeSpecifier) {
            listener.enterTupleTypeSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTupleTypeSpecifier) {
            listener.exitTupleTypeSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTupleTypeSpecifier) {
            return visitor.visitTupleTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TupleTypeSpecifierContext = TupleTypeSpecifierContext;
class TupleElementDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    referentialIdentifier() {
        return this.getRuleContext(0, ReferentialIdentifierContext);
    }
    typeSpecifier() {
        return this.getRuleContext(0, TypeSpecifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_tupleElementDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterTupleElementDefinition) {
            listener.enterTupleElementDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTupleElementDefinition) {
            listener.exitTupleElementDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTupleElementDefinition) {
            return visitor.visitTupleElementDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TupleElementDefinitionContext = TupleElementDefinitionContext;
class ChoiceTypeSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    typeSpecifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeSpecifierContext);
        }
        else {
            return this.getRuleContext(i, TypeSpecifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_choiceTypeSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterChoiceTypeSpecifier) {
            listener.enterChoiceTypeSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChoiceTypeSpecifier) {
            listener.exitChoiceTypeSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitChoiceTypeSpecifier) {
            return visitor.visitChoiceTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ChoiceTypeSpecifierContext = ChoiceTypeSpecifierContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    expressionDefinition() {
        return this.tryGetRuleContext(0, ExpressionDefinitionContext);
    }
    contextDefinition() {
        return this.tryGetRuleContext(0, ContextDefinitionContext);
    }
    functionDefinition() {
        return this.tryGetRuleContext(0, FunctionDefinitionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class ExpressionDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    accessModifier() {
        return this.tryGetRuleContext(0, AccessModifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_expressionDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpressionDefinition) {
            listener.enterExpressionDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpressionDefinition) {
            listener.exitExpressionDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressionDefinition) {
            return visitor.visitExpressionDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionDefinitionContext = ExpressionDefinitionContext;
class ContextDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    modelIdentifier() {
        return this.tryGetRuleContext(0, ModelIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_contextDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterContextDefinition) {
            listener.enterContextDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContextDefinition) {
            listener.exitContextDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContextDefinition) {
            return visitor.visitContextDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContextDefinitionContext = ContextDefinitionContext;
class FunctionDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    identifierOrFunctionIdentifier() {
        return this.getRuleContext(0, IdentifierOrFunctionIdentifierContext);
    }
    functionBody() {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    }
    accessModifier() {
        return this.tryGetRuleContext(0, AccessModifierContext);
    }
    operandDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(OperandDefinitionContext);
        }
        else {
            return this.getRuleContext(i, OperandDefinitionContext);
        }
    }
    typeSpecifier() {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_functionDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionDefinition) {
            listener.enterFunctionDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionDefinition) {
            listener.exitFunctionDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionDefinition) {
            return visitor.visitFunctionDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionDefinitionContext = FunctionDefinitionContext;
class OperandDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    referentialIdentifier() {
        return this.getRuleContext(0, ReferentialIdentifierContext);
    }
    typeSpecifier() {
        return this.getRuleContext(0, TypeSpecifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_operandDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterOperandDefinition) {
            listener.enterOperandDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOperandDefinition) {
            listener.exitOperandDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOperandDefinition) {
            return visitor.visitOperandDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OperandDefinitionContext = OperandDefinitionContext;
class FunctionBodyContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_functionBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionBody) {
            listener.enterFunctionBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionBody) {
            listener.exitFunctionBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionBody) {
            return visitor.visitFunctionBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionBodyContext = FunctionBodyContext;
class QuerySourceContext extends ParserRuleContext_1.ParserRuleContext {
    retrieve() {
        return this.tryGetRuleContext(0, RetrieveContext);
    }
    qualifiedIdentifierExpression() {
        return this.tryGetRuleContext(0, QualifiedIdentifierExpressionContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_querySource; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuerySource) {
            listener.enterQuerySource(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuerySource) {
            listener.exitQuerySource(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuerySource) {
            return visitor.visitQuerySource(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QuerySourceContext = QuerySourceContext;
class AliasedQuerySourceContext extends ParserRuleContext_1.ParserRuleContext {
    querySource() {
        return this.getRuleContext(0, QuerySourceContext);
    }
    alias() {
        return this.getRuleContext(0, AliasContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_aliasedQuerySource; }
    // @Override
    enterRule(listener) {
        if (listener.enterAliasedQuerySource) {
            listener.enterAliasedQuerySource(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAliasedQuerySource) {
            listener.exitAliasedQuerySource(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAliasedQuerySource) {
            return visitor.visitAliasedQuerySource(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AliasedQuerySourceContext = AliasedQuerySourceContext;
class AliasContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_alias; }
    // @Override
    enterRule(listener) {
        if (listener.enterAlias) {
            listener.enterAlias(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAlias) {
            listener.exitAlias(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AliasContext = AliasContext;
class QueryInclusionClauseContext extends ParserRuleContext_1.ParserRuleContext {
    withClause() {
        return this.tryGetRuleContext(0, WithClauseContext);
    }
    withoutClause() {
        return this.tryGetRuleContext(0, WithoutClauseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_queryInclusionClause; }
    // @Override
    enterRule(listener) {
        if (listener.enterQueryInclusionClause) {
            listener.enterQueryInclusionClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQueryInclusionClause) {
            listener.exitQueryInclusionClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryInclusionClause) {
            return visitor.visitQueryInclusionClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryInclusionClauseContext = QueryInclusionClauseContext;
class WithClauseContext extends ParserRuleContext_1.ParserRuleContext {
    aliasedQuerySource() {
        return this.getRuleContext(0, AliasedQuerySourceContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_withClause; }
    // @Override
    enterRule(listener) {
        if (listener.enterWithClause) {
            listener.enterWithClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWithClause) {
            listener.exitWithClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWithClause) {
            return visitor.visitWithClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WithClauseContext = WithClauseContext;
class WithoutClauseContext extends ParserRuleContext_1.ParserRuleContext {
    aliasedQuerySource() {
        return this.getRuleContext(0, AliasedQuerySourceContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_withoutClause; }
    // @Override
    enterRule(listener) {
        if (listener.enterWithoutClause) {
            listener.enterWithoutClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWithoutClause) {
            listener.exitWithoutClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWithoutClause) {
            return visitor.visitWithoutClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WithoutClauseContext = WithoutClauseContext;
class RetrieveContext extends ParserRuleContext_1.ParserRuleContext {
    namedTypeSpecifier() {
        return this.getRuleContext(0, NamedTypeSpecifierContext);
    }
    contextIdentifier() {
        return this.tryGetRuleContext(0, ContextIdentifierContext);
    }
    terminology() {
        return this.tryGetRuleContext(0, TerminologyContext);
    }
    codePath() {
        return this.tryGetRuleContext(0, CodePathContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_retrieve; }
    // @Override
    enterRule(listener) {
        if (listener.enterRetrieve) {
            listener.enterRetrieve(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRetrieve) {
            listener.exitRetrieve(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRetrieve) {
            return visitor.visitRetrieve(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RetrieveContext = RetrieveContext;
class ContextIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    qualifiedIdentifierExpression() {
        return this.getRuleContext(0, QualifiedIdentifierExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_contextIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterContextIdentifier) {
            listener.enterContextIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContextIdentifier) {
            listener.exitContextIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContextIdentifier) {
            return visitor.visitContextIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContextIdentifierContext = ContextIdentifierContext;
class CodePathContext extends ParserRuleContext_1.ParserRuleContext {
    simplePath() {
        return this.getRuleContext(0, SimplePathContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_codePath; }
    // @Override
    enterRule(listener) {
        if (listener.enterCodePath) {
            listener.enterCodePath(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCodePath) {
            listener.exitCodePath(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCodePath) {
            return visitor.visitCodePath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CodePathContext = CodePathContext;
class TerminologyContext extends ParserRuleContext_1.ParserRuleContext {
    qualifiedIdentifierExpression() {
        return this.tryGetRuleContext(0, QualifiedIdentifierExpressionContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_terminology; }
    // @Override
    enterRule(listener) {
        if (listener.enterTerminology) {
            listener.enterTerminology(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTerminology) {
            listener.exitTerminology(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTerminology) {
            return visitor.visitTerminology(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TerminologyContext = TerminologyContext;
class QualifierContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_qualifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterQualifier) {
            listener.enterQualifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQualifier) {
            listener.exitQualifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifier) {
            return visitor.visitQualifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifierContext = QualifierContext;
class QueryContext extends ParserRuleContext_1.ParserRuleContext {
    sourceClause() {
        return this.getRuleContext(0, SourceClauseContext);
    }
    letClause() {
        return this.tryGetRuleContext(0, LetClauseContext);
    }
    queryInclusionClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(QueryInclusionClauseContext);
        }
        else {
            return this.getRuleContext(i, QueryInclusionClauseContext);
        }
    }
    whereClause() {
        return this.tryGetRuleContext(0, WhereClauseContext);
    }
    returnClause() {
        return this.tryGetRuleContext(0, ReturnClauseContext);
    }
    sortClause() {
        return this.tryGetRuleContext(0, SortClauseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_query; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery) {
            listener.enterQuery(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery) {
            listener.exitQuery(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuery) {
            return visitor.visitQuery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryContext = QueryContext;
class SourceClauseContext extends ParserRuleContext_1.ParserRuleContext {
    aliasedQuerySource(i) {
        if (i === undefined) {
            return this.getRuleContexts(AliasedQuerySourceContext);
        }
        else {
            return this.getRuleContext(i, AliasedQuerySourceContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_sourceClause; }
    // @Override
    enterRule(listener) {
        if (listener.enterSourceClause) {
            listener.enterSourceClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSourceClause) {
            listener.exitSourceClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSourceClause) {
            return visitor.visitSourceClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SourceClauseContext = SourceClauseContext;
class LetClauseContext extends ParserRuleContext_1.ParserRuleContext {
    letClauseItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(LetClauseItemContext);
        }
        else {
            return this.getRuleContext(i, LetClauseItemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_letClause; }
    // @Override
    enterRule(listener) {
        if (listener.enterLetClause) {
            listener.enterLetClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetClause) {
            listener.exitLetClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetClause) {
            return visitor.visitLetClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LetClauseContext = LetClauseContext;
class LetClauseItemContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_letClauseItem; }
    // @Override
    enterRule(listener) {
        if (listener.enterLetClauseItem) {
            listener.enterLetClauseItem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetClauseItem) {
            listener.exitLetClauseItem(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetClauseItem) {
            return visitor.visitLetClauseItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LetClauseItemContext = LetClauseItemContext;
class WhereClauseContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_whereClause; }
    // @Override
    enterRule(listener) {
        if (listener.enterWhereClause) {
            listener.enterWhereClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWhereClause) {
            listener.exitWhereClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WhereClauseContext = WhereClauseContext;
class ReturnClauseContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_returnClause; }
    // @Override
    enterRule(listener) {
        if (listener.enterReturnClause) {
            listener.enterReturnClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReturnClause) {
            listener.exitReturnClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReturnClause) {
            return visitor.visitReturnClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnClauseContext = ReturnClauseContext;
class SortClauseContext extends ParserRuleContext_1.ParserRuleContext {
    sortDirection() {
        return this.tryGetRuleContext(0, SortDirectionContext);
    }
    sortByItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(SortByItemContext);
        }
        else {
            return this.getRuleContext(i, SortByItemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_sortClause; }
    // @Override
    enterRule(listener) {
        if (listener.enterSortClause) {
            listener.enterSortClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSortClause) {
            listener.exitSortClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSortClause) {
            return visitor.visitSortClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SortClauseContext = SortClauseContext;
class SortDirectionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_sortDirection; }
    // @Override
    enterRule(listener) {
        if (listener.enterSortDirection) {
            listener.enterSortDirection(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSortDirection) {
            listener.exitSortDirection(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSortDirection) {
            return visitor.visitSortDirection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SortDirectionContext = SortDirectionContext;
class SortByItemContext extends ParserRuleContext_1.ParserRuleContext {
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    sortDirection() {
        return this.tryGetRuleContext(0, SortDirectionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_sortByItem; }
    // @Override
    enterRule(listener) {
        if (listener.enterSortByItem) {
            listener.enterSortByItem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSortByItem) {
            listener.exitSortByItem(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSortByItem) {
            return visitor.visitSortByItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SortByItemContext = SortByItemContext;
class QualifiedIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    qualifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifierContext);
        }
        else {
            return this.getRuleContext(i, QualifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_qualifiedIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterQualifiedIdentifier) {
            listener.enterQualifiedIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQualifiedIdentifier) {
            listener.exitQualifiedIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifiedIdentifier) {
            return visitor.visitQualifiedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifiedIdentifierContext = QualifiedIdentifierContext;
class QualifiedIdentifierExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    referentialIdentifier() {
        return this.getRuleContext(0, ReferentialIdentifierContext);
    }
    qualifierExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifierExpressionContext);
        }
        else {
            return this.getRuleContext(i, QualifierExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_qualifiedIdentifierExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterQualifiedIdentifierExpression) {
            listener.enterQualifiedIdentifierExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQualifiedIdentifierExpression) {
            listener.exitQualifiedIdentifierExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifiedIdentifierExpression) {
            return visitor.visitQualifiedIdentifierExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifiedIdentifierExpressionContext = QualifiedIdentifierExpressionContext;
class QualifierExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    referentialIdentifier() {
        return this.getRuleContext(0, ReferentialIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_qualifierExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterQualifierExpression) {
            listener.enterQualifierExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQualifierExpression) {
            listener.exitQualifierExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifierExpression) {
            return visitor.visitQualifierExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifierExpressionContext = QualifierExpressionContext;
class SimplePathContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_simplePath; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.SimplePathContext = SimplePathContext;
class SimplePathReferentialIdentifierContext extends SimplePathContext {
    referentialIdentifier() {
        return this.getRuleContext(0, ReferentialIdentifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSimplePathReferentialIdentifier) {
            listener.enterSimplePathReferentialIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimplePathReferentialIdentifier) {
            listener.exitSimplePathReferentialIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimplePathReferentialIdentifier) {
            return visitor.visitSimplePathReferentialIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimplePathReferentialIdentifierContext = SimplePathReferentialIdentifierContext;
class SimplePathQualifiedIdentifierContext extends SimplePathContext {
    simplePath() {
        return this.getRuleContext(0, SimplePathContext);
    }
    referentialIdentifier() {
        return this.getRuleContext(0, ReferentialIdentifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSimplePathQualifiedIdentifier) {
            listener.enterSimplePathQualifiedIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimplePathQualifiedIdentifier) {
            listener.exitSimplePathQualifiedIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimplePathQualifiedIdentifier) {
            return visitor.visitSimplePathQualifiedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimplePathQualifiedIdentifierContext = SimplePathQualifiedIdentifierContext;
class SimplePathIndexerContext extends SimplePathContext {
    simplePath() {
        return this.getRuleContext(0, SimplePathContext);
    }
    simpleLiteral() {
        return this.getRuleContext(0, SimpleLiteralContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSimplePathIndexer) {
            listener.enterSimplePathIndexer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimplePathIndexer) {
            listener.exitSimplePathIndexer(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimplePathIndexer) {
            return visitor.visitSimplePathIndexer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimplePathIndexerContext = SimplePathIndexerContext;
class SimpleLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.tryGetToken(cqlParser.STRING, 0); }
    NUMBER() { return this.tryGetToken(cqlParser.NUMBER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_simpleLiteral; }
    // @Override
    enterRule(listener) {
        if (listener.enterSimpleLiteral) {
            listener.enterSimpleLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimpleLiteral) {
            listener.exitSimpleLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleLiteral) {
            return visitor.visitSimpleLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleLiteralContext = SimpleLiteralContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_expression; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExpressionContext = ExpressionContext;
class TermExpressionContext extends ExpressionContext {
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTermExpression) {
            listener.enterTermExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTermExpression) {
            listener.exitTermExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTermExpression) {
            return visitor.visitTermExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TermExpressionContext = TermExpressionContext;
class RetrieveExpressionContext extends ExpressionContext {
    retrieve() {
        return this.getRuleContext(0, RetrieveContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterRetrieveExpression) {
            listener.enterRetrieveExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRetrieveExpression) {
            listener.exitRetrieveExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRetrieveExpression) {
            return visitor.visitRetrieveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RetrieveExpressionContext = RetrieveExpressionContext;
class QueryExpressionContext extends ExpressionContext {
    query() {
        return this.getRuleContext(0, QueryContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterQueryExpression) {
            listener.enterQueryExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQueryExpression) {
            listener.exitQueryExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryExpression) {
            return visitor.visitQueryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryExpressionContext = QueryExpressionContext;
class BooleanExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBooleanExpression) {
            listener.enterBooleanExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBooleanExpression) {
            listener.exitBooleanExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBooleanExpression) {
            return visitor.visitBooleanExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanExpressionContext = BooleanExpressionContext;
class TypeExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    typeSpecifier() {
        return this.getRuleContext(0, TypeSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeExpression) {
            listener.enterTypeExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeExpression) {
            listener.exitTypeExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeExpression) {
            return visitor.visitTypeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeExpressionContext = TypeExpressionContext;
class CastExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    typeSpecifier() {
        return this.getRuleContext(0, TypeSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCastExpression) {
            listener.enterCastExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCastExpression) {
            listener.exitCastExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCastExpression) {
            return visitor.visitCastExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CastExpressionContext = CastExpressionContext;
class NotExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNotExpression) {
            listener.enterNotExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNotExpression) {
            listener.exitNotExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNotExpression) {
            return visitor.visitNotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NotExpressionContext = NotExpressionContext;
class ExistenceExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExistenceExpression) {
            listener.enterExistenceExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExistenceExpression) {
            listener.exitExistenceExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExistenceExpression) {
            return visitor.visitExistenceExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExistenceExpressionContext = ExistenceExpressionContext;
class BetweenExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    expressionTerm(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionTermContext);
        }
        else {
            return this.getRuleContext(i, ExpressionTermContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBetweenExpression) {
            listener.enterBetweenExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBetweenExpression) {
            listener.exitBetweenExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBetweenExpression) {
            return visitor.visitBetweenExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BetweenExpressionContext = BetweenExpressionContext;
class DurationBetweenExpressionContext extends ExpressionContext {
    pluralDateTimePrecision() {
        return this.getRuleContext(0, PluralDateTimePrecisionContext);
    }
    expressionTerm(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionTermContext);
        }
        else {
            return this.getRuleContext(i, ExpressionTermContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDurationBetweenExpression) {
            listener.enterDurationBetweenExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDurationBetweenExpression) {
            listener.exitDurationBetweenExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDurationBetweenExpression) {
            return visitor.visitDurationBetweenExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DurationBetweenExpressionContext = DurationBetweenExpressionContext;
class DifferenceBetweenExpressionContext extends ExpressionContext {
    pluralDateTimePrecision() {
        return this.getRuleContext(0, PluralDateTimePrecisionContext);
    }
    expressionTerm(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionTermContext);
        }
        else {
            return this.getRuleContext(i, ExpressionTermContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDifferenceBetweenExpression) {
            listener.enterDifferenceBetweenExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDifferenceBetweenExpression) {
            listener.exitDifferenceBetweenExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDifferenceBetweenExpression) {
            return visitor.visitDifferenceBetweenExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DifferenceBetweenExpressionContext = DifferenceBetweenExpressionContext;
class InequalityExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInequalityExpression) {
            listener.enterInequalityExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInequalityExpression) {
            listener.exitInequalityExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInequalityExpression) {
            return visitor.visitInequalityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InequalityExpressionContext = InequalityExpressionContext;
class TimingExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    intervalOperatorPhrase() {
        return this.getRuleContext(0, IntervalOperatorPhraseContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTimingExpression) {
            listener.enterTimingExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTimingExpression) {
            listener.exitTimingExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTimingExpression) {
            return visitor.visitTimingExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TimingExpressionContext = TimingExpressionContext;
class EqualityExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEqualityExpression) {
            listener.enterEqualityExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEqualityExpression) {
            listener.exitEqualityExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EqualityExpressionContext = EqualityExpressionContext;
class MembershipExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    dateTimePrecisionSpecifier() {
        return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMembershipExpression) {
            listener.enterMembershipExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMembershipExpression) {
            listener.exitMembershipExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMembershipExpression) {
            return visitor.visitMembershipExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MembershipExpressionContext = MembershipExpressionContext;
class AndExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAndExpression) {
            listener.enterAndExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAndExpression) {
            listener.exitAndExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAndExpression) {
            return visitor.visitAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AndExpressionContext = AndExpressionContext;
class OrExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOrExpression) {
            listener.enterOrExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrExpression) {
            listener.exitOrExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOrExpression) {
            return visitor.visitOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OrExpressionContext = OrExpressionContext;
class ImpliesExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterImpliesExpression) {
            listener.enterImpliesExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImpliesExpression) {
            listener.exitImpliesExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImpliesExpression) {
            return visitor.visitImpliesExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImpliesExpressionContext = ImpliesExpressionContext;
class InFixSetExpressionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInFixSetExpression) {
            listener.enterInFixSetExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInFixSetExpression) {
            listener.exitInFixSetExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInFixSetExpression) {
            return visitor.visitInFixSetExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InFixSetExpressionContext = InFixSetExpressionContext;
class DateTimePrecisionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_dateTimePrecision; }
    // @Override
    enterRule(listener) {
        if (listener.enterDateTimePrecision) {
            listener.enterDateTimePrecision(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDateTimePrecision) {
            listener.exitDateTimePrecision(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDateTimePrecision) {
            return visitor.visitDateTimePrecision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DateTimePrecisionContext = DateTimePrecisionContext;
class DateTimeComponentContext extends ParserRuleContext_1.ParserRuleContext {
    dateTimePrecision() {
        return this.tryGetRuleContext(0, DateTimePrecisionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_dateTimeComponent; }
    // @Override
    enterRule(listener) {
        if (listener.enterDateTimeComponent) {
            listener.enterDateTimeComponent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDateTimeComponent) {
            listener.exitDateTimeComponent(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDateTimeComponent) {
            return visitor.visitDateTimeComponent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DateTimeComponentContext = DateTimeComponentContext;
class PluralDateTimePrecisionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_pluralDateTimePrecision; }
    // @Override
    enterRule(listener) {
        if (listener.enterPluralDateTimePrecision) {
            listener.enterPluralDateTimePrecision(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPluralDateTimePrecision) {
            listener.exitPluralDateTimePrecision(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPluralDateTimePrecision) {
            return visitor.visitPluralDateTimePrecision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PluralDateTimePrecisionContext = PluralDateTimePrecisionContext;
class ExpressionTermContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_expressionTerm; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExpressionTermContext = ExpressionTermContext;
class TermExpressionTermContext extends ExpressionTermContext {
    term() {
        return this.getRuleContext(0, TermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTermExpressionTerm) {
            listener.enterTermExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTermExpressionTerm) {
            listener.exitTermExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTermExpressionTerm) {
            return visitor.visitTermExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TermExpressionTermContext = TermExpressionTermContext;
class InvocationExpressionTermContext extends ExpressionTermContext {
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    qualifiedInvocation() {
        return this.getRuleContext(0, QualifiedInvocationContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInvocationExpressionTerm) {
            listener.enterInvocationExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInvocationExpressionTerm) {
            listener.exitInvocationExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInvocationExpressionTerm) {
            return visitor.visitInvocationExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InvocationExpressionTermContext = InvocationExpressionTermContext;
class IndexedExpressionTermContext extends ExpressionTermContext {
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexedExpressionTerm) {
            listener.enterIndexedExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexedExpressionTerm) {
            listener.exitIndexedExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndexedExpressionTerm) {
            return visitor.visitIndexedExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndexedExpressionTermContext = IndexedExpressionTermContext;
class ConversionExpressionTermContext extends ExpressionTermContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    typeSpecifier() {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    }
    unit() {
        return this.tryGetRuleContext(0, UnitContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterConversionExpressionTerm) {
            listener.enterConversionExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConversionExpressionTerm) {
            listener.exitConversionExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConversionExpressionTerm) {
            return visitor.visitConversionExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConversionExpressionTermContext = ConversionExpressionTermContext;
class PolarityExpressionTermContext extends ExpressionTermContext {
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPolarityExpressionTerm) {
            listener.enterPolarityExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPolarityExpressionTerm) {
            listener.exitPolarityExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPolarityExpressionTerm) {
            return visitor.visitPolarityExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PolarityExpressionTermContext = PolarityExpressionTermContext;
class TimeBoundaryExpressionTermContext extends ExpressionTermContext {
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTimeBoundaryExpressionTerm) {
            listener.enterTimeBoundaryExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTimeBoundaryExpressionTerm) {
            listener.exitTimeBoundaryExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTimeBoundaryExpressionTerm) {
            return visitor.visitTimeBoundaryExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TimeBoundaryExpressionTermContext = TimeBoundaryExpressionTermContext;
class TimeUnitExpressionTermContext extends ExpressionTermContext {
    dateTimeComponent() {
        return this.getRuleContext(0, DateTimeComponentContext);
    }
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTimeUnitExpressionTerm) {
            listener.enterTimeUnitExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTimeUnitExpressionTerm) {
            listener.exitTimeUnitExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTimeUnitExpressionTerm) {
            return visitor.visitTimeUnitExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TimeUnitExpressionTermContext = TimeUnitExpressionTermContext;
class DurationExpressionTermContext extends ExpressionTermContext {
    pluralDateTimePrecision() {
        return this.getRuleContext(0, PluralDateTimePrecisionContext);
    }
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDurationExpressionTerm) {
            listener.enterDurationExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDurationExpressionTerm) {
            listener.exitDurationExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDurationExpressionTerm) {
            return visitor.visitDurationExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DurationExpressionTermContext = DurationExpressionTermContext;
class DifferenceExpressionTermContext extends ExpressionTermContext {
    pluralDateTimePrecision() {
        return this.getRuleContext(0, PluralDateTimePrecisionContext);
    }
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDifferenceExpressionTerm) {
            listener.enterDifferenceExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDifferenceExpressionTerm) {
            listener.exitDifferenceExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDifferenceExpressionTerm) {
            return visitor.visitDifferenceExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DifferenceExpressionTermContext = DifferenceExpressionTermContext;
class WidthExpressionTermContext extends ExpressionTermContext {
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterWidthExpressionTerm) {
            listener.enterWidthExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWidthExpressionTerm) {
            listener.exitWidthExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWidthExpressionTerm) {
            return visitor.visitWidthExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WidthExpressionTermContext = WidthExpressionTermContext;
class SuccessorExpressionTermContext extends ExpressionTermContext {
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSuccessorExpressionTerm) {
            listener.enterSuccessorExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSuccessorExpressionTerm) {
            listener.exitSuccessorExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSuccessorExpressionTerm) {
            return visitor.visitSuccessorExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SuccessorExpressionTermContext = SuccessorExpressionTermContext;
class PredecessorExpressionTermContext extends ExpressionTermContext {
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPredecessorExpressionTerm) {
            listener.enterPredecessorExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPredecessorExpressionTerm) {
            listener.exitPredecessorExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPredecessorExpressionTerm) {
            return visitor.visitPredecessorExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PredecessorExpressionTermContext = PredecessorExpressionTermContext;
class ElementExtractorExpressionTermContext extends ExpressionTermContext {
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterElementExtractorExpressionTerm) {
            listener.enterElementExtractorExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElementExtractorExpressionTerm) {
            listener.exitElementExtractorExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElementExtractorExpressionTerm) {
            return visitor.visitElementExtractorExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementExtractorExpressionTermContext = ElementExtractorExpressionTermContext;
class PointExtractorExpressionTermContext extends ExpressionTermContext {
    expressionTerm() {
        return this.getRuleContext(0, ExpressionTermContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPointExtractorExpressionTerm) {
            listener.enterPointExtractorExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPointExtractorExpressionTerm) {
            listener.exitPointExtractorExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPointExtractorExpressionTerm) {
            return visitor.visitPointExtractorExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PointExtractorExpressionTermContext = PointExtractorExpressionTermContext;
class TypeExtentExpressionTermContext extends ExpressionTermContext {
    namedTypeSpecifier() {
        return this.getRuleContext(0, NamedTypeSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeExtentExpressionTerm) {
            listener.enterTypeExtentExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeExtentExpressionTerm) {
            listener.exitTypeExtentExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeExtentExpressionTerm) {
            return visitor.visitTypeExtentExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeExtentExpressionTermContext = TypeExtentExpressionTermContext;
class PowerExpressionTermContext extends ExpressionTermContext {
    expressionTerm(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionTermContext);
        }
        else {
            return this.getRuleContext(i, ExpressionTermContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPowerExpressionTerm) {
            listener.enterPowerExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPowerExpressionTerm) {
            listener.exitPowerExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPowerExpressionTerm) {
            return visitor.visitPowerExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PowerExpressionTermContext = PowerExpressionTermContext;
class MultiplicationExpressionTermContext extends ExpressionTermContext {
    expressionTerm(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionTermContext);
        }
        else {
            return this.getRuleContext(i, ExpressionTermContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiplicationExpressionTerm) {
            listener.enterMultiplicationExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiplicationExpressionTerm) {
            listener.exitMultiplicationExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicationExpressionTerm) {
            return visitor.visitMultiplicationExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiplicationExpressionTermContext = MultiplicationExpressionTermContext;
class AdditionExpressionTermContext extends ExpressionTermContext {
    expressionTerm(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionTermContext);
        }
        else {
            return this.getRuleContext(i, ExpressionTermContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAdditionExpressionTerm) {
            listener.enterAdditionExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAdditionExpressionTerm) {
            listener.exitAdditionExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditionExpressionTerm) {
            return visitor.visitAdditionExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditionExpressionTermContext = AdditionExpressionTermContext;
class IfThenElseExpressionTermContext extends ExpressionTermContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIfThenElseExpressionTerm) {
            listener.enterIfThenElseExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfThenElseExpressionTerm) {
            listener.exitIfThenElseExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfThenElseExpressionTerm) {
            return visitor.visitIfThenElseExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfThenElseExpressionTermContext = IfThenElseExpressionTermContext;
class CaseExpressionTermContext extends ExpressionTermContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    caseExpressionItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseExpressionItemContext);
        }
        else {
            return this.getRuleContext(i, CaseExpressionItemContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCaseExpressionTerm) {
            listener.enterCaseExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCaseExpressionTerm) {
            listener.exitCaseExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCaseExpressionTerm) {
            return visitor.visitCaseExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CaseExpressionTermContext = CaseExpressionTermContext;
class AggregateExpressionTermContext extends ExpressionTermContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAggregateExpressionTerm) {
            listener.enterAggregateExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAggregateExpressionTerm) {
            listener.exitAggregateExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAggregateExpressionTerm) {
            return visitor.visitAggregateExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AggregateExpressionTermContext = AggregateExpressionTermContext;
class SetAggregateExpressionTermContext extends ExpressionTermContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    dateTimePrecision() {
        return this.tryGetRuleContext(0, DateTimePrecisionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSetAggregateExpressionTerm) {
            listener.enterSetAggregateExpressionTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSetAggregateExpressionTerm) {
            listener.exitSetAggregateExpressionTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSetAggregateExpressionTerm) {
            return visitor.visitSetAggregateExpressionTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SetAggregateExpressionTermContext = SetAggregateExpressionTermContext;
class CaseExpressionItemContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_caseExpressionItem; }
    // @Override
    enterRule(listener) {
        if (listener.enterCaseExpressionItem) {
            listener.enterCaseExpressionItem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCaseExpressionItem) {
            listener.exitCaseExpressionItem(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCaseExpressionItem) {
            return visitor.visitCaseExpressionItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CaseExpressionItemContext = CaseExpressionItemContext;
class DateTimePrecisionSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    dateTimePrecision() {
        return this.getRuleContext(0, DateTimePrecisionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_dateTimePrecisionSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterDateTimePrecisionSpecifier) {
            listener.enterDateTimePrecisionSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDateTimePrecisionSpecifier) {
            listener.exitDateTimePrecisionSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDateTimePrecisionSpecifier) {
            return visitor.visitDateTimePrecisionSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DateTimePrecisionSpecifierContext = DateTimePrecisionSpecifierContext;
class RelativeQualifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_relativeQualifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterRelativeQualifier) {
            listener.enterRelativeQualifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRelativeQualifier) {
            listener.exitRelativeQualifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRelativeQualifier) {
            return visitor.visitRelativeQualifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RelativeQualifierContext = RelativeQualifierContext;
class OffsetRelativeQualifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_offsetRelativeQualifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterOffsetRelativeQualifier) {
            listener.enterOffsetRelativeQualifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOffsetRelativeQualifier) {
            listener.exitOffsetRelativeQualifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOffsetRelativeQualifier) {
            return visitor.visitOffsetRelativeQualifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OffsetRelativeQualifierContext = OffsetRelativeQualifierContext;
class ExclusiveRelativeQualifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_exclusiveRelativeQualifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterExclusiveRelativeQualifier) {
            listener.enterExclusiveRelativeQualifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExclusiveRelativeQualifier) {
            listener.exitExclusiveRelativeQualifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExclusiveRelativeQualifier) {
            return visitor.visitExclusiveRelativeQualifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExclusiveRelativeQualifierContext = ExclusiveRelativeQualifierContext;
class QuantityOffsetContext extends ParserRuleContext_1.ParserRuleContext {
    quantity() {
        return this.tryGetRuleContext(0, QuantityContext);
    }
    offsetRelativeQualifier() {
        return this.tryGetRuleContext(0, OffsetRelativeQualifierContext);
    }
    exclusiveRelativeQualifier() {
        return this.tryGetRuleContext(0, ExclusiveRelativeQualifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_quantityOffset; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantityOffset) {
            listener.enterQuantityOffset(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantityOffset) {
            listener.exitQuantityOffset(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantityOffset) {
            return visitor.visitQuantityOffset(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QuantityOffsetContext = QuantityOffsetContext;
class TemporalRelationshipContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_temporalRelationship; }
    // @Override
    enterRule(listener) {
        if (listener.enterTemporalRelationship) {
            listener.enterTemporalRelationship(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTemporalRelationship) {
            listener.exitTemporalRelationship(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTemporalRelationship) {
            return visitor.visitTemporalRelationship(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TemporalRelationshipContext = TemporalRelationshipContext;
class IntervalOperatorPhraseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_intervalOperatorPhrase; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.IntervalOperatorPhraseContext = IntervalOperatorPhraseContext;
class ConcurrentWithIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    relativeQualifier() {
        return this.tryGetRuleContext(0, RelativeQualifierContext);
    }
    dateTimePrecision() {
        return this.tryGetRuleContext(0, DateTimePrecisionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterConcurrentWithIntervalOperatorPhrase) {
            listener.enterConcurrentWithIntervalOperatorPhrase(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConcurrentWithIntervalOperatorPhrase) {
            listener.exitConcurrentWithIntervalOperatorPhrase(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConcurrentWithIntervalOperatorPhrase) {
            return visitor.visitConcurrentWithIntervalOperatorPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConcurrentWithIntervalOperatorPhraseContext = ConcurrentWithIntervalOperatorPhraseContext;
class IncludesIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    dateTimePrecisionSpecifier() {
        return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIncludesIntervalOperatorPhrase) {
            listener.enterIncludesIntervalOperatorPhrase(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIncludesIntervalOperatorPhrase) {
            listener.exitIncludesIntervalOperatorPhrase(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIncludesIntervalOperatorPhrase) {
            return visitor.visitIncludesIntervalOperatorPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IncludesIntervalOperatorPhraseContext = IncludesIntervalOperatorPhraseContext;
class IncludedInIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    dateTimePrecisionSpecifier() {
        return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIncludedInIntervalOperatorPhrase) {
            listener.enterIncludedInIntervalOperatorPhrase(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIncludedInIntervalOperatorPhrase) {
            listener.exitIncludedInIntervalOperatorPhrase(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIncludedInIntervalOperatorPhrase) {
            return visitor.visitIncludedInIntervalOperatorPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IncludedInIntervalOperatorPhraseContext = IncludedInIntervalOperatorPhraseContext;
class BeforeOrAfterIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    temporalRelationship() {
        return this.getRuleContext(0, TemporalRelationshipContext);
    }
    quantityOffset() {
        return this.tryGetRuleContext(0, QuantityOffsetContext);
    }
    dateTimePrecisionSpecifier() {
        return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBeforeOrAfterIntervalOperatorPhrase) {
            listener.enterBeforeOrAfterIntervalOperatorPhrase(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBeforeOrAfterIntervalOperatorPhrase) {
            listener.exitBeforeOrAfterIntervalOperatorPhrase(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBeforeOrAfterIntervalOperatorPhrase) {
            return visitor.visitBeforeOrAfterIntervalOperatorPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BeforeOrAfterIntervalOperatorPhraseContext = BeforeOrAfterIntervalOperatorPhraseContext;
class WithinIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    quantity() {
        return this.getRuleContext(0, QuantityContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterWithinIntervalOperatorPhrase) {
            listener.enterWithinIntervalOperatorPhrase(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWithinIntervalOperatorPhrase) {
            listener.exitWithinIntervalOperatorPhrase(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWithinIntervalOperatorPhrase) {
            return visitor.visitWithinIntervalOperatorPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WithinIntervalOperatorPhraseContext = WithinIntervalOperatorPhraseContext;
class MeetsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    dateTimePrecisionSpecifier() {
        return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMeetsIntervalOperatorPhrase) {
            listener.enterMeetsIntervalOperatorPhrase(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMeetsIntervalOperatorPhrase) {
            listener.exitMeetsIntervalOperatorPhrase(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMeetsIntervalOperatorPhrase) {
            return visitor.visitMeetsIntervalOperatorPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MeetsIntervalOperatorPhraseContext = MeetsIntervalOperatorPhraseContext;
class OverlapsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    dateTimePrecisionSpecifier() {
        return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOverlapsIntervalOperatorPhrase) {
            listener.enterOverlapsIntervalOperatorPhrase(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOverlapsIntervalOperatorPhrase) {
            listener.exitOverlapsIntervalOperatorPhrase(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOverlapsIntervalOperatorPhrase) {
            return visitor.visitOverlapsIntervalOperatorPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OverlapsIntervalOperatorPhraseContext = OverlapsIntervalOperatorPhraseContext;
class StartsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    dateTimePrecisionSpecifier() {
        return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStartsIntervalOperatorPhrase) {
            listener.enterStartsIntervalOperatorPhrase(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStartsIntervalOperatorPhrase) {
            listener.exitStartsIntervalOperatorPhrase(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStartsIntervalOperatorPhrase) {
            return visitor.visitStartsIntervalOperatorPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StartsIntervalOperatorPhraseContext = StartsIntervalOperatorPhraseContext;
class EndsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
    dateTimePrecisionSpecifier() {
        return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEndsIntervalOperatorPhrase) {
            listener.enterEndsIntervalOperatorPhrase(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEndsIntervalOperatorPhrase) {
            listener.exitEndsIntervalOperatorPhrase(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEndsIntervalOperatorPhrase) {
            return visitor.visitEndsIntervalOperatorPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EndsIntervalOperatorPhraseContext = EndsIntervalOperatorPhraseContext;
class TermContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_term; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.TermContext = TermContext;
class InvocationTermContext extends TermContext {
    invocation() {
        return this.getRuleContext(0, InvocationContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInvocationTerm) {
            listener.enterInvocationTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInvocationTerm) {
            listener.exitInvocationTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInvocationTerm) {
            return visitor.visitInvocationTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InvocationTermContext = InvocationTermContext;
class LiteralTermContext extends TermContext {
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLiteralTerm) {
            listener.enterLiteralTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLiteralTerm) {
            listener.exitLiteralTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteralTerm) {
            return visitor.visitLiteralTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralTermContext = LiteralTermContext;
class ExternalConstantTermContext extends TermContext {
    externalConstant() {
        return this.getRuleContext(0, ExternalConstantContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExternalConstantTerm) {
            listener.enterExternalConstantTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExternalConstantTerm) {
            listener.exitExternalConstantTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExternalConstantTerm) {
            return visitor.visitExternalConstantTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExternalConstantTermContext = ExternalConstantTermContext;
class IntervalSelectorTermContext extends TermContext {
    intervalSelector() {
        return this.getRuleContext(0, IntervalSelectorContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIntervalSelectorTerm) {
            listener.enterIntervalSelectorTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIntervalSelectorTerm) {
            listener.exitIntervalSelectorTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIntervalSelectorTerm) {
            return visitor.visitIntervalSelectorTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntervalSelectorTermContext = IntervalSelectorTermContext;
class TupleSelectorTermContext extends TermContext {
    tupleSelector() {
        return this.getRuleContext(0, TupleSelectorContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTupleSelectorTerm) {
            listener.enterTupleSelectorTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTupleSelectorTerm) {
            listener.exitTupleSelectorTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTupleSelectorTerm) {
            return visitor.visitTupleSelectorTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TupleSelectorTermContext = TupleSelectorTermContext;
class InstanceSelectorTermContext extends TermContext {
    instanceSelector() {
        return this.getRuleContext(0, InstanceSelectorContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInstanceSelectorTerm) {
            listener.enterInstanceSelectorTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstanceSelectorTerm) {
            listener.exitInstanceSelectorTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstanceSelectorTerm) {
            return visitor.visitInstanceSelectorTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InstanceSelectorTermContext = InstanceSelectorTermContext;
class ListSelectorTermContext extends TermContext {
    listSelector() {
        return this.getRuleContext(0, ListSelectorContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterListSelectorTerm) {
            listener.enterListSelectorTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitListSelectorTerm) {
            listener.exitListSelectorTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitListSelectorTerm) {
            return visitor.visitListSelectorTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ListSelectorTermContext = ListSelectorTermContext;
class CodeSelectorTermContext extends TermContext {
    codeSelector() {
        return this.getRuleContext(0, CodeSelectorContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCodeSelectorTerm) {
            listener.enterCodeSelectorTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCodeSelectorTerm) {
            listener.exitCodeSelectorTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCodeSelectorTerm) {
            return visitor.visitCodeSelectorTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CodeSelectorTermContext = CodeSelectorTermContext;
class ConceptSelectorTermContext extends TermContext {
    conceptSelector() {
        return this.getRuleContext(0, ConceptSelectorContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterConceptSelectorTerm) {
            listener.enterConceptSelectorTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConceptSelectorTerm) {
            listener.exitConceptSelectorTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConceptSelectorTerm) {
            return visitor.visitConceptSelectorTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConceptSelectorTermContext = ConceptSelectorTermContext;
class ParenthesizedTermContext extends TermContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParenthesizedTerm) {
            listener.enterParenthesizedTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenthesizedTerm) {
            listener.exitParenthesizedTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesizedTerm) {
            return visitor.visitParenthesizedTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesizedTermContext = ParenthesizedTermContext;
class QualifiedInvocationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_qualifiedInvocation; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.QualifiedInvocationContext = QualifiedInvocationContext;
class QualifiedMemberInvocationContext extends QualifiedInvocationContext {
    referentialIdentifier() {
        return this.getRuleContext(0, ReferentialIdentifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterQualifiedMemberInvocation) {
            listener.enterQualifiedMemberInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQualifiedMemberInvocation) {
            listener.exitQualifiedMemberInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifiedMemberInvocation) {
            return visitor.visitQualifiedMemberInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifiedMemberInvocationContext = QualifiedMemberInvocationContext;
class QualifiedFunctionInvocationContext extends QualifiedInvocationContext {
    qualifiedFunction() {
        return this.getRuleContext(0, QualifiedFunctionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterQualifiedFunctionInvocation) {
            listener.enterQualifiedFunctionInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQualifiedFunctionInvocation) {
            listener.exitQualifiedFunctionInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifiedFunctionInvocation) {
            return visitor.visitQualifiedFunctionInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifiedFunctionInvocationContext = QualifiedFunctionInvocationContext;
class QualifiedFunctionContext extends ParserRuleContext_1.ParserRuleContext {
    identifierOrFunctionIdentifier() {
        return this.getRuleContext(0, IdentifierOrFunctionIdentifierContext);
    }
    paramList() {
        return this.tryGetRuleContext(0, ParamListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_qualifiedFunction; }
    // @Override
    enterRule(listener) {
        if (listener.enterQualifiedFunction) {
            listener.enterQualifiedFunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQualifiedFunction) {
            listener.exitQualifiedFunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifiedFunction) {
            return visitor.visitQualifiedFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifiedFunctionContext = QualifiedFunctionContext;
class InvocationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_invocation; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.InvocationContext = InvocationContext;
class MemberInvocationContext extends InvocationContext {
    referentialIdentifier() {
        return this.getRuleContext(0, ReferentialIdentifierContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMemberInvocation) {
            listener.enterMemberInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMemberInvocation) {
            listener.exitMemberInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMemberInvocation) {
            return visitor.visitMemberInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MemberInvocationContext = MemberInvocationContext;
class FunctionInvocationContext extends InvocationContext {
    c_function() {
        return this.getRuleContext(0, C_functionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionInvocation) {
            listener.enterFunctionInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionInvocation) {
            listener.exitFunctionInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionInvocation) {
            return visitor.visitFunctionInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionInvocationContext = FunctionInvocationContext;
class ThisInvocationContext extends InvocationContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterThisInvocation) {
            listener.enterThisInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitThisInvocation) {
            listener.exitThisInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitThisInvocation) {
            return visitor.visitThisInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ThisInvocationContext = ThisInvocationContext;
class IndexInvocationContext extends InvocationContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexInvocation) {
            listener.enterIndexInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexInvocation) {
            listener.exitIndexInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndexInvocation) {
            return visitor.visitIndexInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndexInvocationContext = IndexInvocationContext;
class TotalInvocationContext extends InvocationContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTotalInvocation) {
            listener.enterTotalInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTotalInvocation) {
            listener.exitTotalInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTotalInvocation) {
            return visitor.visitTotalInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TotalInvocationContext = TotalInvocationContext;
class C_functionContext extends ParserRuleContext_1.ParserRuleContext {
    referentialIdentifier() {
        return this.getRuleContext(0, ReferentialIdentifierContext);
    }
    paramList() {
        return this.tryGetRuleContext(0, ParamListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_c_function; }
    // @Override
    enterRule(listener) {
        if (listener.enterC_function) {
            listener.enterC_function(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitC_function) {
            listener.exitC_function(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitC_function) {
            return visitor.visitC_function(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.C_functionContext = C_functionContext;
class RatioContext extends ParserRuleContext_1.ParserRuleContext {
    quantity(i) {
        if (i === undefined) {
            return this.getRuleContexts(QuantityContext);
        }
        else {
            return this.getRuleContext(i, QuantityContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_ratio; }
    // @Override
    enterRule(listener) {
        if (listener.enterRatio) {
            listener.enterRatio(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRatio) {
            listener.exitRatio(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRatio) {
            return visitor.visitRatio(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RatioContext = RatioContext;
class LiteralContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_literal; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.LiteralContext = LiteralContext;
class BooleanLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBooleanLiteral) {
            listener.enterBooleanLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBooleanLiteral) {
            listener.exitBooleanLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanLiteralContext = BooleanLiteralContext;
class NullLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNullLiteral) {
            listener.enterNullLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNullLiteral) {
            listener.exitNullLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NullLiteralContext = NullLiteralContext;
class StringLiteralContext extends LiteralContext {
    STRING() { return this.getToken(cqlParser.STRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStringLiteral) {
            listener.enterStringLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStringLiteral) {
            listener.exitStringLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringLiteralContext = StringLiteralContext;
class NumberLiteralContext extends LiteralContext {
    NUMBER() { return this.getToken(cqlParser.NUMBER, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNumberLiteral) {
            listener.enterNumberLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNumberLiteral) {
            listener.exitNumberLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumberLiteral) {
            return visitor.visitNumberLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NumberLiteralContext = NumberLiteralContext;
class DateTimeLiteralContext extends LiteralContext {
    DATETIME() { return this.getToken(cqlParser.DATETIME, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDateTimeLiteral) {
            listener.enterDateTimeLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDateTimeLiteral) {
            listener.exitDateTimeLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDateTimeLiteral) {
            return visitor.visitDateTimeLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DateTimeLiteralContext = DateTimeLiteralContext;
class TimeLiteralContext extends LiteralContext {
    TIME() { return this.getToken(cqlParser.TIME, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTimeLiteral) {
            listener.enterTimeLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTimeLiteral) {
            listener.exitTimeLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTimeLiteral) {
            return visitor.visitTimeLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TimeLiteralContext = TimeLiteralContext;
class QuantityLiteralContext extends LiteralContext {
    quantity() {
        return this.getRuleContext(0, QuantityContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantityLiteral) {
            listener.enterQuantityLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantityLiteral) {
            listener.exitQuantityLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantityLiteral) {
            return visitor.visitQuantityLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QuantityLiteralContext = QuantityLiteralContext;
class RatioLiteralContext extends LiteralContext {
    ratio() {
        return this.getRuleContext(0, RatioContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterRatioLiteral) {
            listener.enterRatioLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRatioLiteral) {
            listener.exitRatioLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRatioLiteral) {
            return visitor.visitRatioLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RatioLiteralContext = RatioLiteralContext;
class IntervalSelectorContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_intervalSelector; }
    // @Override
    enterRule(listener) {
        if (listener.enterIntervalSelector) {
            listener.enterIntervalSelector(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIntervalSelector) {
            listener.exitIntervalSelector(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIntervalSelector) {
            return visitor.visitIntervalSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntervalSelectorContext = IntervalSelectorContext;
class TupleSelectorContext extends ParserRuleContext_1.ParserRuleContext {
    tupleElementSelector(i) {
        if (i === undefined) {
            return this.getRuleContexts(TupleElementSelectorContext);
        }
        else {
            return this.getRuleContext(i, TupleElementSelectorContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_tupleSelector; }
    // @Override
    enterRule(listener) {
        if (listener.enterTupleSelector) {
            listener.enterTupleSelector(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTupleSelector) {
            listener.exitTupleSelector(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTupleSelector) {
            return visitor.visitTupleSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TupleSelectorContext = TupleSelectorContext;
class TupleElementSelectorContext extends ParserRuleContext_1.ParserRuleContext {
    referentialIdentifier() {
        return this.getRuleContext(0, ReferentialIdentifierContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_tupleElementSelector; }
    // @Override
    enterRule(listener) {
        if (listener.enterTupleElementSelector) {
            listener.enterTupleElementSelector(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTupleElementSelector) {
            listener.exitTupleElementSelector(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTupleElementSelector) {
            return visitor.visitTupleElementSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TupleElementSelectorContext = TupleElementSelectorContext;
class InstanceSelectorContext extends ParserRuleContext_1.ParserRuleContext {
    namedTypeSpecifier() {
        return this.getRuleContext(0, NamedTypeSpecifierContext);
    }
    instanceElementSelector(i) {
        if (i === undefined) {
            return this.getRuleContexts(InstanceElementSelectorContext);
        }
        else {
            return this.getRuleContext(i, InstanceElementSelectorContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_instanceSelector; }
    // @Override
    enterRule(listener) {
        if (listener.enterInstanceSelector) {
            listener.enterInstanceSelector(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstanceSelector) {
            listener.exitInstanceSelector(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstanceSelector) {
            return visitor.visitInstanceSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InstanceSelectorContext = InstanceSelectorContext;
class InstanceElementSelectorContext extends ParserRuleContext_1.ParserRuleContext {
    referentialIdentifier() {
        return this.getRuleContext(0, ReferentialIdentifierContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_instanceElementSelector; }
    // @Override
    enterRule(listener) {
        if (listener.enterInstanceElementSelector) {
            listener.enterInstanceElementSelector(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstanceElementSelector) {
            listener.exitInstanceElementSelector(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstanceElementSelector) {
            return visitor.visitInstanceElementSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InstanceElementSelectorContext = InstanceElementSelectorContext;
class ListSelectorContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    typeSpecifier() {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_listSelector; }
    // @Override
    enterRule(listener) {
        if (listener.enterListSelector) {
            listener.enterListSelector(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitListSelector) {
            listener.exitListSelector(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitListSelector) {
            return visitor.visitListSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ListSelectorContext = ListSelectorContext;
class DisplayClauseContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(cqlParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_displayClause; }
    // @Override
    enterRule(listener) {
        if (listener.enterDisplayClause) {
            listener.enterDisplayClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDisplayClause) {
            listener.exitDisplayClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDisplayClause) {
            return visitor.visitDisplayClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DisplayClauseContext = DisplayClauseContext;
class CodeSelectorContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(cqlParser.STRING, 0); }
    codesystemIdentifier() {
        return this.getRuleContext(0, CodesystemIdentifierContext);
    }
    displayClause() {
        return this.tryGetRuleContext(0, DisplayClauseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_codeSelector; }
    // @Override
    enterRule(listener) {
        if (listener.enterCodeSelector) {
            listener.enterCodeSelector(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCodeSelector) {
            listener.exitCodeSelector(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCodeSelector) {
            return visitor.visitCodeSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CodeSelectorContext = CodeSelectorContext;
class ConceptSelectorContext extends ParserRuleContext_1.ParserRuleContext {
    codeSelector(i) {
        if (i === undefined) {
            return this.getRuleContexts(CodeSelectorContext);
        }
        else {
            return this.getRuleContext(i, CodeSelectorContext);
        }
    }
    displayClause() {
        return this.tryGetRuleContext(0, DisplayClauseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_conceptSelector; }
    // @Override
    enterRule(listener) {
        if (listener.enterConceptSelector) {
            listener.enterConceptSelector(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConceptSelector) {
            listener.exitConceptSelector(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConceptSelector) {
            return visitor.visitConceptSelector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConceptSelectorContext = ConceptSelectorContext;
class KeywordContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_keyword; }
    // @Override
    enterRule(listener) {
        if (listener.enterKeyword) {
            listener.enterKeyword(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitKeyword) {
            listener.exitKeyword(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.KeywordContext = KeywordContext;
class ReservedWordContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_reservedWord; }
    // @Override
    enterRule(listener) {
        if (listener.enterReservedWord) {
            listener.enterReservedWord(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReservedWord) {
            listener.exitReservedWord(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReservedWord) {
            return visitor.visitReservedWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReservedWordContext = ReservedWordContext;
class KeywordIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_keywordIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterKeywordIdentifier) {
            listener.enterKeywordIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitKeywordIdentifier) {
            listener.exitKeywordIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKeywordIdentifier) {
            return visitor.visitKeywordIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.KeywordIdentifierContext = KeywordIdentifierContext;
class ObsoleteIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_obsoleteIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterObsoleteIdentifier) {
            listener.enterObsoleteIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitObsoleteIdentifier) {
            listener.exitObsoleteIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObsoleteIdentifier) {
            return visitor.visitObsoleteIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObsoleteIdentifierContext = ObsoleteIdentifierContext;
class FunctionIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_functionIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionIdentifier) {
            listener.enterFunctionIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionIdentifier) {
            listener.exitFunctionIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionIdentifier) {
            return visitor.visitFunctionIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionIdentifierContext = FunctionIdentifierContext;
class TypeNameIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_typeNameIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeNameIdentifier) {
            listener.enterTypeNameIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeNameIdentifier) {
            listener.exitTypeNameIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeNameIdentifier) {
            return visitor.visitTypeNameIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeNameIdentifierContext = TypeNameIdentifierContext;
class ReferentialIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    keywordIdentifier() {
        return this.tryGetRuleContext(0, KeywordIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_referentialIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterReferentialIdentifier) {
            listener.enterReferentialIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReferentialIdentifier) {
            listener.exitReferentialIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReferentialIdentifier) {
            return visitor.visitReferentialIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReferentialIdentifierContext = ReferentialIdentifierContext;
class ReferentialOrTypeNameIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    referentialIdentifier() {
        return this.tryGetRuleContext(0, ReferentialIdentifierContext);
    }
    typeNameIdentifier() {
        return this.tryGetRuleContext(0, TypeNameIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_referentialOrTypeNameIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterReferentialOrTypeNameIdentifier) {
            listener.enterReferentialOrTypeNameIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReferentialOrTypeNameIdentifier) {
            listener.exitReferentialOrTypeNameIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReferentialOrTypeNameIdentifier) {
            return visitor.visitReferentialOrTypeNameIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReferentialOrTypeNameIdentifierContext = ReferentialOrTypeNameIdentifierContext;
class IdentifierOrFunctionIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    functionIdentifier() {
        return this.tryGetRuleContext(0, FunctionIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_identifierOrFunctionIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifierOrFunctionIdentifier) {
            listener.enterIdentifierOrFunctionIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifierOrFunctionIdentifier) {
            listener.exitIdentifierOrFunctionIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierOrFunctionIdentifier) {
            return visitor.visitIdentifierOrFunctionIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierOrFunctionIdentifierContext = IdentifierOrFunctionIdentifierContext;
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(cqlParser.IDENTIFIER, 0); }
    DELIMITEDIDENTIFIER() { return this.tryGetToken(cqlParser.DELIMITEDIDENTIFIER, 0); }
    QUOTEDIDENTIFIER() { return this.tryGetToken(cqlParser.QUOTEDIDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_identifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
class ExternalConstantContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    STRING() { return this.tryGetToken(cqlParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_externalConstant; }
    // @Override
    enterRule(listener) {
        if (listener.enterExternalConstant) {
            listener.enterExternalConstant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExternalConstant) {
            listener.exitExternalConstant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExternalConstant) {
            return visitor.visitExternalConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExternalConstantContext = ExternalConstantContext;
class ParamListContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_paramList; }
    // @Override
    enterRule(listener) {
        if (listener.enterParamList) {
            listener.enterParamList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParamList) {
            listener.exitParamList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParamListContext = ParamListContext;
class QuantityContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER() { return this.getToken(cqlParser.NUMBER, 0); }
    unit() {
        return this.tryGetRuleContext(0, UnitContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_quantity; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuantity) {
            listener.enterQuantity(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuantity) {
            listener.exitQuantity(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuantity) {
            return visitor.visitQuantity(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QuantityContext = QuantityContext;
class UnitContext extends ParserRuleContext_1.ParserRuleContext {
    dateTimePrecision() {
        return this.tryGetRuleContext(0, DateTimePrecisionContext);
    }
    pluralDateTimePrecision() {
        return this.tryGetRuleContext(0, PluralDateTimePrecisionContext);
    }
    STRING() { return this.tryGetToken(cqlParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return cqlParser.RULE_unit; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnit) {
            listener.enterUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnit) {
            listener.exitUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnit) {
            return visitor.visitUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnitContext = UnitContext;
//# sourceMappingURL=cqlParser.js.map