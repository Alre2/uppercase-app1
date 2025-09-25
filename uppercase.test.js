const { toUppercase } = require("./uppercase");

test("konverterar text till versaler", () => {
  expect(toUppercase("hej")).toBe("HEJ");
  expect(toUppercase("JavaScript 123")).toBe("JAVASCRIPT 123");
  expect(toUppercase("åäö")).toBe("ÅÄÖ");
});