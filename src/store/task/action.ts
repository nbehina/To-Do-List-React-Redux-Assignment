import { TaskTypes, addItem, removeItem, Item } from "./types";

export function removeItemFunction(task: string): TaskTypes {
  return {
    type: removeItem,
    payload: task,
  };
}

export function addItemFunction(item: Item): TaskTypes {
  return {
    type: addItem,
    payload: item,
  };
}
