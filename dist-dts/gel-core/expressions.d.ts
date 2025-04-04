import type { GelColumn } from '~/gel-core/columns/index.ts';
import type { Placeholder, SQL, SQLWrapper } from '~/sql/sql.ts';
export * from '~/expressions.ts';
export declare function concat(column: GelColumn | SQL.Aliased, value: string | Placeholder | SQLWrapper): SQL;
export declare function substring(column: GelColumn | SQL.Aliased, { from, for: _for }: {
    from?: number | Placeholder | SQLWrapper;
    for?: number | Placeholder | SQLWrapper;
}): SQL;
