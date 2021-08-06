"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const misc_1 = require("antlr4ts/misc");
class AntlrUtils {
    static findText(ctx) {
        var _a, _b;
        const stop = (_a = ctx.stop) === null || _a === void 0 ? void 0 : _a.stopIndex;
        if (typeof stop === "number") {
            const interval = new misc_1.Interval(ctx.start.startIndex, stop);
            return (_b = ctx.start.inputStream) === null || _b === void 0 ? void 0 : _b.getText(interval);
        }
        return undefined;
    }
    static findChildText(children, lexerType, occurrence = 1) {
        if (children && children.length > 0) {
            const foundChild = AntlrUtils.findChild(children, lexerType, occurrence);
            if (foundChild) {
                return AntlrUtils.findText(foundChild);
            }
        }
        return undefined;
    }
    static findChild(children, lexerType, occurrence) {
        if (!children) {
            return undefined;
        }
        let found = 0;
        return children.find((child) => {
            if (AntlrUtils.isTargetType(child, lexerType)) {
                found += 1;
                if (found === occurrence) {
                    return true;
                }
            }
            return false;
        });
    }
    static isTargetType(child, targetType) {
        if (child instanceof ParserRuleContext_1.ParserRuleContext) {
            return child.start.type === targetType;
        }
        return false;
    }
}
exports.default = AntlrUtils;
//# sourceMappingURL=AntlrUtils.js.map