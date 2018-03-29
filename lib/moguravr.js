/*
  Mogura VR - 国内外のVR/AR/MR最新情報
  http://www.moguravr.com/
*/
const Scraping = require("./Scraping");
const Article = require("./Article");

class MoguraVr extends Scraping {
  /**
   * override
   * 
   * @returns {string}
   */
  static get url() {
    return "http://www.moguravr.com/";
  }

  /**
   * override
   * 
   * @returns {object}
   */
  static get params() {
    return {};
  }

  /**
   * override
   * 
   * @param {CheerioHttpcli.CheerioStaticEx} $ 
   * @param {string} body 
   */
  static scraping($, body) {
    const ret = [];
    $(".c-box").each((index, element) => {
      const $item = $(element);
      const url = $item.find(".c-box__link").attr("href");
      const title = $item.find(".c-box__title").text();
      const article = new Article(title, url);

      ret.push(article);
    });

    return ret;
  }
}

// async function exec() {
//   const items = await MoguraVr.fetch();
//   items.forEach((item) => {
//     console.log([item.title, item.url, item.hash]);
//   });
// }
// exec();

module.exports = MoguraVr;
