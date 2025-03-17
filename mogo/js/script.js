// header
const path1 = document.getElementById("nav-icons-1")
const path2 = document.getElementById("nav-icons-2")

const svg1 = document.getElementById("head-elem-a-svg-1")
const svg2 = document.getElementById("head-elem-a-svg-2")


svg1.onmouseover = function() {
    path1.style.fill = "#fce38a"
}
svg1.onmouseout = function() {
    path1.style = 'fill: #fff;'
}

svg2.onmouseover = function() {
    path2.style.fill = "#fce38a"
}
svg2.onmouseout = function() {
    path2.style = 'fill: #fff;'
}


// about
document.querySelector('.welcome-btn').onclick = function() {
    document.querySelector('.about').scrollIntoView()
}


// facts
const time = 1000
const step = 1

function outNum(num, elem) {
    let l = document.querySelector('#f-num-' + elem)
    let n = 0
    let t = Math.round(time / (num / step))
    let interval = setInterval(() => {
        n = n + step
        if (n == num) {
            clearInterval(interval)   
        }

        l.innerHTML = n
    }, t)
}    


let interv = 0

window.onscroll = function (e) {
    if (interv > 50) {
        return
    }

    if (window.scrollY > 1000) {
        outNum(42, 1)
        outNum(123, 2)
        outNum(15, 3)
        outNum(99, 4)
        outNum(24, 5) 
    }

    ++interv
}


// burger
document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('*').classList.toggle('none')
    document.querySelector('.burger').classList.toggle('active')
    document.querySelector('.nav').classList.toggle('open')
})