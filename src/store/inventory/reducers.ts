import { InventoryState, removeItem, addItem, InventoryTypes } from "./types";
const initialState: InventoryState = {
  items: [
    {
      task: "Cleaning",
    },
    {
      task: "Cooking",
    },
  ],
};

export function inventoryReducer(state = initialState, action: InventoryTypes) {
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
