import { TaskState, removeItem, addItem, TaskTypes } from "./types";
const initialState: TaskState = {
  items: [
    {
      task: "Cleaning",
    },
    {
      task: "Cooking",
    },
  ],
};

export function taskReducer(state = initialState, action: TaskTypes) {
  switch (action.type) {
    case addItem:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case removeItem:
      return {
        ...state,
        items: state.items.filter((item) => item.task !== action.payload),
      };
    default:
      return state;
  }
}
