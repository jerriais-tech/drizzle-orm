import { type Client, type ConnectOptions } from 'gel';
import { entityKind } from '~/entity.ts';
import { GelDatabase } from '~/gel-core/db.ts';
import { GelDialect } from '~/gel-core/dialect.ts';
import type { GelQueryResultHKT } from '~/gel-core/session.ts';
import type { Logger } from '~/logger.ts';
import { type RelationalSchemaConfig, type TablesRelationalConfig } from '~/relations.ts';
import { type DrizzleConfig } from '~/utils.ts';
import type { GelClient } from './session.ts';
import { GelDbSession } from './session.ts';
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
