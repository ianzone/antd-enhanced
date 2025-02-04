export class Log {
  info(...args: any[]) {
    console.log(...args.map((arg) => JSON.parse(JSON.stringify(arg))));
  }
}

export const log = new Log();
