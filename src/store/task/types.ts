export interface Item {
  task: string;
}

export interface TaskState {
  items: Item[];
}
// Or can be written  items: Array<{name: string}>;

export const removeItem = "removeItem";
export const addItem = "addItem";

interface RemoveItem {
  type: typeof removeItem;
  payload: string;
}

interface AddItem {
  type: typeof addItem;
  payload: Item;
}

export type TaskTypes = RemoveItem | AddItem;
