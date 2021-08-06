'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const tree_1 = require('antlr4ts/tree');
const generated_1 = require('../generated');
const AntlrUtils_1 = __importDefault(require('./AntlrUtils'));
const CqlFinder_1 = __importDefault(require('./util/CqlFinder'));
const CqlErrorCreator_1 = __importDefault(require('./CqlErrorCreator'));
class CqlExpressionVisitor extends tree_1.AbstractParseTreeVisitor {
  constructor(result, aliases = []) {
    super();
    this.result = result;
    this.aliases = aliases;
    this.finder = new CqlFinder_1.default(result, aliases);
  }
  defaultResult() {}
  visit(tree) {
    tree.accept(this);
    CqlExpressionVisitor.count++;
    console.log(
      CqlExpressionVisitor.count +
        ': ' +
        tree.constructor.name +
        '\n\t' +
        tree.text
    );
  }
  visitChildren(/*@NotNull*/ node) {
    for (let i = 0; i < node.childCount; i++) {
      this.visit(node.getChild(i));
    }
  }
  visitAlias(ctx) {
    const alias = AntlrUtils_1.default.findChildText(
      ctx.children,
      generated_1.cqlLexer.IDENTIFIER
    );
    if (alias) {
      this.aliases.push(alias);
    }
  }
  visitInvocationTerm(ctx) {
    let term = AntlrUtils_1.default.findChildText(ctx.children, ctx.start.type);
    console.log('visitInvocationTerm->' + term);
    if (term) {
      // term = term.replace(/"/g, ""); // remove double quotes
      if (!this.finder.find(term)) {
        const cqlError = new CqlErrorCreator_1.default(ctx).buildDao();
        if (cqlError) {
          this.result.errors.push(cqlError);
        }
      }
    }
  }
}
exports.default = CqlExpressionVisitor;
CqlExpressionVisitor.count = 0;
//# sourceMappingURL=CqlExpressionVisitor.js.map
