const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://ultron-au.essentials.dev.myob.com')
  
  await page.setViewport({ width: 1920, height: 978 })

  await page.waitForSelector('.panel-footer a')
  await page.click('.panel-footer a')

  let r = Math.random().toString(36).substring(7);

  await page.waitForSelector('.panel > .panel-body > form > .form-group > #UserName')
  await page.click('.panel > .panel-body > form > .form-group > #UserName')
  await page.keyboard.type(`${r}@myob.com`);
  
  await page.waitForSelector('form > .form-group > .form-group > #password-input-group > #NewPassword')
  await page.click('form > .form-group > .form-group > #password-input-group > #NewPassword')
  await page.keyboard.type('Myob1234');
  
  await page.waitForSelector('.panel > .panel-body > form > .form-group > #PhoneNumber')
  await page.click('.panel > .panel-body > form > .form-group > #PhoneNumber')
  await page.keyboard.type('123123123');
  
  await page.waitForSelector('.col-lg-10 > .panel > .panel-body > form > .btn')
  await page.click('.col-lg-10 > .panel > .panel-body > form > .btn')
  
  await navigationPromise
  
  await page.waitForSelector('.modal-body > .btn')
  await page.click('.modal-body > .btn')
  
  await page.waitForSelector('div > .dropdown-menu > li:nth-child(18) > a')
  await page.click('div > .\_2_MyCPta2HfVm4GTNJodu4 > .dropdown-menu > li:nth-child(18) > a')
  
  await page.waitForSelector('.modal-dialog > .modal-content > div > .modal-footer > .btn')
  await page.click('.modal-dialog > .modal-content > div > .modal-footer > .btn')
  
  await page.waitForSelector('body > #gettingStartedWagon > #welcomeWagon > .tab > .fa')
  await page.click('body > #gettingStartedWagon > #welcomeWagon > .tab > .fa')
  
  await page.waitForSelector('body > #outer-wrapper > #wrapper')
  await page.click('body > #outer-wrapper > #wrapper')
  
  await navigationPromise
  
  await browser.close()
})()