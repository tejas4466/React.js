import { configureStore } from "@reduxjs/toolkit"; //core redux se aya he
import todoReducer from "./features/todo/todoSlice";

//each application has one store which is called as single source of truth
export const store = configureStore({
  reducer: todoReducer, //this is reducer list
}); //takes an object as argument
