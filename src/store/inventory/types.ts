export interface Item {
  task: string;
}

export interface InventoryState {
  items: Item[];
}
// Or can be written  items: Array<{ id: number; name: string; color: string }>;

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

export type InventoryTypes = RemoveItem | AddItem;
