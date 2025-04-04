import type { ColumnBuilderBaseConfig } from '~/column-builder.ts';
import type { ColumnBaseConfig } from '~/column.ts';
import { entityKind } from '~/entity.ts';
import { GelColumn } from './common.ts';
import { GelIntColumnBaseBuilder } from './int.common.ts';
export type GelBigInt64BuilderInitial<TName extends string> = GelBigInt64Builder<{
    name: TName;
    dataType: 'bigint';
    columnType: 'GelBigInt64';
    data: bigint;
    driverParam: bigint;
    enumValues: undefined;
}>;
export declare class GelBigInt64Builder<T extends ColumnBuilderBaseConfig<'bigint', 'GelBigInt64'>> extends GelIntColumnBaseBuilder<T> {
    static readonly [entityKind]: string;
    constructor(name: T['name']);
}
export declare class GelBigInt64<T extends ColumnBaseConfig<'bigint', 'GelBigInt64'>> extends GelColumn<T> {
    static readonly [entityKind]: string;
    getSQLType(): string;
    mapFromDriverValue(value: string): bigint;
}
export declare function bigintT(): GelBigInt64BuilderInitial<''>;
export declare function bigintT<TName extends string>(name: TName): GelBigInt64BuilderInitial<TName>;
