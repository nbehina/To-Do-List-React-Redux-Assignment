import { InventoryTypes, addItem, removeItem, Item } from "./types";

export function removeItemFunction(task: string): InventoryTypes {
  return {
    type: removeItem,
    payload: task,
  };
}

export function addItemFunction(item: Item): InventoryTypes {
  return {
    type: addItem,
    payload: item,
  };
}
