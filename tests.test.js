const {
    addData,
    searchByName,
    deleteCard,
    editCard,
} = require("./JS/logic.js");

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

describe("Should Edit Item value", () => {
    test("Should Edit Item value", () => {
        const actual = editCard("1", "price", 50.0, [{
                id: 0,
                category: "electronics",
                price: 30.0,
                productName: "HP Laptop",
                image: "../assets/images/laptop.jpg",
            },
            {
                id: 1,
                category: "food",
                price: 100.0,
                productName: "Hamburger",
                image: "../assets/images/hamburger.jpeg",
            },
        ]);
        const expected = [{
                id: 0,
                category: "electronics",
                price: 30.0,
                productName: "HP Laptop",
                image: "../assets/images/laptop.jpg",
            },
            {
                id: 1,
                category: "food",
                price: 50.0,
                productName: "Hamburger",
                image: "../assets/images/hamburger.jpeg",
            },
        ];
        expect(actual).toEqual(expected);
    });
});

describe("delete item from the cart array by filtering", () => {
    test("test remove item from the array products", () => {
        const actual = removeItem(3, [
            { id: 1, name: "nabil" },
            { id: 2, name: "mohamed" },
            { id: 3, name: "ibrahim" },
            { id: 4, name: "nada" },
        ]);
        const expected = [
            { id: 1, name: "nabil" },
            { id: 2, name: "mohamed" },
            { id: 4, name: "nada" },
        ];
        expect(actual).toEqual(expected);
    });
});

describe("Filter products via price", () => {
    test("Should return items when filtered by price", () => {
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
});