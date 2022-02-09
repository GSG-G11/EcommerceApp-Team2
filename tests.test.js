const { addData, searchByName } = require("./JS/logic.js");

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

describe("search products via name", () => {
  test("search the the product via name", () => {
    const actual = searchByName(
      [
        { id: 1, name: "fruit" },
        { id: 2, name: "salad" },
        { id: 3, name: "vegatables" },
      ],
      "salad"
    );
    const expected = [{ id: 2, name: "salad" }];
    expect(actual).toEqual(expected);
  });
});