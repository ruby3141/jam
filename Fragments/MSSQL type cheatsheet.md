#MSSQL
## MSSQL type cheatsheet

### Numbers
| Type             | Range                        | Storage        | Remark                          |
| ---------------- | ---------------------------- | -------------- | ------------------------------- |
| tinyint          | 0 ~ 255                      | 1 Byte         | unsigned                        |
| smallint         | -32,768 ~ 32767              | 2 Byte         |                                 |
| int              | -2^31 ~ 2^31 - 1             | 4 Byte         | 2^31 ~= 2.1e9                   |
| bigint           | -2^63 ~ 2^63 - 1             | 8 Byte         | 2^63 ~= 9.2e18                  |
| decimal(p, s)    | p = 9/19/28/38 decimal digit | 5/9/13/17 Byte | = numeric(p, s)                 |
| float(24) = real | ±(3.40e38 ~ 1.18e-38)        | 4 Byte         | IEEE 754 single precision       |
| float(53)        | ±(1.79e308 ~ 2.23e-308)      | 8 Byte         | IEEE 754 double precision       |
| bit              | 0 or 1                       | 1 bit          | 8 bit columns packs into 1 Byte |
| money            | bigint / 10000               | 8 byte         | Don't.                          |
| smallmoney       | int / 10000                  | 4 byte         | Don't.                          |

### Date and Time
| Type              | Representation                     | Range                                             | Storage | Resolution | Remark                               |
| ----------------- | ---------------------------------- | ------------------------------------------------- | ------- | ---------- | ------------------------------------ |
| date              | yyyy-MM-dd                         | 0001-01-01 ~ 9999-12-31                           | 3 Byte  | 1 Day      |                                      |
| time(p)           | HH:mm:ss.fffffff                   | 00:00:00.0000000 ~ 23:59:59.9999999               | 5 Byte  | 100ns      | default p = 7                        |
| datetime2(p)      | yyyy-MM-dd HH:mm:ss.fffffff        | = date + time                                     | 8 Byte  | 100ns      | default p = 7                        |
| datetimeoffset(p) | yyyy-MM-dd HH:mm:ss.fffffff ±hh:mm | = datetime2 + timezone offset                     | 10 Byte | 100ns      | default p = 7                        |
| smalldatetime     | yyyy-MM-dd HH:mm:ss                | 1900-01-01 00:00:00 ~ 2017-06-06 23:59:59         | 4 Byte  | 1s         | legacy                               |
| datetime          | yyyy-MM-dd HH:mm:ss.fff            | 1753-01-01 00:00:00.000 ~ 9999-12-31 23.59.59.997 | 8 Byte  | 0.003s     | legacy, rounds to .000 / .003 / .007 |

### String and Binary
prefix "n-": UTF-16 (use collation encoding if not)
prefix "var-" variable storage size (fixed size if not)

| Type                     | n                                      | Storage                   | Remark                        |
| ------------------------ | -------------------------------------- | ------------------------- | ----------------------------- |
| char(n) / nchar(n)       | 1 <= n <= 8000                         | n * (character size) Byte | character size is 2 on UTF-16 |
| varchar(n) / nvarchar(n) | 1 <= n <= 8000, or "max" for 2GB limit | 2 Byte + payload size     | character size is 2 on UTF-16 |
| binary(n)                | 1 <= n <= 8000                         | n Byte                    |                               |
| varbinary(n)             | 1 <= n <= 8000, or "max" for 2GB limit | 2 Byte + payload size     |                               |
| text / ntext / image     | 2GB limit                              | payload size              | DEPRECATED, Don't.            |

### ETC.
| Type                   | Description                                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| uniqueidentifier       | 16Byte GUID. Use NEWID() for new value. use 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' format hex string to handle values.                            |
| rowversion = timestamp | NOT A TIME RELATED TYPE. Autoincrements on row update. On one table, only one column with this type can be defined.                               |
| geography              | Type about ellipsoidal(or the Earth) coordinates. Read https://learn.microsoft.com/en-us/sql/relational-databases/spatial/spatial-data-sql-server |
| geometry               | Type about Euclidean(flat) coordinates. Read https://learn.microsoft.com/en-us/sql/relational-databases/spatial/spatial-data-sql-server           |
| vector(d, t)           | Vector of IEEE 754 single precision(or half precision when enabled) values. MSSQL doesn't support vector calculation via SQL.                     |
| json                   | Store JSON doc in parsed binary format. It's experimental feature and available on MSSQL 2025.                                                    |
| xml                    | Store XML doc and handle it with XQuery.                                                                                                          |
