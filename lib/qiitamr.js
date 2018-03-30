/*
  MRに関する新着投稿 - Qiita
  https://qiita.com/tags/mr/items
*/
const Qiita = require("./Qiita");
const Article = require("./Article");

class QiitaMR extends Qiita {
  /**
   * override
   * @returns {string}
   */
  static get tag() {
    return "mr";
  }
}

module.exports = QiitaMR;
