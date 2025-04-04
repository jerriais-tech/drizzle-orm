import { type Connection as CallbackConnection, type Pool as CallbackPool, type PoolOptions } from 'mysql2';
import type { Connection, Pool } from 'mysql2/promise';
import { entityKind } from "../entity.cjs";
import type { Logger } from "../logger.cjs";
import { type RelationalSchemaConfig, type TablesRelationalConfig } from "../relations.cjs";
import { SingleStoreDatabase } from "../singlestore-core/db.cjs";
import { SingleStoreDialect } from "../singlestore-core/dialect.cjs";
import { type DrizzleConfig, type IfNotImported, type ImportTypeError } from "../utils.cjs";
import type { SingleStoreDriverClient, SingleStoreDriverPreparedQueryHKT, SingleStoreDriverQueryResultHKT } from "./session.cjs";
import { SingleStoreDriverSession } from "./session.cjs";
export interface SingleStoreDriverOptions {
    logger?: Logger;
}
export declare class SingleStoreDriverDriver {
    private client;
    private dialect;
    private options;
    static readonly [entityKind]: string;
    constructor(client: SingleStoreDriverClient, dialect: SingleStoreDialect, options?: SingleStoreDriverOptions);
    createSession(schema: RelationalSchemaConfig<TablesRelationalConfig> | undefined): SingleStoreDriverSession<Record<string, unknown>, TablesRelationalConfig>;
}
export { SingleStoreDatabase } from "../singlestore-core/db.cjs";
export declare class SingleStoreDriverDatabase<TSchema extends Record<string, unknown> = Record<string, never>> extends SingleStoreDatabase<SingleStoreDriverQueryResultHKT, SingleStoreDriverPreparedQueryHKT, TSchema> {
    static readonly [entityKind]: string;
}
export type SingleStoreDriverDrizzleConfig<TSchema extends Record<string, unknown> = Record<string, never>> = Omit<DrizzleConfig<TSchema>, 'schema'> & ({
    schema: TSchema;
} | {
    schema?: undefined;
});
export type AnySingleStoreDriverConnection = Pool | Connection | CallbackPool | CallbackConnection;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>, TClient extends AnySingleStoreDriverConnection = CallbackPool>(...params: IfNotImported<CallbackPool, [
    ImportTypeError<'singlestore'>
], [
    TClient | string
] | [
    TClient | string,
    SingleStoreDriverDrizzleConfig<TSchema>
] | [
    (SingleStoreDriverDrizzleConfig<TSchema> & ({
        connection: string | PoolOptions;
    } | {
        client: TClient;
    }))
]>): SingleStoreDriverDatabase<TSchema> & {
    $client: TClient;
};
export declare namespace drizzle {
    function mock<TSchema extends Record<string, unknown> = Record<string, never>>(config?: SingleStoreDriverDrizzleConfig<TSchema>): SingleStoreDriverDatabase<TSchema> & {
        $client: '$client is not available on drizzle.mock()';
    };
}
