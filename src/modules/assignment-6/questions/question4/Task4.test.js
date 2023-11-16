import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 
import LoginForm from "./TestLogin";

test("Form fields can be filled", () => {
  render(<LoginForm />);

  const usernameInput = screen.getByPlaceholderText("Username");
  const passwordInput = screen.getByPlaceholderText("Password");
  fireEvent.change(usernameInput, { target: { value: "pranjhi" } });
  fireEvent.change(passwordInput, { target: { value: "123" } });

  expect(usernameInput).toHaveValue("pranjhi");
  expect(passwordInput).toHaveValue("123");
});

test("Submit button works correctly with correct credentials", () => {
  render(<LoginForm />);
  const usernameInput = screen.getByPlaceholderText("Username");
  const passwordInput = screen.getByPlaceholderText("Password");
  const submitButton = screen.getByText("Login");

  fireEvent.change(usernameInput, { target: { value: "pranjhi" } });
  fireEvent.change(passwordInput, { target: { value: "123" } });

  fireEvent.click(submitButton);

  const successMessage = screen.getByText("You are logged in!");
  expect(successMessage).toBeInTheDocument();
});

test("Submit button fails with incorrect credentials", () => {
  render(<LoginForm />);
  const usernameInput = screen.getByPlaceholderText("Username");
  const passwordInput = screen.getByPlaceholderText("Password");
  const submitButton = screen.getByText("Login");
  fireEvent.change(usernameInput, { target: { value: "incorrectUser" } });
  fireEvent.change(passwordInput, { target: { value: "wrongPassword" } });

  fireEvent.click(submitButton);
  const successMessage = screen.queryByText("You are logged in!");
  expect(successMessage).not.toBeInTheDocument();
});
