// @name missav
// @author missav
// @description missav插件
// @version 0.0.2
class Parser {
    match(url) {
        // return true if the url is matched
        return url.startsWith('https://missav');
    }
    async parser(url, options) {
        return {
            url: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8',
            headers: [
            ]
        }
    }
}