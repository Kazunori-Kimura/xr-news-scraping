/*
  VR Watch - VR/ARの最新ニュース＆コラム
  https://www.watch.impress.co.jp/vr/
*/
const Scraping = require("./Scraping");
const Article = require("./Article");

class VRWatch extends Scraping {
  /**
   * override
   * 
   * @returns {string}
   */
  static get url() {
    return "https://www.watch.impress.co.jp/vr/";
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
    $("li.item .text").each((index, element) => {
      const $item = $(element);
      const url = $item.find("a").attr("href");
      const title = $item.find("a").text();
      const article = new Article(title, url);

      ret.push(article);
    });

    return ret;
  }
}

module.exports = VRWatch;
