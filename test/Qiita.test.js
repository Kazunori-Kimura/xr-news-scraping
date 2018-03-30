const QiitaVR = require("../lib/qiitavr");
const QiitaAR = require("../lib/qiitaar");
const QiitaMR = require("../lib/qiitamr");

describe("Qiita", () => {
  test("VR fetch()", async () => {
    const items = await QiitaVR.fetch();
    expect(items.length).toBeGreaterThan(0);
  });

  test("AR fetch()", async () => {
    const items = await QiitaAR.fetch();
    expect(items.length).toBeGreaterThan(0);
  });
  
  test("MR fetch()", async () => {
    const items = await QiitaMR.fetch();
    expect(items.length).toBeGreaterThan(0);
  });
});
