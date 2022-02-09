const { addData, searchByName, filterProduct } = require("./JS/logic.js");

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

describe("Filter products via price and catagory", () => {
    test("Should return items when filtered by catagory and price", () => {
        const actual = filterProduct("ASC", [{
                id: 1,
                name: "Strawberry",
                price: 150,
                image: "https://i.ibb.co/PzGBsgZ/product-12.jpg",
                category: "Fruits",
                description: "Lorem ipsum dolor sit amet consct, etur adipiscing elit Nunc vulputate etur adipiscing elit Nunc vulputate.",
            },
            {
                id: 5,
                name: "Strawberry",
                price: 200,
                image: "https://i.ibb.co/PzGBsgZ/product-12.jpg",
                category: "Fruits",
                description: "Lorem ipsum dolor sit amet consct, etur adipiscing elit Nunc vulputate etur adipiscing elit Nunc vulputate.",
            }
        ]);
        const expected = [{
                id: 1,
                name: "Strawberry",
                price: 150,
                image: "https://i.ibb.co/PzGBsgZ/product-12.jpg",
                category: "Fruits",
                description: "Lorem ipsum dolor sit amet consct, etur adipiscing elit Nunc vulputate etur adipiscing elit Nunc vulputate.",
            },
            {
                id: 5,
                name: "Strawberry",
                price: 200,
                image: "https://i.ibb.co/PzGBsgZ/product-12.jpg",
                category: "Fruits",
                description: "Lorem ipsum dolor sit amet consct, etur adipiscing elit Nunc vulputate etur adipiscing elit Nunc vulputate.",
            }
        ];
        expect(actual).toEqual(expected);
    });
})