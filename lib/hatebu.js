/*
  タグ「VR | AR | MR | XR」を検索 - はてなブックマーク
  http://b.hatena.ne.jp/search/tag?q=VR+%7C+AR+%7C+MR+%7C+XR
*/
const Scraping = require("./Scraping");
const Article = require("./Article");

class Hatebu extends Scraping {
  /**
   * override
   * 
   * @returns {string}
   */
  static get url() {
    return "http://b.hatena.ne.jp/search/tag";
  }

  /**
   * override
   * 
   * @returns {object}
   */
  static get params() {
    return {
      "q": "VR|AR|MR|XR"
    };
  }

  /**
   * override
   * 
   * @param {CheerioHttpcli.CheerioStaticEx} $ 
   * @param {string} body 
   */
  static scraping($, body) {
    const ret = [];
    $(".search-result").each((index, element) => {
      const $item = $(element);
      const url = $item.find("a").attr("href");
      const title = $item.find("a").attr("title");
      const article = new Article(title, url);

      ret.push(article);
    });

    return ret;
  }
}

module.exports = Hatebu;
