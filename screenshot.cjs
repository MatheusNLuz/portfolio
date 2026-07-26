const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    // Go to the page and wait for DOM, ignore network issues
    await page.goto('https://papinhia.com.br', { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(e => console.log("Navigation timeout/error, taking screenshot anyway: ", e));
    // Wait a couple seconds for images to load
    await new Promise(resolve => setTimeout(resolve, 5000));
    await page.screenshot({ path: 'public/papinhia.jpg', quality: 90, type: 'jpeg' });
    await browser.close();
    console.log('Screenshot taken!');
  } catch (e) {
    console.error(e);
  }
})();
