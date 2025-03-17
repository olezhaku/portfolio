class UserInfo {
    constructor() {
        this.timeOpened = new Date()
        this.timezone = new Date().getTimezoneOffset()/60
    }

    referrer() {
        return document.referrer
    }

    previousSites() {
        return history.length
    }

    browserInfo() {
        return navigator
    }

    sizeScreen() {
        return {
            width : screen.width,
            height : screen.height,
            outerWidth : window.outerWidth,
            outerHeight : window.outerHeight
        }
    }

    position() {
        const pos = new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })

        return pos
    }

    async ip() {
        let res = await fetch('https://api.ipify.org?format=json')
        let data = await res.json()
        return data
    }    
}
