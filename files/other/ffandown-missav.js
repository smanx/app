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
        return url.startsWith('https://missav');
    }
    async parser(url, options) {
        let originalText = await fetch(url).then(res => res.text())
        const regex = /eval\(function\(p,a,c,k,e,d\)\{[\s\S]*?\}\)\)/;
        const match = originalText.match(regex);
        let m3u8 = ''
        if (match && match[0]) {
            const extractedCode = match[0];
            console.log("提取到的代码：");
            console.log(extractedCode);
            let m3u8 = eval(extractedCode);
            console.log(m3u8)
        } else {
            console.log("未找到匹配的代码");
        }
        return {
            url: m3u8,
            headers: [
            ]
        }
    }
}