import type { ColumnBuilderBaseConfig } from '~/column-builder.ts';
import type { ColumnBaseConfig } from '~/column.ts';
import { entityKind } from '~/entity.ts';
import type { AnyGelTable } from '~/gel-core/table.ts';
import { GelColumn, GelColumnBuilder } from './common.ts';
export type GelRealBuilderInitial<TName extends string> = GelRealBuilder<{
    name: TName;
    dataType: 'number';
    columnType: 'GelReal';
    data: number;
    driverParam: number;
    enumValues: undefined;
}>;
export declare class GelRealBuilder<T extends ColumnBuilderBaseConfig<'number', 'GelReal'>> extends GelColumnBuilder<T, {
    length: number | undefined;
}> {
    static readonly [entityKind]: string;
    constructor(name: T['name'], length?: number);
}
export declare class GelReal<T extends ColumnBaseConfig<'number', 'GelReal'>> extends GelColumn<T> {
    static readonly [entityKind]: string;
    constructor(table: AnyGelTable<{
        name: T['tableName'];
    }>, config: GelRealBuilder<T>['config']);
    getSQLType(): string;
}
export declare function real(): GelRealBuilderInitial<''>;
export declare function real<TName extends string>(name: TName): GelRealBuilderInitial<TName>;
