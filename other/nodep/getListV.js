const fs = require('fs')
const axios = require('./axios');
const { zip, unzip } = require('./zip.js');
const config = require('./config')
const cheerio = require('cheerio');
const fileList = './data/pornstars/list.txt'
async function run(list) {
    let dataSource = list || getList()
    let ids = Object.keys(dataSource)
    for (let i = 0; i < ids.length; i++) {
        console.log('start', `${i}/${ids.length}`, i / ids.length)
        let id = ids[i]
        let item = dataSource[id]
        await downloadFile(item)
    }
}

async function downloadFile(item) {
    let output = config.filePath;
    if (!fs.existsSync(output)) {
        fs.mkdirSync(output, {
            recursive: true,
        });
    }
    let files = fs.readdirSync(output)
    let name = files.find(name => name.includes(item.vkey) && !name.includes('_tem.'))
    if (name) {
        console.log('跳过...', item.vkey)
        return
    }
    let viewkey = `${item.vkey}`
    // if (!viewkey.startsWith('ph')) return
    // viewkey = 'ph62251209de802'
    console.log(viewkey)
    let url = config.view_video + '?viewkey=' + viewkey
    url = config.url + `/embed/${viewkey}`
    url = 'https://cn.pornhub.com/view_video.php?viewkey=ph62c575b8af98f'
    url = 'https://spectacular-youtiao-f4e424.netlify.app/api/proxy?uuu=' + url
    let res = (await axios({
        url, params: {
            compress: ''
        },
        // responseType: "arraybuffer", // 关键步骤
        // responseEncoding: "utf8",
    }))
    data = res.data
    // let utf8decoder = new TextDecoder("GBK"); // 关键步骤
    // data = utf8decoder.decode(data);
    // if (typeof data === 'string'){
    //     data = JSON.parse(data)
    // } 
    if (data.compress) {
        data = unzip(data.data)
    }
    fs.writeFileSync('./data/pornstars/detail.html', data)
    const $ = cheerio.load(data);
    let title = $('title').text()
    let cccc = $('script')
    let str = [...cccc].find((item, index) => {
        return $(item).text().includes('flashvars = {')
    }).children[0].data
    let document = { referrer: '' }
    eval(str)
    if (flashvars) {
        // console.log(flashvars.mediaDefinitions)
        let data = flashvars.mediaDefinitions.find(item => item.format == flashvars.mediaPriority)
        console.log(data.quality, data.quality.length)
        let videoUrl = data.videoUrl
        if (videoUrl) {

            let filename = `${item.title}_${viewkey}_${data.defaultQuality}.mp4`
            let filenameTem = `${item.title}_${viewkey}_${data.defaultQuality}_tem.mp4`
            const path = require('path');
            let files = fs.readdirSync(output)
            files.forEach(name => {
                if (name.includes('_tem.')) {
                    let filePath = `${output}/${name}`
                    // let dsa = fs.existsSync(filePath)
                    // debugger
                    fs.unlinkSync(filePath)
                }
            })
            if (!files.includes(filename)) {
                try {
                    console.log("准备下载...", item.vkey);
                    const m3u8ToMp4 = require("./m3u8ToMp4.js"); // 引入核心模块，注意路径
                    const converter = new m3u8ToMp4();
                    await converter
                        .setInputFile(videoUrl)
                        .setOutputFile(path.join(output, filenameTem))
                        .start();

                    console.log("下载完成!");
                    fs.renameSync(path.join(output, filenameTem), path.join(output, filename))
                    return null;
                } catch (error) {
                    console.log('error', item.vkey, error)
                    // throw new Error("哎呀，出错啦! 检查一下参数传对了没喔。", error);
                    return error
                }
            } else {
                console.log("跳过下载...", item.vkey);
            }

        }
    }
}

function getList() {
    let path = fileList
    let dataSource = {}
    try {
        dataSource = { ...JSON.parse(unzip(fs.readFileSync(path))), ...dataSource }
    } catch (error) { console.log('getList', error) }
    return dataSource
}

module.exports = run