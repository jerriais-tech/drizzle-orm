import type { LocalDate } from 'gel';
import type { ColumnBuilderBaseConfig } from '~/column-builder.ts';
import type { ColumnBaseConfig } from '~/column.ts';
import { entityKind } from '~/entity.ts';
import { GelColumn } from './common.ts';
import { GelLocalDateColumnBaseBuilder } from './date.common.ts';
export type GelLocalDateStringBuilderInitial<TName extends string> = GelLocalDateStringBuilder<{
    name: TName;
    dataType: 'localDate';
    columnType: 'GelLocalDateString';
    data: LocalDate;
    driverParam: LocalDate;
    enumValues: undefined;
}>;
export declare class GelLocalDateStringBuilder<T extends ColumnBuilderBaseConfig<'localDate', 'GelLocalDateString'>> extends GelLocalDateColumnBaseBuilder<T> {
    static readonly [entityKind]: string;
    constructor(name: T['name']);
}
export declare class GelLocalDateString<T extends ColumnBaseConfig<'localDate', 'GelLocalDateString'>> extends GelColumn<T> {
    static readonly [entityKind]: string;
    getSQLType(): string;
}
export declare function localDate(): GelLocalDateStringBuilderInitial<''>;
export declare function localDate<TName extends string>(name: TName): GelLocalDateStringBuilderInitial<TName>;
