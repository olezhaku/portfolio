document.getElementById('tab-btn-2').onclick = function() {
    this.style = 'color: #181818;'
    document.getElementById('tab-btn-1').style = 'color: #a3a3a3;'

    document.getElementById('tab-svg-1').style = 'stroke: #fefefe;'
    document.getElementById('tab-svg-2').style = 'stroke: #181818;'

    document.querySelector('.tab-description').style = 'display: none;'
    document.querySelector('.tab-specifications').style = 'display: block;'
}

document.getElementById('tab-btn-1').onclick = function() {
    this.style = 'color: #181818;'
    document.getElementById('tab-btn-2').style = 'color: #a3a3a3;'

    document.getElementById('tab-svg-2').style = 'stroke: #fefefe;'
    document.getElementById('tab-svg-1').style = 'stroke: #181818;'

    document.querySelector('.tab-description').style = 'display: block;'
    document.querySelector('.tab-specifications').style = 'display: none;'
}

// burger
document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('*').classList.toggle('none')
    document.querySelector('.burger').classList.toggle('active')
    document.querySelector('.nav').classList.toggle('open')
})