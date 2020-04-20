import { combineReducers, createStore } from "redux";
import { taskReducer } from "./task/reducers";

const rootReducer = combineReducers({
  task: taskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
