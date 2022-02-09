const { addData, searchByName, deleteCard } = require("./JS/logic.js");

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

describe("delete item from the array", () => {
  test("test remove item from the array products", () => {
    const actual = deleteCard(
      [
        { id: 1, name: "nabil" },
        { id: 2, name: "mohamed" },
        { id: 3, name: "ibrahim" },
        { id: 4, name: "nada" },
      ],
      2
    );
    const expected = [
      { id: 1, name: "nabil" },
      { id: 3, name: "ibrahim" },
      { id: 4, name: "nada" },
    ];
    expect(actual).toEqual(expected);
  });
});



describe("filter the array of the products that have price less than 10", () => {
  test("test remove item that has a price lower than 10", () => {
    const actual = newFiltered( [
      {  name: "tomato", price : 12 },
      {  name: "cucomber", price : 10 },
      { name: "apple", pric: 8 },
      {  name: "banana", price : 5 },
    ]);
    const expected = [
      {  name: "tomato", price : 12 },
      {  name: "cucomber", price : 10 },
    ];
    expect(actual).toEqual(expected);
  });
});