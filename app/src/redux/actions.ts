import { Book } from "../shared/interfaces";
import { CLEAR_ITEMS, RENDER_ITEMS } from "./actionTypes";

export const renderItems = (books: Array<Book>) => ({
  type: RENDER_ITEMS,
  books: books
})

export const clearItems = () => ({
  type: CLEAR_ITEMS
})