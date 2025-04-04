import type { ColumnBuilderBaseConfig, ColumnDataType, GeneratedIdentityConfig, IsIdentity } from '~/column-builder.ts';
import { entityKind } from '~/entity.ts';
import type { GelSequenceOptions } from '../sequence.ts';
import { GelColumnBuilder } from './common.ts';
export declare abstract class GelIntColumnBaseBuilder<T extends ColumnBuilderBaseConfig<ColumnDataType, string>> extends GelColumnBuilder<T, {
    generatedIdentity: GeneratedIdentityConfig;
}> {
    static readonly [entityKind]: string;
    generatedAlwaysAsIdentity(sequence?: GelSequenceOptions & {
        name?: string;
    }): IsIdentity<this, 'always'>;
    generatedByDefaultAsIdentity(sequence?: GelSequenceOptions & {
        name?: string;
    }): IsIdentity<this, 'byDefault'>;
}
