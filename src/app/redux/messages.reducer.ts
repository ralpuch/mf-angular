import { createReducer, on } from "@ngrx/store";
import * as MessageActions from "./messages.actions";

export const initialState: string[] = [];

export const messagesReducer = createReducer(
  initialState,
  on(MessageActions.sendMessage, (state, { message }) => [...state, message])
);
