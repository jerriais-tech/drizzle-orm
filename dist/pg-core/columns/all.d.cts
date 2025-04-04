import { bigint } from "./bigint.cjs";
import { bigserial } from "./bigserial.cjs";
import { boolean } from "./boolean.cjs";
import { char } from "./char.cjs";
import { cidr } from "./cidr.cjs";
import { customType } from "./custom.cjs";
import { date } from "./date.cjs";
import { doublePrecision } from "./double-precision.cjs";
import { inet } from "./inet.cjs";
import { integer } from "./integer.cjs";
import { interval } from "./interval.cjs";
import { json } from "./json.cjs";
import { jsonb } from "./jsonb.cjs";
import { line } from "./line.cjs";
import { macaddr } from "./macaddr.cjs";
import { macaddr8 } from "./macaddr8.cjs";
import { numeric } from "./numeric.cjs";
import { point } from "./point.cjs";
import { geometry } from "./postgis_extension/geometry.cjs";
import { real } from "./real.cjs";
import { serial } from "./serial.cjs";
import { smallint } from "./smallint.cjs";
import { smallserial } from "./smallserial.cjs";
import { text } from "./text.cjs";
import { time } from "./time.cjs";
import { timestamp } from "./timestamp.cjs";
import { uuid } from "./uuid.cjs";
import { varchar } from "./varchar.cjs";
import { bit } from "./vector_extension/bit.cjs";
import { halfvec } from "./vector_extension/halfvec.cjs";
import { sparsevec } from "./vector_extension/sparsevec.cjs";
import { vector } from "./vector_extension/vector.cjs";
export declare function getPgColumnBuilders(): {
    bigint: typeof bigint;
    bigserial: typeof bigserial;
    boolean: typeof boolean;
    char: typeof char;
    cidr: typeof cidr;
    customType: typeof customType;
    date: typeof date;
    doublePrecision: typeof doublePrecision;
    inet: typeof inet;
    integer: typeof integer;
    interval: typeof interval;
    json: typeof json;
    jsonb: typeof jsonb;
    line: typeof line;
    macaddr: typeof macaddr;
    macaddr8: typeof macaddr8;
    numeric: typeof numeric;
    point: typeof point;
    geometry: typeof geometry;
    real: typeof real;
    serial: typeof serial;
    smallint: typeof smallint;
    smallserial: typeof smallserial;
    text: typeof text;
    time: typeof time;
    timestamp: typeof timestamp;
    uuid: typeof uuid;
    varchar: typeof varchar;
    bit: typeof bit;
    halfvec: typeof halfvec;
    sparsevec: typeof sparsevec;
    vector: typeof vector;
};
export type PgColumnsBuilders = ReturnType<typeof getPgColumnBuilders>;
