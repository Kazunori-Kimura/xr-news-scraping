/*
  VRに関する新着投稿 - Qiita
  https://qiita.com/tags/vr/items
*/
const Qiita = require("./Qiita");
const Article = require("./Article");

class QiitaVR extends Qiita {
  /**
   * override
   * @returns {string}
   */
  static get tag() {
    return "vr";
  }
}

module.exports = QiitaVR;
