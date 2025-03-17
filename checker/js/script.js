const info = new UserInfo()

// clear time
const time = info.timeOpened.toString().split(' ').slice(0, -2)
const timecity = time[6].replace(/[^a-zA-Z]/,  '').slice(0, -1)
time.pop()
time.push(timecity)

// month, days of week
const weekru = ['Понедельник', 'Вторник', 'Среда', 'Чтетверг', 'Пятница', 'Суббота', 'Воскресение']
const weeken = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const monthru = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
const monthen = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// week
let dayofweek

for (let i = 0; i < weeken.length; i++) {
    if (time[0] === weeken[i]) {
        dayofweek = weekru[i]
    }
}

//month
let month

for (let i = 0; i < monthen.length; i++) {
    if (time[1] === monthen[i]) {
        month = monthru[i]
    }
}

//resultdata
const datatime = [dayofweek, time[2], month, time[3], 'года']
let resultdata = ''

for (itemdata of datatime) {
    resultdata += itemdata + ' '    
}

//languages
const languages = info.browserInfo().languages
let languagesos = ''

for(let i = 0; i < languages.length; i++) {
    if (i % 2 == 0) {   
        languagesos += languages[i] + ', '
    }
}

languagesos = languagesos.slice(0, -2)

//geolocation
info.position().then((pos) => {
    let long = pos.coords.longitude
    let lat = pos.coords.latitude
    let acc = pos.coords.accuracy

    document.querySelector('#geoposition').textContent = lat + ' ' + long
    document.querySelector('#accuracy').textContent = acc + ' м'
})

//ip
info.ip().then((ip) => {
    document.querySelector('#ip').textContent = ip.ip
})

//canvas
function getCanvasFingerprint() {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')    

    ctx.font = '18px Arial'
    ctx.fillStyle = 'rgba(60, 60, 60, 0.5)'
    ctx.fillText('Fingerprint test', 10, 50)
    ctx.fillRect(10, 100, 80, 50)
  
    const dataURL = canvas.toDataURL()
    let hash = sha256(dataURL)

    return hash
}

//hash
function sha256(str) {
    return CryptoJS.SHA256(str).toString()
}

const canvasFingerprint = getCanvasFingerprint()

//webgl

function getWebGLFingerprint() {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl')

    const webGLInfo = {
      vendor: gl.getParameter(gl.VENDOR),
      renderer: gl.getParameter(gl.RENDERER),
      version: gl.getParameter(gl.VERSION),
      shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
      extensions: gl.getSupportedExtensions(),
    }
  
    const webGLFingerprint = JSON.stringify(webGLInfo)
    let hash = sha256(webGLFingerprint)

    return hash
}

const webGLFingerprint = getWebGLFingerprint()

//output
document.querySelector('#time').textContent = time[4].slice(0, -3)
document.querySelector('#date').textContent = resultdata
document.querySelector('#timezone').textContent = time[5] + ', ' + time[6]

document.querySelector('#language').textContent = info.browserInfo().language
document.querySelector('#languages').textContent = languagesos

document.querySelector('#screen-size').textContent = info.sizeScreen().width + 'x' + info.sizeScreen().height
document.querySelector('#window-size').textContent = info.sizeScreen().outerWidth + 'x' + info.sizeScreen().outerHeight

document.querySelector('#platform').textContent = info.browserInfo().platform
document.querySelector('#oscpu').textContent = info.browserInfo().oscpu

document.querySelector('#referer').textContent = info.referrer()
document.querySelector('#previoussites').textContent = info.previousSites()

document.querySelector('#buildid').textContent = info.browserInfo().buildID
document.querySelector('#useragent').textContent = info.browserInfo().userAgent
document.querySelector('#canvas').textContent = canvasFingerprint
document.querySelector('#webgl').textContent = webGLFingerprint