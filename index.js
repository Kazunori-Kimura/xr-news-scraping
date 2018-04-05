// index.js
const MoguraVR = require("./lib/moguravr");
const Hatebu = require("./lib/hatebu");
const Impress = require("./lib/impress");
const QiitaVR = require("./lib/qiitavr");
const QiitaAR = require("./lib/qiitaar");
const QiitaMR = require("./lib/qiitamr");
const Panora = require("./lib/panora");

const startTime = Date.now();

Promise.all([
  MoguraVR.exec(),
  Hatebu.exec(),
  Impress.exec(),
  QiitaVR.exec(),
  QiitaAR.exec(),
  QiitaMR.exec(),
  Panora.exec()
]).then((values) => {
  let count = 0;
  values.forEach((value) => {
    count += value;
  });
  const endTime = Date.now();
  console.log(`登録件数: ${count}, 経過時間: ${endTime - startTime}ms`);

  // なぜかプログラムが終了しないので、強制終了させる
  process.exit(0);
}).catch((err) => {
  console.log(err);
  process.exit(1);
})
