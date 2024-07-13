import { test, expect } from "@jest/globals";
import { rover } from "../rover";

test("Rover says hello", () => {
  expect(rover()).toEqual("Hello");
});
