
class UrlHelper {

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

}

const singleton = new UrlHelper();

export { singleton as UrlHelper };
export default singleton;