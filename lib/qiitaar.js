/*
  ARに関する新着投稿 - Qiita
  https://qiita.com/tags/ar/items
*/
const Qiita = require("./Qiita");
const Article = require("./Article");

class QiitaAR extends Qiita {
  /**
   * override
   * @returns {string}
   */
  static get tag() {
    return "ar";
  }
}

module.exports = QiitaAR;
