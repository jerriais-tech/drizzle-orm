import type { SQLiteDatabase, SQLiteRunResult } from 'expo-sqlite';
import { entityKind } from "../entity.cjs";
import { BaseSQLiteDatabase } from "../sqlite-core/db.cjs";
import type { DrizzleConfig } from "../utils.cjs";
export declare class ExpoSQLiteDatabase<TSchema extends Record<string, unknown> = Record<string, never>> extends BaseSQLiteDatabase<'sync', SQLiteRunResult, TSchema> {
    static readonly [entityKind]: string;
}
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: SQLiteDatabase, config?: DrizzleConfig<TSchema>): ExpoSQLiteDatabase<TSchema> & {
    $client: SQLiteDatabase;
};
