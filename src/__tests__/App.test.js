import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // To simulate user actions
import App from "../App";
import '@testing-library/jest-dom'; // For using jest-dom matchers like .toBeInTheDocument(), .toBeChecked(), etc.

// Test the initial state of the page
test("pizza checkbox is initially unchecked", () => {
  render(<App />); // Render the App component

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i }); // Find the checkbox
  expect(addPepperoni).not.toBeChecked(); // Ensure the checkbox is not checked initially
});

test("toppings list initially contains only cheese", () => {
  render(<App />);

  // Verify that there is only one list item (Cheese) initially
  expect(screen.getAllByRole("listitem").length).toBe(1);

  // Check that "Cheese" is in the document
  expect(screen.getByText("Cheese")).toBeInTheDocument();

  // Ensure that "Pepperoni" is not in the document initially
  expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
});

// Test the effect of clicking the checkbox
test("checkbox appears as checked when user clicks it", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  // Simulate a user clicking the checkbox
  userEvent.click(addPepperoni);

  // Verify the checkbox is now checked
  expect(addPepperoni).toBeChecked();
});

test("topping appears in toppings list when checked", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  // Simulate clicking the checkbox to add pepperoni
  userEvent.click(addPepperoni);

  // Verify that there are now 2 list items (Cheese and Pepperoni)
  expect(screen.getAllByRole("listitem").length).toBe(2);

  // Check that both "Cheese" and "Pepperoni" are in the document
  expect(screen.getByText("Cheese")).toBeInTheDocument();
  expect(screen.getByText("Pepperoni")).t
