import { bigint } from "./bigint.cjs";
import { binary } from "./binary.cjs";
import { boolean } from "./boolean.cjs";
import { char } from "./char.cjs";
import { customType } from "./custom.cjs";
import { date } from "./date.cjs";
import { datetime } from "./datetime.cjs";
import { decimal } from "./decimal.cjs";
import { double } from "./double.cjs";
import { mysqlEnum } from "./enum.cjs";
import { float } from "./float.cjs";
import { int } from "./int.cjs";
import { json } from "./json.cjs";
import { mediumint } from "./mediumint.cjs";
import { real } from "./real.cjs";
import { serial } from "./serial.cjs";
import { smallint } from "./smallint.cjs";
import { longtext, mediumtext, text, tinytext } from "./text.cjs";
import { time } from "./time.cjs";
import { timestamp } from "./timestamp.cjs";
import { tinyint } from "./tinyint.cjs";
import { varbinary } from "./varbinary.cjs";
import { varchar } from "./varchar.cjs";
import { year } from "./year.cjs";
export declare function getMySqlColumnBuilders(): {
    bigint: typeof bigint;
    binary: typeof binary;
    boolean: typeof boolean;
    char: typeof char;
    customType: typeof customType;
    date: typeof date;
    datetime: typeof datetime;
    decimal: typeof decimal;
    double: typeof double;
    mysqlEnum: typeof mysqlEnum;
    float: typeof float;
    int: typeof int;
    json: typeof json;
    mediumint: typeof mediumint;
    real: typeof real;
    serial: typeof serial;
    smallint: typeof smallint;
    text: typeof text;
    time: typeof time;
    timestamp: typeof timestamp;
    tinyint: typeof tinyint;
    varbinary: typeof varbinary;
    varchar: typeof varchar;
    year: typeof year;
    longtext: typeof longtext;
    mediumtext: typeof mediumtext;
    tinytext: typeof tinytext;
};
export type MySqlColumnBuilders = ReturnType<typeof getMySqlColumnBuilders>;
