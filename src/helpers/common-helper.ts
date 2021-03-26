
class CommonHelper {

  public combineUrl = (...values: string[]): string => {
    let rdo = '';

    values?.forEach(value => {
      if (rdo.length > 0 && rdo.slice(-1) !== '/') {
        rdo += '/';
      }
      rdo += value;
    });
    return rdo;
  }

  /**
  * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
  */
  public omit = (obj: any, ...omitKeys: string[]) => {
    let result: any;

    if (obj) {
      result = {};

      Object.keys(obj).forEach(key => {
        if (omitKeys.indexOf(key) === -1) {
          result[key] = obj[key];
        }
      });
    }
    else {
      result = obj;
    }
    return result;
  }
}

const singleton = new CommonHelper();

export { singleton as CommonHelper };
export default singleton;