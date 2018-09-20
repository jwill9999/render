var {
  expect
} = require('chai');
const puppeteer = require('puppeteer');




describe('Mocha', () => {

  it('function correctly', async () => {
    expect(true).to.be.true;
  });
});

describe('Render Function', () => {
      let page,browser;

      before(async () => {   

        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
       
      });

    



  it('renders to page when "Number" passed', async () => {
    const text = await page.$eval('#root h1', el => el.innerHTML);
    expect(text).to.equal('1')
  });

  it('renders to page when "String" passed', async () => {
    const text = await page.$eval('#root p', el => el.innerHTML);
    expect(text).to.equal('String Text')
  });

  it('renders to page when "Array" passed', async () => {
    const text = await page.$eval('#root h2', el => el.innerHTML);
    expect(text).to.equal('0 : 1')
  });

  it('renders to page when "Object" of key value pairs is passed');

  it('renders to page "No Data" if "Empty Object" is passed');

  it('renders to page "No Data" when "No Arguments" are passed ');
});



 










 









