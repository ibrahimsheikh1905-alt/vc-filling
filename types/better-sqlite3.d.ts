declare module 'better-sqlite3' {
  const Database: new (filename: string, options?: any) => Database;
  
  interface Database {
    prepare(sql: string): Statement;
    exec(sql: string): void;
    close(): void;
  }

  interface Statement {
    run(...params: any[]): RunResult;
    all(...params: any[]): any[];
    get(...params: any[]): any;
  }

  interface RunResult {
    changes: number;
    lastInsertRowid: number | bigint;
  }

  export = Database;
}
