export function parseURL(): { [k: string]: string } {
    const ret = {};
    const seg = location.search.replace(/^\?/, '').split('&').filter(function (v, i) {
        if (v !== '' && v.indexOf('=')) {
            return true;
        }
    });
    seg.forEach((element, index) => {
        const idx = element.indexOf('=');
        const key = element.substring(0, idx);
        const val = element.substring(idx + 1);
        ret[key] = val;
    });
    return ret;
}
