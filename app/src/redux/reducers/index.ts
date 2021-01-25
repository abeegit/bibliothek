import { IScriptSnapshot } from "typescript";
import { Book } from "../../shared/interfaces";
import { RENDER_ITEMS, CLEAR_ITEMS } from "../actionTypes";

interface IState {
  books: Array<Book>;
}

const initialState: IState = {
  books: []
};

export default function(state: IState=initialState, action: any) {
  switch (action.type) {
    case RENDER_ITEMS: {
      return {
        ...state,
        books: action.books
      };
    }
    case CLEAR_ITEMS: {
      return {
        ...state,
        books: []
      }
    }
  }
}