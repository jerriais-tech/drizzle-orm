import type { ColumnBuilderBaseConfig } from '~/column-builder.ts';
import type { ColumnBaseConfig } from '~/column.ts';
import { entityKind } from '~/entity.ts';
import { GelColumn, GelColumnBuilder } from './common.ts';
export type GelBytesBuilderInitial<TName extends string> = GelBytesBuilder<{
    name: TName;
    dataType: 'buffer';
    columnType: 'GelBytes';
    data: Uint8Array;
    driverParam: Uint8Array | Buffer;
    enumValues: undefined;
}>;
export declare class GelBytesBuilder<T extends ColumnBuilderBaseConfig<'buffer', 'GelBytes'>> extends GelColumnBuilder<T> {
    static readonly [entityKind]: string;
    constructor(name: T['name']);
}
export declare class GelBytes<T extends ColumnBaseConfig<'buffer', 'GelBytes'>> extends GelColumn<T> {
    static readonly [entityKind]: string;
    getSQLType(): string;
}
export declare function bytes(): GelBytesBuilderInitial<''>;
export declare function bytes<TName extends string>(name: TName): GelBytesBuilderInitial<TName>;
