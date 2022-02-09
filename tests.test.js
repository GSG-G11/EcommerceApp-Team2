const { addData } = require("./JS/logic.js");

describe("add data to array", () => {
  test("test add data to the array products", () => {
    const actual = addData([{ obj: "3", ob: "2" }], { ore: "2", ofg: "3" });
    const expected = [
      { obj: "3", ob: "2" },
      { ore: "2", ofg: "3" },
    ];
    expect(actual).toEqual(expected);
  });
});
