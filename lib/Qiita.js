/*
 * Qiita
 *  https://qiita.com/tags/XX/items
 */
const Scraping = require("./Scraping");
const Article = require("./Article");

/**
 * Qiitaスクレイピング基底クラス
 */
class Qiita extends Scraping {
  /**
   * スクレイピングの対象タグ。overrideされる
   */
  static get tag() {
    return "XX";
  }

  /**
   * override
   * 
   * @returns {string}
   */
  static get url() {
    return `https://qiita.com/tags/${this.tag}/items`;
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
      const url = "https://qiita.com" + $link.attr("href");
      const title = "Qiita - " + $link.text();
      const article = new Article(title, url);

      ret.push(article);
    });

    return ret;
  }
}

module.exports = Qiita;
