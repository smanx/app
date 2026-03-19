// ==FFandownScript==
// @name missav
// @author missav
// @description missav插件
// @version 0.0.2
// @icon https://missav.ai/favicon.ico
// @homepage https://github.com/helson-lin
// @settings {"cookie":{"type":"input","value":"","require":true,"label":"Cookie","placeholder":"请输入 cookie","notice":"Cookie从 bilibili.com 的请求内获取，只需要保留SESSDATA=xxxx;部分"},"quality":{"type":"select","options":[{"label":"超高清 8K","value":"127"},{"label":"杜比视界","value":"126"},{"label":"真彩 HDR","value":"125"},{"label":"超清 4K","value":"120"},{"label":"高清 1080P60","value":"116"},{"label":"高清 1080P+","value":"112"},{"label":"高清 1080P","value":"80"},{"label":"高清 720P60","value":"72"},{"label":"高清 720P","value":"64"},{"label":"清晰 480P","value":"32"},{"label":"流畅 360P","value":"16"},{"label":"极速 240P","value":"6"}],"require":true,"label":"最高质量","placeholder":"请选择最高质量","notice":"视频下载会采用当前配置最高质量","value":"116"}}
// ==/FFandownScript==
class Parser {
    match(url) {
        // return true if the url is matched
        console.log('match missav');
        return url.startsWith('https://missav');
    }
    async parser(url, options) {
        console.log('parser missav');
        // return {
        //     url: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8',
        //     headers: []
        // }
        let data = await fetch( 'https://ffandown.smanx.xx.kg?url=' + url, {
            "headers": {
                "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Microsoft Edge\";v=\"138\"",
                "sec-ch-ua-arch": "\"arm\"",
                "sec-ch-ua-bitness": "\"64\"",
                "sec-ch-ua-form-factors": "\"Desktop\"",
                "sec-ch-ua-full-version": "\"138.0.3351.83\"",
                "sec-ch-ua-full-version-list": "\"Not)A;Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"138.0.7204.101\", \"Microsoft Edge\";v=\"138.0.3351.83\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-model": "\"\"",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-ch-ua-platform-version": "\"14.4.1\"",
                "sec-ch-ua-wow64": "?0",
                "upgrade-insecure-requests": "1"
            }
        }).then(res => res.json())
        let m3u8 = data.m3u8;
        return {
            url: m3u8,
            headers: []
        }
    }
}