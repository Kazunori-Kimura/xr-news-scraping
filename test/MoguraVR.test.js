const MoguraVR = require("../lib/moguravr");

describe("MoguraVR", () => {
  test("fetch()", async () => {
    const items = await MoguraVR.fetch();
    expect(items.length).toBeGreaterThan(0);
  });
});
