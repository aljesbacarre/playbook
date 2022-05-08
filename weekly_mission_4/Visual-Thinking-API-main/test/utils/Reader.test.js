const Reader = require("./../../lib/utils/Reader");

describe("Test for read data with Reader", () => {
    test("1) readJsonFile(path) not toBeUndefined and return data", () => {
        const explorers = Reader.readJsonFile("./data/visual-thinking.json");

        expect(explorers).not.toBeUndefined();
    });
});