import { CqlResult } from "../dto";
export default class CqlFinder {
    private result;
    private aliases;
    constructor(result: CqlResult, aliases: string[]);
    find(term: string): boolean;
}
//# sourceMappingURL=CqlFinder.d.ts.map