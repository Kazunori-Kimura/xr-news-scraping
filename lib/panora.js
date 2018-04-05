/*
  PANORA – 「日本にVRを広める」がミッションのVRニュースサイト
  http://panora.tokyo/
*/
const Scraping = require("./Scraping");
const Article = require("./Article");

class Panora extends Scraping {
  /**
   * override
   * 
   * @returns {string}
   */
  static get url() {
    return "http://panora.tokyo/";
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
    $(".entry-title").each((index, element) => {
      const $item = $(element);
      const url = $item.find("a").attr("href");
      const title = $item.find("a").attr("title");
      const article = new Article(title, url);

      ret.push(article);
    });

    return ret;
  }
}

module.exports = Panora;

