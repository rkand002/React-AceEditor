"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CqlFinder {
    constructor(result, aliases) {
        this.result = result;
        this.aliases = aliases;
    }
    find(term) {
        if (this.aliases.find(a => a === term)) {
            return true;
        }
        for (const i of this.result.includes) {
            if (i.called === term) {
                i.hits++;
                return true;
            }
        }
        for (const v of this.result.valueSets) {
            if (v.name === term) {
                v.hits++;
                return true;
            }
        }
        return false;
    }
}
exports.default = CqlFinder;
//# sourceMappingURL=CqlFinder.js.map