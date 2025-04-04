import type { ColumnBuilderBaseConfig } from '~/column-builder.ts';
import type { ColumnBaseConfig } from '~/column.ts';
import { entityKind } from '~/entity.ts';
import type { AnyGelTable } from '~/gel-core/table.ts';
import { GelColumn, GelColumnBuilder } from './common.ts';
export type GelDecimalBuilderInitial<TName extends string> = GelDecimalBuilder<{
    name: TName;
    dataType: 'string';
    columnType: 'GelDecimal';
    data: string;
    driverParam: string;
    enumValues: undefined;
}>;
export declare class GelDecimalBuilder<T extends ColumnBuilderBaseConfig<'string', 'GelDecimal'>> extends GelColumnBuilder<T> {
    static readonly [entityKind]: string;
    constructor(name: T['name']);
}
export declare class GelDecimal<T extends ColumnBaseConfig<'string', 'GelDecimal'>> extends GelColumn<T> {
    static readonly [entityKind]: string;
    constructor(table: AnyGelTable<{
        name: T['tableName'];
    }>, config: GelDecimalBuilder<T>['config']);
    getSQLType(): string;
}
export declare function decimal(): GelDecimalBuilderInitial<''>;
export declare function decimal<TName extends string>(name: TName): GelDecimalBuilderInitial<TName>;
