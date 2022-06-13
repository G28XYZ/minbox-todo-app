import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../components/app/App";
import { StoreProvider } from "../services/store";

it("type text in input", async () => {
  render(
    <StoreProvider>
      <App />
    </StoreProvider>
  );
  const inputValue = "JavaScript";
  const input = screen.getByPlaceholderText("What needs to be done?");
  fireEvent.change(input, { target: { value: inputValue } });
  expect(input.textContent).toEqual("");

  const addButton = screen.getByRole("button", { name: /submit/i });

  await userEvent.dblClick(addButton);
  await userEvent.click(addButton);

  const listItems = await screen.findAllByRole("listitem");

  expect(listItems).toHaveLength(1);
  expect(input.textContent).toEqual("");
});

it("type text in input", async () => {
  render(
    <StoreProvider>
      <App />
    </StoreProvider>
  );
  const inputValue = "JavaScript";
  const input = screen.getByPlaceholderText("What needs to be done?");
  fireEvent.change(input, { target: { value: inputValue } });
  expect(input.textContent).toEqual("");

  const addButton = screen.getByRole("button", { name: /submit/i });

  await userEvent.dblClick(addButton);
  await userEvent.click(addButton);

  const listItems = await screen.findAllByRole("listitem");

  expect(listItems).toHaveLength(1);
  expect(input.textContent).toEqual("");
});
