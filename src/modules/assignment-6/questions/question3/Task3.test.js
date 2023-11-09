import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./TestCounter";

test("Counter initially displays count 0", () => {
  render(<Counter />);
  const countElement = screen.getByText("Count: 0");
  expect(countElement).toBeInTheDocument();
});

test("Clicking increment button increases the count", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("Increment");

  fireEvent.click(incrementButton);

  const updatedCountElement = screen.getByText("Count: 1");
  expect(updatedCountElement).toBeInTheDocument();
});

test("Clicking decrement button decreases the count", () => {
  render(<Counter />);
  const decrementButton = screen.getByText("Decrement");

  fireEvent.click(decrementButton);

  const updatedCountElement = screen.getByText("Count: -1");
  expect(updatedCountElement).toBeInTheDocument();
});
