import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserProfile from "./TestProfile";

test("UserProfile component properly display information from props", () => {
  render(<UserProfile name="pranjhi" email="pranjhi@gmail.com" phoneNo="123987" />);

  expect(screen.getByText("Name: pranjhi")).toBeInTheDocument();
  expect(screen.getByText("Email: pranjhi@gmail.com")).toBeInTheDocument();
  expect(screen.getByText("Phone Number: 123987")).toBeInTheDocument();
});