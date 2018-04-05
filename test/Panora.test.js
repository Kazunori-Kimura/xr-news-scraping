const Panora = require("../lib/panora");

describe("Panora", () => {
  test("fetch()", async () => {
    const items = await Panora.fetch();
    expect(items.length).toBeGreaterThan(0);
  });
});
