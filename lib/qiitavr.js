/*
  VRに関する新着投稿 - Qiita
  https://qiita.com/tags/vr/items
*/
const Scraping = require("./Scraping");
const Article = require("./Article");

class QiitaVR extends Scraping {
  /**
   * override
   * 
   * @returns {string}
   */
  static get url() {
    return "https://qiita.com/tags/vr/items";
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
    $(".ItemLink__title").each((index, element) => {
      const $item = $(element);
      const $link = $item.find("a");
      const url = $link.attr("href");
      const title = "Qiita - " + $link.text();
      const article = new Article(title, url);

      ret.push(article);
    });

    return ret;
  }
}

module.exports = QiitaVR;
