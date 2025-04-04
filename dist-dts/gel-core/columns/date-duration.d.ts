import type { DateDuration } from 'gel';
import type { ColumnBuilderBaseConfig } from '~/column-builder.ts';
import type { ColumnBaseConfig } from '~/column.ts';
import { entityKind } from '~/entity.ts';
import { GelColumn, GelColumnBuilder } from './common.ts';
export type GelDateDurationBuilderInitial<TName extends string> = GelDateDurationBuilder<{
    name: TName;
    dataType: 'dateDuration';
    columnType: 'GelDateDuration';
    data: DateDuration;
    driverParam: DateDuration;
    enumValues: undefined;
}>;
export declare class GelDateDurationBuilder<T extends ColumnBuilderBaseConfig<'dateDuration', 'GelDateDuration'>> extends GelColumnBuilder<T> {
    static readonly [entityKind]: string;
    constructor(name: T['name']);
}
export declare class GelDateDuration<T extends ColumnBaseConfig<'dateDuration', 'GelDateDuration'>> extends GelColumn<T> {
    static readonly [entityKind]: string;
    getSQLType(): string;
}
export declare function dateDuration(): GelDateDurationBuilderInitial<''>;
export declare function dateDuration<TName extends string>(name: TName): GelDateDurationBuilderInitial<TName>;
