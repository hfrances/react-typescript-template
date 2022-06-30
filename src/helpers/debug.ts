
const debug = new class Debug {
  enabled: boolean;
  filter: (values: any[]) => boolean;

  constructor() {
    this.enabled = false;
    this.filter = (values) => true;
  }

  log(...args: any[]) {
    if (this.enabled) {

      if (!this.filter || this.filter(args)) {
        console.log(...args);
      }
    }
  }

  error(...args: any[]) {
    if (this.enabled) {

      if (!this.filter || this.filter(args)) {
        console.error(...args);
      }
    }
  }

  warn(...args: any[]) {
    if (this.enabled) {

      if (!this.filter || this.filter(args)) {
        console.warn(...args);
      }
    }
  }

  info(...args: any[]) {
    if (this.enabled) {

      if (!this.filter || this.filter(args)) {
        console.info(...args);
      }
    }
  }

}();

export { debug };
export default debug;