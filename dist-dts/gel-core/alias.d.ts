import type { BuildAliasTable } from './query-builders/select.types.ts';
import type { GelTable } from './table.ts';
import type { GelViewBase } from './view-base.ts';
export declare function alias<TTable extends GelTable | GelViewBase, TAlias extends string>(table: TTable, alias: TAlias): BuildAliasTable<TTable, TAlias>;
