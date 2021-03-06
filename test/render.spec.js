var {
  expect
} = require('chai');
const Page = require('./browserBuild');
const server = require('../server');





let page;

before(async () => { 
  await server.init(); 
});

after(() => {
 server.close()
})

describe('Mocha', () => {
  it('function correctly', async () => {
    expect(true).to.be.true;
  });
});



describe('Render Function', () => {
 

before(async () => {
  page = await Page.build(); 
  await page.goto('localhost:8080'); 
} )

after(() => {
  
})
 


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

  it('renders to page when "Object" of key value pairs is passed', async () => {
    const text = await page.$eval('#root h3', el => el.innerHTML);
    expect(text).to.equal('name : object');
  });

  it('renders to page "No Data" if "Empty Object" is passed', async () => {
    const text = await page.$eval('#root h4', el => el.innerHTML);
    expect(text).to.equal('No Data');
  });

  it('renders to page "No Data" when "No Arguments" are passed', async () => {
    const text = await page.$eval('#root h5', el => el.innerHTML);
    expect(text).to.equal('No Data');
  });
});













 









