import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../components/app/App";
import { StoreProvider } from "../services/store";

function renderApp() {
  return render(
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}
const inputValue = "JavaScript";

const INITIAL_TOTAL_ITEMS = 3;
const INITIAL_ACTIVE_ITEMS = 2;

it("Add todo - type text in input and press enter", async () => {
  renderApp();
  const input = screen.getByPlaceholderText("What needs to be done?");
  userEvent.type(input, `${inputValue}{enter}`);
  expect(input.textContent).toEqual("");

  const listItems = await screen.findAllByRole("listitem");
  expect(listItems).toHaveLength(INITIAL_TOTAL_ITEMS);
  expect(input.textContent).toEqual("");
});

it("Add todo - type text in input and click button", async () => {
  renderApp();
  const input = screen.getByPlaceholderText("What needs to be done?");
  const addButton = screen.getByRole("button", { name: /submit/i });

  fireEvent.change(input, { target: { value: inputValue } });
  expect(input.textContent).toEqual("");
  await userEvent.dblClick(addButton);
  const listItems = await screen.findAllByRole("listitem");
  expect(listItems).toHaveLength(INITIAL_TOTAL_ITEMS + 1);
  expect(input.textContent).toEqual("");
});

it("Switch view - click buttons on tools block", () => {
  renderApp();

  const arrOfNameButton = ["All", "Active", "Completed"];

  arrOfNameButton.forEach((name) => {
    const button = screen.getByRole("button", { name });
    fireEvent.click(button);
    expect(button.classList.contains("tools__button_active")).toBe(true);
  });
});

it("Check todo, find in completed and clear completed", async () => {
  renderApp();
  // ввести в инпут значение и нажать энтер
  const input = screen.getByPlaceholderText("What needs to be done?");
  userEvent.type(input, `${inputValue}`);
  fireEvent.submit(input);
  // нажать кнопку выполнения задачи
  const checkButton = screen.getAllByRole("button", { name: "check" });
  fireEvent.click(checkButton[0]);
  // нажать кнопку сортировки выполненных задач
  const buttonCompleted = screen.getByRole("button", { name: "Completed" });
  fireEvent.click(buttonCompleted);
  // проверить список задач в выбранной сортировке
  expect(await screen.findAllByRole("listitem")).toHaveLength(
    INITIAL_ACTIVE_ITEMS
  );
  // очистить выполненные задачи
  const clearButton = screen.getByRole("button", { name: "clear" });
  fireEvent.click(clearButton);
  // проверить список задач в выбранной сортировке
  expect(await screen.findByText("Nothing in Completed")).toBeTruthy();
});

it("Add todo - 10 tasks, complete one and clear completed", async () => {
  renderApp();

  const input = screen.getByPlaceholderText("What needs to be done?");
  Array.from(inputValue).forEach(() => {
    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.submit(input);
  });
  // нажать кнопку выполнения задачи первого по списку
  const checkButtons = screen.getAllByRole("button", { name: "check" });
  fireEvent.click(checkButtons[0]);

  expect(await screen.findAllByRole("listitem")).toHaveLength(
    inputValue.length + INITIAL_TOTAL_ITEMS
  );

  const clearButton = screen.getByRole("button", { name: "clear" });
  fireEvent.click(clearButton);

  expect(await screen.findAllByRole("listitem")).toHaveLength(
    inputValue.length + INITIAL_ACTIVE_ITEMS
  );
});
