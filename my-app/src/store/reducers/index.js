import { combineReducers } from "redux";
import Books from "./books/index";

export default combineReducers({
  books: Books
});
