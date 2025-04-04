import { entityKind } from "../entity.cjs";
import type { SQL } from "../sql/sql.cjs";
import type { SQLiteTable } from "./table.cjs";
export declare class CheckBuilder {
    name: string;
    value: SQL;
    static readonly [entityKind]: string;
    protected brand: 'SQLiteConstraintBuilder';
    constructor(name: string, value: SQL);
    build(table: SQLiteTable): Check;
}
export declare class Check {
    table: SQLiteTable;
    static readonly [entityKind]: string;
    _: {
        brand: 'SQLiteCheck';
    };
    readonly name: string;
    readonly value: SQL;
    constructor(table: SQLiteTable, builder: CheckBuilder);
}
export declare function check(name: string, value: SQL): CheckBuilder;
