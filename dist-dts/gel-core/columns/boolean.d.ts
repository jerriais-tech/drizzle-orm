import type { ColumnBuilderBaseConfig } from '~/column-builder.ts';
import type { ColumnBaseConfig } from '~/column.ts';
import { entityKind } from '~/entity.ts';
import { GelColumn, GelColumnBuilder } from './common.ts';
export type GelBooleanBuilderInitial<TName extends string> = GelBooleanBuilder<{
    name: TName;
    dataType: 'boolean';
    columnType: 'GelBoolean';
    data: boolean;
    driverParam: boolean;
    enumValues: undefined;
}>;
export declare class GelBooleanBuilder<T extends ColumnBuilderBaseConfig<'boolean', 'GelBoolean'>> extends GelColumnBuilder<T> {
    static readonly [entityKind]: string;
    constructor(name: T['name']);
}
export declare class GelBoolean<T extends ColumnBaseConfig<'boolean', 'GelBoolean'>> extends GelColumn<T> {
    static readonly [entityKind]: string;
    getSQLType(): string;
}
export declare function boolean(): GelBooleanBuilderInitial<''>;
export declare function boolean<TName extends string>(name: TName): GelBooleanBuilderInitial<TName>;
