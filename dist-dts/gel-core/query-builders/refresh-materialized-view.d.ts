import { entityKind } from '~/entity.ts';
import type { GelDialect } from '~/gel-core/dialect.ts';
import type { GelPreparedQuery, GelQueryResultHKT, GelQueryResultKind, GelSession, PreparedQueryConfig } from '~/gel-core/session.ts';
import type { GelMaterializedView } from '~/gel-core/view.ts';
import { QueryPromise } from '~/query-promise.ts';
import type { RunnableQuery } from '~/runnable-query.ts';
import type { Query, SQLWrapper } from '~/sql/sql.ts';
export interface GelRefreshMaterializedView<TQueryResult extends GelQueryResultHKT> extends QueryPromise<GelQueryResultKind<TQueryResult, never>>, RunnableQuery<GelQueryResultKind<TQueryResult, never>, 'gel'>, SQLWrapper {
    readonly _: {
        readonly dialect: 'gel';
        readonly result: GelQueryResultKind<TQueryResult, never>;
    };
}
export declare class GelRefreshMaterializedView<TQueryResult extends GelQueryResultHKT> extends QueryPromise<GelQueryResultKind<TQueryResult, never>> implements RunnableQuery<GelQueryResultKind<TQueryResult, never>, 'gel'>, SQLWrapper {
    private session;
    private dialect;
    static readonly [entityKind]: string;
    private config;
    constructor(view: GelMaterializedView, session: GelSession, dialect: GelDialect);
    concurrently(): this;
    withNoData(): this;
    toSQL(): Query;
    prepare(name: string): GelPreparedQuery<PreparedQueryConfig & {
        execute: GelQueryResultKind<TQueryResult, never>;
    }>;
    execute: ReturnType<this['prepare']>['execute'];
}
