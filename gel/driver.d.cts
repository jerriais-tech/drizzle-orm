import { type Client, type ConnectOptions } from 'gel';
import { entityKind } from "../entity.cjs";
import { GelDatabase } from "../gel-core/db.cjs";
import { GelDialect } from "../gel-core/dialect.cjs";
import type { GelQueryResultHKT } from "../gel-core/session.cjs";
import type { Logger } from "../logger.cjs";
import { type RelationalSchemaConfig, type TablesRelationalConfig } from "../relations.cjs";
import { type DrizzleConfig } from "../utils.cjs";
import type { GelClient } from "./session.cjs";
import { GelDbSession } from "./session.cjs";
export interface GelDriverOptions {
    logger?: Logger;
}
export declare class GelDriver {
    private client;
    private dialect;
    private options;
    static readonly [entityKind]: string;
    constructor(client: GelClient, dialect: GelDialect, options?: GelDriverOptions);
    createSession(schema: RelationalSchemaConfig<TablesRelationalConfig> | undefined): GelDbSession<Record<string, unknown>, TablesRelationalConfig>;
}
export declare class GelJsDatabase<TSchema extends Record<string, unknown> = Record<string, never>> extends GelDatabase<GelQueryResultHKT, TSchema> {
    static readonly [entityKind]: string;
}
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>, TClient extends GelClient = Client>(...params: [TClient | string] | [TClient | string, DrizzleConfig<TSchema>] | [
    DrizzleConfig<TSchema> & ({
        connection: string | ConnectOptions;
    } | {
        client: TClient;
    })
]): GelJsDatabase<TSchema> & {
    $client: TClient;
};
export declare namespace drizzle {
    function mock<TSchema extends Record<string, unknown> = Record<string, never>>(config?: DrizzleConfig<TSchema>): GelJsDatabase<TSchema> & {
        $client: '$client is not available on drizzle.mock()';
    };
}
