import { entityKind } from '~/entity.ts';
import type { SQL } from '~/sql/index.ts';
import type { GelTable } from './table.ts';
export declare class CheckBuilder {
    name: string;
    value: SQL;
    static readonly [entityKind]: string;
    protected brand: 'GelConstraintBuilder';
    constructor(name: string, value: SQL);
}
export declare class Check {
    table: GelTable;
    static readonly [entityKind]: string;
    readonly name: string;
    readonly value: SQL;
    constructor(table: GelTable, builder: CheckBuilder);
}
export declare function check(name: string, value: SQL): CheckBuilder;
