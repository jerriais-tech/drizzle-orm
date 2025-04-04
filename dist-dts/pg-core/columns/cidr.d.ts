import type { ColumnBuilderBaseConfig } from '~/column-builder.ts';
import type { ColumnBaseConfig } from '~/column.ts';
import { entityKind } from '~/entity.ts';
import { PgColumn, PgColumnBuilder } from './common.ts';
export type PgCidrBuilderInitial<TName extends string> = PgCidrBuilder<{
    name: TName;
    dataType: 'string';
    columnType: 'PgCidr';
    data: string;
    driverParam: string;
    enumValues: undefined;
}>;
export declare class PgCidrBuilder<T extends ColumnBuilderBaseConfig<'string', 'PgCidr'>> extends PgColumnBuilder<T> {
    static readonly [entityKind]: string;
    constructor(name: T['name']);
}
export declare class PgCidr<T extends ColumnBaseConfig<'string', 'PgCidr'>> extends PgColumn<T> {
    static readonly [entityKind]: string;
    getSQLType(): string;
}
export declare function cidr(): PgCidrBuilderInitial<''>;
export declare function cidr<TName extends string>(name: TName): PgCidrBuilderInitial<TName>;
