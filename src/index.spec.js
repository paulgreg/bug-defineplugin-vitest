import { isBrowser } from "./index";

describe("isBrowser", () => {
  test("should return true", () => expect(isBrowser()).toBe(true));
});
