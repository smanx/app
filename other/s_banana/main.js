const fs = require('fs');
const config = require('./config.js')
const axios = require('axios')
const { zip, unzip } = require('./zip.js');
let dataSourceStr = ''
let dataSource = {}
let dataSourceTxtName = config.dataSourceTxtName
let dataSourceJsonName = 'dataSource.json'

start()

async function start() {
    let data = await getDataSource()
    dataSourceStr = data ? unzip(data) : '{}'
    dataSource = JSON.parse(dataSourceStr)
    console.log("初始", Object.keys(dataSource).length, Object.keys(dataSource).sort((i, j) => i - j).join(','))
    await loadData(1)
}

async function getDataSource() {
    return await new Promise((resolve, reject) => {
        fs.readFile(dataSourceTxtName, function (err, data) {
            resolve(data)
        });
    })
}

async function getDataSource2() {
    return await new Promise((resolve, reject) => {
        fs.readFile(dataSourceJsonName, function (err, data) {
            resolve(data)
        });
    })
}

async function loadData(page) {
    console.log('loadData', page, '页')
    const url = config.origin + '/vod/latest-0-0-0-0-0-0-0-0-0-' + page;
    try {
        let res = await axios({
            url,
            params: {
                ...config.query(),
            },
        })
        if (res && res.data && res.data.retcode == 0) {
            let pageinfo = res.data.data.pageinfo
            console.log('loadData', res.data.data.vodrows.map(item => item.vodid).join(','))
            await saveData(res.data.data.vodrows)
            await saveFile()
            if (pageinfo.totalpage > page) {
                await loadData(++page)
            } else {
                console.log('结束', page, res)
            }
        } else {
            console.log('error', res)
            await loadData(page)
        }
    } catch (error) {
        console.log('网络错误, 再来', error.code, error)
        await loadData(page)
    }
}

async function saveData(data) {
    let addNum = 0
    let upNum = 0
    data.forEach(item => {
        if (dataSource[item.vodid]) {
            if (dataSource[item.vodid].play_url_data) item.play_url_data = dataSource[item.vodid].play_url_data
            upNum++
        } else {
            addNum++
        }
        dataSource[item.vodid] = item
    });
    console.log('saveData', 'add', addNum, 'update', upNum)
}

async function saveFile() {
    let dataSourceStr = zip(dataSource)
    await new Promise((resolve, reject) => {
        fs.writeFile(dataSourceTxtName, dataSourceStr, (err) => {
            if (err) {
                console.log('写入错误', err);
                reject(err)
            }
            console.log("写入成功", Object.keys(dataSource).length, '压缩比例', dataSourceStr.length / JSON.stringify(dataSource).length)
            resolve()
        })
    })
}


