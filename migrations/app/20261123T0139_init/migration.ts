#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/d343ec99572976f82c587fb3ac77543c1b8c9a7744c3db3fda7790000773f644/contract';
import endContract from '../../snapshots/d343ec99572976f82c587fb3ac77543c1b8c9a7744c3db3fda7790000773f644/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/d901307c194c817cfa0a28ababa391bd1b2342a2ebb5f8ac3280534f2295f96f/contract';
import startContract from '../../snapshots/d901307c194c817cfa0a28ababa391bd1b2342a2ebb5f8ac3280534f2295f96f/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, fn, primaryKey, sql } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'Quote',
        columns: [
          col('createdAt', 'timestamptz(3)', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('details', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('projectType', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz(3)', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
