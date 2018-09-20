const puppeteer = require('puppeteer');


class CustomPage {

    static async build() {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        let customPage = new CustomPage(page);

        return new Proxy(customPage, {
            get: function (target, property) {
                return customPage[property] || browser[property] || page[property];
            }
        })
    }

    constructor(page){
        this.page = page;
    }

}

module.exports = CustomPage;