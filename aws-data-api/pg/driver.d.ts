import { RDSDataClient, type RDSDataClientConfig } from '@aws-sdk/client-rds-data';
import { entityKind } from "../../entity.js";
import type { Logger } from "../../logger.js";
import { PgDatabase } from "../../pg-core/db.js";
import { PgDialect } from "../../pg-core/dialect.js";
import type { PgInsertConfig, PgTable, TableConfig } from "../../pg-core/index.js";
import type { PgRaw } from "../../pg-core/query-builders/raw.js";
import { type SQL, type SQLWrapper } from "../../sql/sql.js";
import type { DrizzleConfig, UpdateSet } from "../../utils.js";
import type { AwsDataApiClient, AwsDataApiPgQueryResult, AwsDataApiPgQueryResultHKT } from "./session.js";
export interface PgDriverOptions {
    logger?: Logger;
    database: string;
    resourceArn: string;
    secretArn: string;
}
export interface DrizzleAwsDataApiPgConfig<TSchema extends Record<string, unknown> = Record<string, never>> extends DrizzleConfig<TSchema> {
    database: string;
    resourceArn: string;
    secretArn: string;
}
export declare class AwsDataApiPgDatabase<TSchema extends Record<string, unknown> = Record<string, never>> extends PgDatabase<AwsDataApiPgQueryResultHKT, TSchema> {
    static readonly [entityKind]: string;
    execute<TRow extends Record<string, unknown> = Record<string, unknown>>(query: SQLWrapper | string): PgRaw<AwsDataApiPgQueryResult<TRow>>;
}
export declare class AwsPgDialect extends PgDialect {
    static readonly [entityKind]: string;
    escapeParam(num: number): string;
    buildInsertQuery({ table, values, onConflict, returning, select, withList }: PgInsertConfig<PgTable<TableConfig>>): SQL<unknown>;
    buildUpdateSet(table: PgTable<TableConfig>, set: UpdateSet): SQL<unknown>;
}
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>, TClient extends AwsDataApiClient = RDSDataClient>(...params: [
    TClient,
    DrizzleAwsDataApiPgConfig<TSchema>
] | [
    ((DrizzleConfig<TSchema> & {
        connection: RDSDataClientConfig & Omit<DrizzleAwsDataApiPgConfig, keyof DrizzleConfig>;
    }) | (DrizzleAwsDataApiPgConfig<TSchema> & {
        client: TClient;
    }))
]): AwsDataApiPgDatabase<TSchema> & {
    $client: TClient;
};
export declare namespace drizzle {
    function mock<TSchema extends Record<string, unknown> = Record<string, never>>(config: DrizzleAwsDataApiPgConfig<TSchema>): AwsDataApiPgDatabase<TSchema> & {
        $client: '$client is not available on drizzle.mock()';
    };
}
