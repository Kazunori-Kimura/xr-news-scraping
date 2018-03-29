const impress = require("../lib/impress");

describe("impress", () => {
  test("fetch()", async () => {
    const items = await impress.fetch();
    expect(items.length).toBeGreaterThan(0);
  });
});
