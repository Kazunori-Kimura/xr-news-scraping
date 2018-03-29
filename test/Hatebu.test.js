const Hatebu = require("../lib/hatebu");

describe("Hatebu", () => {
  test("fetch()", async () => {
    const items = await Hatebu.fetch();
    expect(items.length).toBeGreaterThan(0);
  });
});
