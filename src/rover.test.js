import { rover } from "./rover";

test("Rover says hello", () => {
  expect(rover()).toEqual("Hello");
});
