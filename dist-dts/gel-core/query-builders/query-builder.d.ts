import { entityKind } from '~/entity.ts';
import type { GelDialectConfig } from '~/gel-core/dialect.ts';
import { GelDialect } from '~/gel-core/dialect.ts';
import type { TypedQueryBuilder } from '~/query-builders/query-builder.ts';
import type { ColumnsSelection, SQLWrapper } from '~/sql/sql.ts';
import { WithSubquery } from '~/subquery.ts';
import type { GelColumn } from '../columns/index.ts';
import type { WithSubqueryWithSelection } from '../subquery.ts';
import { GelSelectBuilder } from './select.ts';
import type { SelectedFields } from './select.types.ts';
export declare class QueryBuilder {
    static readonly [entityKind]: string;
    private dialect;
    private dialectConfig;
    constructor(dialect?: GelDialect | GelDialectConfig);
    $with<TAlias extends string>(alias: TAlias): {
        as<TSelection extends ColumnsSelection>(qb: TypedQueryBuilder<TSelection> | ((qb: QueryBuilder) => TypedQueryBuilder<TSelection>)): WithSubqueryWithSelection<TSelection, TAlias>;
    };
    with(...queries: WithSubquery[]): {
        select: {
            (): GelSelectBuilder<undefined, "qb">;
            <TSelection extends SelectedFields>(fields: TSelection): GelSelectBuilder<TSelection, "qb">;
        };
        selectDistinct: {
            (): GelSelectBuilder<undefined, "qb">;
            <TSelection extends SelectedFields>(fields: TSelection): GelSelectBuilder<TSelection, "qb">;
        };
        selectDistinctOn: {
            (on: (GelColumn | SQLWrapper)[]): GelSelectBuilder<undefined, "qb">;
            <TSelection extends SelectedFields>(on: (GelColumn | SQLWrapper)[], fields: TSelection): GelSelectBuilder<TSelection, "qb">;
        };
    };
    select(): GelSelectBuilder<undefined, 'qb'>;
    select<TSelection extends SelectedFields>(fields: TSelection): GelSelectBuilder<TSelection, 'qb'>;
    selectDistinct(): GelSelectBuilder<undefined>;
    selectDistinct<TSelection extends SelectedFields>(fields: TSelection): GelSelectBuilder<TSelection>;
    selectDistinctOn(on: (GelColumn | SQLWrapper)[]): GelSelectBuilder<undefined>;
    selectDistinctOn<TSelection extends SelectedFields>(on: (GelColumn | SQLWrapper)[], fields: TSelection): GelSelectBuilder<TSelection>;
    private getDialect;
}
