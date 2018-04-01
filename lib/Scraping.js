// Scraping親クラス
const client = require("cheerio-httpcli");
const Article = require("./Article");

class Scraping {
  /**
   * fetchするurl。overrideされる
   * 
   * @returns {string}
   */
  static get url() {
    return "";
  }

  /**
   * fetchする際のパラメータ。overrideされる
   * 
   * @returns {object}
   */
  static get params() {
    return {};
  }

  /**
   * スクレイピング処理。overrideされる
   * 
   * @param {CheerioHttpcli.CheerioStaticEx} $ 
   * @param {string} body 
   * @returns {Array<Article>}
   */
  static scraping($, body) {
    return [];
  }

  /**
   * fetch処理
   * 
   * @returns {Promise<Array<Article>>}
   */
  static fetch() {
    console.log(`${this.url} fetch() start`);

    return new Promise((resolve, reject) => {
      client.fetch(this.url, this.params, (err, $, res, body) => {
        if (err) {
          reject(err);
          return;
        }
        const ret = this.scraping($, body);
        console.log(`${this.url} fetch() end`);
        resolve(ret);
      });
    });
  }

  /**
   * スクレイピングの実行
   */
  static async exec() {
    console.log(`${this.url} exec() start`);

    const items = await this.fetch();
    let total = 0;
    for (let i = 0; i<items.length; i++) {
      const count = await items[i].regist();
      total += count;
    }

    console.log(`${this.url} exec() end`);
    return total;
  }
}

module.exports = Scraping;
