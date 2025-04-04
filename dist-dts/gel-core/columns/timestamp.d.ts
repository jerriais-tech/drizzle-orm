import type { LocalDateTime } from 'gel';
import type { ColumnBuilderBaseConfig } from '~/column-builder.ts';
import type { ColumnBaseConfig } from '~/column.ts';
import { entityKind } from '~/entity.ts';
import type { AnyGelTable } from '~/gel-core/table.ts';
import { GelColumn } from './common.ts';
import { GelLocalDateColumnBaseBuilder } from './date.common.ts';
export type GelTimestampBuilderInitial<TName extends string> = GelTimestampBuilder<{
    name: TName;
    dataType: 'localDateTime';
    columnType: 'GelTimestamp';
    data: LocalDateTime;
    driverParam: LocalDateTime;
    enumValues: undefined;
}>;
export declare class GelTimestampBuilder<T extends ColumnBuilderBaseConfig<'localDateTime', 'GelTimestamp'>> extends GelLocalDateColumnBaseBuilder<T> {
    static readonly [entityKind]: string;
    constructor(name: T['name']);
}
export declare class GelTimestamp<T extends ColumnBaseConfig<'localDateTime', 'GelTimestamp'>> extends GelColumn<T> {
    static readonly [entityKind]: string;
    constructor(table: AnyGelTable<{
        name: T['tableName'];
    }>, config: GelTimestampBuilder<T>['config']);
    getSQLType(): string;
}
export declare function timestamp(): GelTimestampBuilderInitial<''>;
export declare function timestamp<TName extends string>(name: TName): GelTimestampBuilderInitial<TName>;
