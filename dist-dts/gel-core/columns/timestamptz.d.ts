import type { ColumnBuilderBaseConfig } from '~/column-builder.ts';
import type { ColumnBaseConfig } from '~/column.ts';
import { entityKind } from '~/entity.ts';
import type { AnyGelTable } from '~/gel-core/table.ts';
import { GelColumn } from './common.ts';
import { GelLocalDateColumnBaseBuilder } from './date.common.ts';
export type GelTimestampTzBuilderInitial<TName extends string> = GelTimestampTzBuilder<{
    name: TName;
    dataType: 'date';
    columnType: 'GelTimestampTz';
    data: Date;
    driverParam: Date;
    enumValues: undefined;
}>;
export declare class GelTimestampTzBuilder<T extends ColumnBuilderBaseConfig<'date', 'GelTimestampTz'>> extends GelLocalDateColumnBaseBuilder<T> {
    static readonly [entityKind]: string;
    constructor(name: T['name']);
}
export declare class GelTimestampTz<T extends ColumnBaseConfig<'date', 'GelTimestampTz'>> extends GelColumn<T> {
    static readonly [entityKind]: string;
    constructor(table: AnyGelTable<{
        name: T['tableName'];
    }>, config: GelTimestampTzBuilder<T>['config']);
    getSQLType(): string;
}
export declare function timestamptz(): GelTimestampTzBuilderInitial<''>;
export declare function timestamptz<TName extends string>(name: TName): GelTimestampTzBuilderInitial<TName>;
