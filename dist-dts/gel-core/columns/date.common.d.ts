import type { ColumnBuilderBaseConfig, ColumnDataType } from '~/column-builder.ts';
import { entityKind } from '~/entity.ts';
import { GelColumnBuilder } from './common.ts';
export declare abstract class GelLocalDateColumnBaseBuilder<T extends ColumnBuilderBaseConfig<ColumnDataType, string>, TRuntimeConfig extends object = object> extends GelColumnBuilder<T, TRuntimeConfig> {
    static readonly [entityKind]: string;
    defaultNow(): import("~/column-builder.ts").HasDefault<this>;
}
