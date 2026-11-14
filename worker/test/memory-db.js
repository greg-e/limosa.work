// Minimal D1 stand-in for the statements this worker actually runs.
export function createMemoryDb() {
  const responses = [];
  const limits = new Map();

  function exec(sql, args) {
    const text = sql.replace(/\s+/g, " ").trim();
    if (text.startsWith("INSERT INTO rate_limits")) {
      const [ipHash, window] = args;
      const key = `${ipHash}|${window}`;
      const count = (limits.get(key) || 0) + 1;
      limits.set(key, count);
      return { count };
    }
    if (text.startsWith("DELETE FROM rate_limits")) {
      const cutoff = args[0];
      for (const key of [...limits.keys()]) {
        const window = Number(key.split("|")[1]);
        if (window < cutoff) limits.delete(key);
      }
      return { success: true };
    }
    if (text.startsWith("INSERT INTO responses")) {
      const cols = text.match(/\(([^)]+)\)/)[1].split(",").map((s) => s.trim());
      if (cols.length !== args.length) {
        throw new Error(`bind mismatch: ${cols.length} columns, ${args.length} values`);
      }
      const row = {};
      cols.forEach((col, i) => {
        row[col] = args[i];
      });
      responses.push(row);
      return { success: true };
    }
    if (text.startsWith("SELECT")) {
      return responses
        .map((row) => ({ ...row }))
        .sort((a, b) => String(a.created_at).localeCompare(String(b.created_at)));
    }
    throw new Error(`unexpected sql: ${text}`);
  }

  return {
    responses,
    limits,
    prepare(sql) {
      const statement = {
        bind(...args) {
          statement.args = args;
          return statement;
        },
        async run() {
          return exec(sql, statement.args || []);
        },
        async first() {
          const result = exec(sql, statement.args || []);
          return Array.isArray(result) ? result[0] || null : result;
        },
        async all() {
          const result = exec(sql, statement.args || []);
          return { results: Array.isArray(result) ? result : [] };
        },
      };
      return statement;
    },
  };
}
